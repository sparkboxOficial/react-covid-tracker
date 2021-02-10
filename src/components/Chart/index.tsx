import React from 'react';

import { Bar } from 'react-chartjs-2';

import ICovidApi from '../../dtos/ICovidApi';

interface ChartDTO {
  covidData?: ICovidApi;
  country?: boolean;
}

const Chart:React.FC<ChartDTO> = ({ covidData, country }) => {

  const barChart = <Bar 
    data={{
      labels: ['Infectados', 'Recuperados', 'Mortos'],
      datasets: [
        {
          label: 'People',
          backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
          data: [150, 200, 300]
        }
      ]
    }}
    options={{
      legend: { display: false },
      title: { display: true, text: `Current state no ` },
    }}
  />;

  return ( barChart )
}

export default Chart;