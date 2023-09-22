import 'chart.js/auto'
import { Radar } from 'react-chartjs-2';

const data = {
  labels: ['Transmission', 'Stuffines', 'Discomfort', 'Humidity', 'Pollution', 'Temperature', 'CO2', 'Density'],
  datasets: [
    {
      label: 'First dataset',
      data: [33, 53, 85, 41, 44, 65],
      fill: true,
      backgroundColor: 'rgba(75,192,192,0.2)',
      borderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: 'rgba(75,192,192,1)',
      pointBorderColor: '#fff', // Kolor obramowania punktów
      pointHoverBackgroundColor: '#fff', // Kolor punktów podczas najazdu
      pointHoverBorderColor: 'rgba(75,192,192,1)',
      pointRotation: -45, // Obrót punktów o -45 stopni
    },
  ],
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

export default function ChartComponent() {
  return (
  <div className='w-screen h-2/3 flex justify-center items-cente py-10'>
    <div className='w-1/3'>
      <Radar options={options} data={data}/>
    </div>
  </div>
  )
}
