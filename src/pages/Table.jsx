import React from 'react';
import { Header } from '../components/';
import { useStateContext } from '../contexts/ContextProvider';

import { returnArticleAndStatFromBrand } from '../selectors/selectors.js'

const Table = () => {
  const [products] = returnArticleAndStatFromBrand('Gap');

  const { currentColor } = useStateContext();
  console.log(currentColor)
  let testClassName;
  if ( currentColor === '#3F00D0') {
    testClassName = 'tableWithoutTailwind text-gray-200'
  } else if ( currentColor === '#45DCC3' ){
    testClassName = 'tableWithoutTailwindGreen text-gray-200';
  }

  return (
    <div className=" m-6 p-2  md:m-10 md:p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="Page" title="Table" />
      <div className="flex flex-col shadow-xl mb-44">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8 ">
            <div className="overflow-hidden">
              <table className="w-full">
                <thead className="border-b">
                  <tr className={testClassName}>
                    <th scope="col" className="text-sm font-medium text-white px-6 py-4 text-left">
                      #
                    </th>
                    <th scope="col" className="text-sm font-medium text-white px-6 py-4 text-left">
                      Nom
                    </th>
                    <th scope="col" className="text-sm font-medium text-white px-6 py-4 text-left">
                      Type
                    </th>
                    
                    <th scope="col" className="text-sm font-medium text-white px-6 py-4 text-left">
                      Prix
                    </th>
                    <th scope="col" className="text-sm font-medium text-white px-6 py-4 text-left">
                      Vue
                    </th>
                    <th scope="col" className="text-sm font-medium text-white px-6 py-4 text-left">
                      Vente
                    </th>
                    <th scope="col" className="text-sm font-medium text-white px-6 py-4 text-left">
                      C.A généré
                    </th>
                  </tr>
                </thead>
                <tbody>
                
                {
                  products.map((product) => {
                    console.log(1);
                    return (
                      <tr className="bg-white dark:bg-main-dark-bg border-b  dark:border-slate-800 transition duration-300 ease-in-out hover:bg-gray-100 dark:hover:bg-secondary-dark-bg">
                        <td className="px-6  py-4 whitespace-nowrap text-sm font-medium text-gray-900">{product.id} </td>
                        <td className="px-6  py-4 whitespace-nowrap text-sm font-medium text-gray-900">{product.article} </td>
                        <td className="px-6  py-4 whitespace-nowrap text-sm font-medium text-gray-900">{product.type}</td>
                        <td className="px-6  py-4 whitespace-nowrap text-sm font-medium text-gray-900">{product.price}</td>
                        <td className="px-6  py-4 whitespace-nowrap text-sm font-medium text-gray-900">{product.vue}</td>
                        <td className="px-6  py-4 whitespace-nowrap text-sm font-medium text-gray-900">{product.purchase}</td>
                        <td className="px-6  py-4 whitespace-nowrap text-sm font-medium text-gray-900">{product.ca}</td>
                      </tr>)
                  })
                }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
  </div>
  )
}

export default Table