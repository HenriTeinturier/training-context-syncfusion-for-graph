import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

import {  returnCaByArticleForOneBrand } from '../../selectors/selectors.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const Graph2 = ({ brand }) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'C.A par produit',
      },
    },
  };

  const [articleName, articleCa] = returnCaByArticleForOneBrand(brand);

  const data = {
    labels: articleName,
    datasets: [
      {
        label: '# of Votes',
        data: articleCa,
        backgroundColor: [
          '#45DCC3',
          '#374064',
          '#3F00D0',
          '#9EC6BE',
        ],
        borderColor: [
          '#45DCC3',
          '#374064',
          '#3F00D0',
          '#9EC6BE',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <>
      <Doughnut data={data} options={options}/>
    </>
  )
}

export default Graph2