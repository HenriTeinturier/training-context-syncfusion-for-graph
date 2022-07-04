import React from 'react';
import { Graph1, Graph2, Header } from '../components/';

const Charts = () => {
  const brandToDisplay = 'Gap';
  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="Page" title="Graphiques" />
      <div className="flex gap-10 flex-wrap justify-center">
        <div className="bg-slate-200 shadow-lg dark:text-gray-200 dark:bg-[#444b68] m-3 rounded-2xl md:w-780">
          <div className="flex justify-between p-2">
            <p className="font-semibold text-xl">
              Statistiques par produit
            </p>
          </div>
          <div className="graphCanva">
        <Graph1 brand={brandToDisplay}/>  
      </div>
        </div>
      </div>
      <div className="flex gap-10 flex-wrap justify-center">
        <div className="bg-slate-200 shadow-lg dark:text-gray-200 dark:bg-[#444b68] m-3 rounded-2xl md:w-780">
          <div className="flex justify-between p-2">
            <p className="font-semibold text-xl">
              C.A par produit
            </p>
          </div>
          <div className="graphCanva">
          <Graph2 brand={brandToDisplay} />  
      </div>
        </div>
      </div>
    </div>
  )
}

export default Charts