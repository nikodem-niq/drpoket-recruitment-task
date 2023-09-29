import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";
import { BACKEND_URL } from '../../constants';
import { useQuery } from 'react-query';
import { useEffect } from 'react';

// 
const rotatingLabelPlugin = {
  id: "rotatingLabelPlugin",
  afterDraw(chart, args, options) {
    const ctx = chart.ctx;
    const scale = chart.scales.r;
    if (!scale) return;
    
    ctx.save();
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = '#000';
    ctx.font = '20px Arial';

    scale._pointLabels.forEach((label, index) => {
      const angle = scale.getIndexAngle(index);
      const distance = scale.getDistanceFromCenterForValue(scale.max);
      let x = chart.width / 2 + Math.cos(angle - Math.PI / 2) * distance * 1.3;
      let y = chart.height / 2 + Math.sin(angle - Math.PI / 2) * distance * 1.11;

      // Todo: rotating labels
      // ctx.rotate(...)
      ctx.fillText(label, x, y);
    });
    
    ctx.restore();
  }
};

ChartJS.register(
  // rotatingLabelPlugin,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
);

const options = {
  elements: {
    point: {
      radius: 1,
      borderColor: 'black',
      backgroundColor: 'black'
    },
    line: {
      borderWidth: 1,
      borderColor: 'rgba(0, 0, 0, 0.2)',
      fill: true,
      backgroundColor: 'rgba(0, 0, 0, 0.1)',
    },
  },
  scales: {
    r: {
      min: 0,
      max: 100,
      pointLabels: {
        font: {
          size: 16,
          family: "Arial",
        },
        display: true,
      },
      angleLines: {
        color: "rgba(124, 124, 124, 0.5)",
        lineWidth: 4,
      },
      ticks: {
        stepSize: 20,
        display: false,
      },
    },
  },
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      enabled: false
    }
  },
};

const fetchGraphData = async () => {
  const response = await fetch(`${BACKEND_URL}/graph-data`, {
    headers: {
      method: 'GET'
    }
  });
  const { foundGraphData } = await response.json();
  return foundGraphData;
};

export default function ChartComponent() {
  const { data: graphData, isLoading, isError } = useQuery('graphData', fetchGraphData);

  useEffect(() => {
    console.log(graphData)
  }, [graphData])

  // mock 1st and 2nd data from db (show it on graph)
  // further implementation: adaptation for more data, currently for demonstration purposes supports only the first two datasets
  if(!graphData) return;

  const { 
    transmission: firstDataset_transmission,
    stuffines: firstDataset_stuffines,
    discomfort: firstDataset_discomfort,
    humidity: firstDataset_humidity,
    pollution: firstDataset_pollution,
    temperature: firstDataset_temperature,
    carbonDioxide: firstDataset_carbonDioxide,
    density: firstDataset_density 
  } = graphData[2];

  const { 
    transmission: secondDataset_transmission,
    stuffines: secondDataset_stuffines,
    discomfort: secondDataset_discomfort,
    humidity: secondDataset_humidity,
    pollution: secondDataset_pollution,
    temperature: secondDataset_temperature,
    carbonDioxide: secondDataset_carbonDioxide,
    density: secondDataset_density 
  } = graphData[3];

  if(isLoading) {
    return (
      <div>Loading..</div>
    )
  }

  if(isError) {
    return (
      <div>Error with fetching..</div>
    )
  }

  const data = {
    labels: [
      "Transmission",
      "Stuffines",
      "Discomfort",
      "Humidity",
      "Pollution",
      "Temperature",
      "CO2",
      "Density",
    ],
    datasets: [
      {
        label: "First dataset",
        data: [
          firstDataset_transmission,
          firstDataset_stuffines,
          firstDataset_discomfort,
          firstDataset_humidity,
          firstDataset_pollution,
          firstDataset_temperature,
          firstDataset_carbonDioxide,
          firstDataset_density 
        ],
        backgroundColor: "rgba(136, 155, 240, 1)",
        borderColor: "rgba(136, 155, 240, 0.1)",
        borderWidth: 5,
      },
      {
        label: "Second dataset",
        data: [
          secondDataset_transmission,
          secondDataset_stuffines,
          secondDataset_discomfort,
          secondDataset_humidity,
          secondDataset_pollution,
          secondDataset_temperature,
          secondDataset_carbonDioxide,
          secondDataset_density 
        ],
        backgroundColor: "rgba(136, 155, 240, 0.7)",
        borderColor: "rgba(136, 155, 240, 0.1)",
        borderWidth: 5,
      },
      {
        data: [40, 40, 40, 40, 40, 40, 40, 40],
        fill: true,
        backgroundColor: ["rgba(242, 229, 170, 0.2)"],
        pointRadius: [0],
      },
      {
        data: [60, 60, 60, 60, 60, 60, 60, 60],
        fill: true,
        backgroundColor: ["rgba(227, 211, 136, 0.1)"],
        pointRadius: [0],
      },
      {
        data: [80, 80, 80, 80, 80, 80, 80, 80],
        fill: true,
        backgroundColor: ["rgba(232, 232, 232, 0.5)"],
        pointRadius: [0],
      },
      {
        data: [100, 100, 100, 100, 100, 100, 100, 100],
        fill: true,
        backgroundColor: ["rgba(255, 255, 255, 0.2)"],
        pointRadius: [7],
        pointBackgroundColor: ["rgba(232, 232, 232, 1)"],
        pointBorderColor: ['rgba(152, 152, 152, 1)'],
        pointBorderWidth: [2],
      },
    ],
  };

  return (
  <div className='w-screen h-2/3 flex justify-center items-center py-10'>
    <div className='w-1/3'>
      <Radar data={data} options={options}/>
    </div>
  </div>
  )
}
