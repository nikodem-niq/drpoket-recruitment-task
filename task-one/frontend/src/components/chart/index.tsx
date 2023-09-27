import 'chart.js/auto'
import { Radar } from 'react-chartjs-2';
import { BACKEND_URL } from '../../constants';
import { useQuery } from 'react-query';
import { useEffect } from 'react';

export const data = {
  labels: ['Transmission', 'Stuffines', 'Discomfort', 'Humidity', 'Pollution', 'Temperature', 'CO2', 'Density'],
  datasets: [
    {
      label: "Current Overall",
      data: [20, 90, 30, 50, 20, 20, 20, 20],
      order: 1,
      backgroundColor: "rgba(255, 99, 132, 0.5)",
      borderColor: "rgba(255, 99, 132, 1)",
      borderWidth: 1
    },
    {
      label: "Green",
      data: [40, 40, 40, 40, 40, 50, 40, 65],
      order: 1,
      fill: "1",
      backgroundColor: "rgba(0, 251, 0, 0.75)"
    },
    {
      label: "Gray",
      data: [80, 80, 80, 80, 80, 80, 80, 80],
      order: 0,
      fill: true,
      backgroundColor: "rgba(208, 210, 214, 0.35)"
    },
        {
      label: "White",
      data: [100, 100, 100, 100, 100, 100, 100, 100],
      order: 1,
      fill: true,
      backgroundColor: "rgba(255, 255, 255, 0.75)"
    },
  ]
};

export const RadarOptions = {
  scale: {
    ticks: {
      stepSize: 20,
      showLabelBackdrop: false,
      backdropColor: "rgba(203, 197, 11, 1)"
    },
    angleLines: {
      color: "#4b4c4f",
      lineWidth: 1
    },
    gridLines: {
      color: "#4b4c4f",
      circular: true,
      borderDash: [4, 4]
    }
  },
  responsive: true,
  plugins: {
    legend: {
      display: false
    }
  }
};

const options = {
  scales: {
    r: {
      suggestedMin: 1,
      suggestedMax: 100,
      pointLabels: {
        font: {
          size: 16, // Rozmiar czcionki etykiet
          family: 'Arial'
        },
        display: true,
      },
      ticks: {
        display: false, // Ukryj odstępy
      },
    },
  },
  plugins: {
    legend: {
      display: false
    }
  }
};

const fetchGraphData = async () => {
  const response = await fetch(`${BACKEND_URL}/graph-data`, {
    headers: {
      method: 'GET'
    }
  });
  const data = await response.json();
  return data;
};

export default function ChartComponent() {
  const { data: graphData, isLoading, isError } = useQuery('graphData', fetchGraphData);
  useEffect(() => {
    console.log(graphData)
  }, [graphData])

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

  return (
  <div className='w-screen h-2/3 flex justify-center items-cente py-10'>
    <div className='w-1/3'>
      <Radar options={RadarOptions} data={data}/>
    </div>
  </div>
  )
}
