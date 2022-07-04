import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

// DATA
import {  returnClicDurationPurchaseByArticleFromBrand } from '../../selectors/selectors.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Graph1 = ({ brand }) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      // title: {
      //   display: true,
      //   text: 'Gap',
      // },
    },
  };

  // Récupérations des données pour notre graphique
  const [articleName, nbrClic, duration, purchase] = returnClicDurationPurchaseByArticleFromBrand(brand)

  const data = {
    labels: articleName,
    datasets: [
      {
        label: 'Nombre de clics',
        data: nbrClic,
        backgroundColor: '#45DCC3',
      },
      {
        label: 'Durée de consultation',
        data: duration,
        backgroundColor: '#374064',
      },
      {
        label: 'Achats',
        data: purchase,
        backgroundColor: '#3F00D0',
      },
    ],
  };

  return (
    
      <Bar options={options} data={data} />
  )
}

export default Graph1