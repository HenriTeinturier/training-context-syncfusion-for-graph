import React from 'react';
import { Header } from '../components/';
import { useStateContext } from '../contexts/ContextProvider';

const Table = () => {
  const { currentColor } = useStateContext();
  console.log(currentColor);
  let testClassName;
  if ( currentColor === '#3F00D0') {
    testClassName = `bg-[${currentColor}] text-gray-200 `
  } else {
    testClassName = `bg-[${currentColor}]`;
  }
  console.log(testClassName);

  return (
    <div className="w-full m-6 md:m-10 p-2 md:p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="Page" title="Table" />
      <div className="flex flex-col shadow-lg  ">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8 ">
            <div className="overflow-hidden ">
              <table className="min-w-full">
                <thead className="border-b">
                  <tr className={testClassName}>
                    <th scope="col" className="text-sm font-medium text-white px-6 py-4 text-left">
                      #
                    </th>
                    <th scope="col" className="text-sm font-medium text-white px-6 py-4 text-left">
                      First
                    </th>
                    <th scope="col" className="text-sm font-medium text-white px-6 py-4 text-left">
                      Last
                    </th>
                    <th scope="col" className="text-sm font-medium text-white px-6 py-4 text-left">
                      Handle
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white dark:bg-main-dark-bg border-b  dark:border-slate-800 transition duration-300 ease-in-out hover:bg-gray-100">
                    <td className="px-6  py-4 whitespace-nowrap text-sm font-medium text-gray-900">1</td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      Mark
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      Otto
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      @mdo
                    </td>
                  </tr>
                  <tr className="bg-white dark:bg-main-dark-bg border-b dark:border-slate-800 transition duration-300 ease-in-out hover:bg-gray-100">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">2</td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      Jacob
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      Thornton
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      @fat
                    </td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-main-dark-bg dark:border-slate-800 transition duration-300 ease-in-out hover:bg-gray-100">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">3</td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      Larry
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      Wild
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      @twitter
                    </td>
                  </tr>
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