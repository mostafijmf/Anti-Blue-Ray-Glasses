import { useState } from 'react'

// Fake data
const orders = [
  { id: 1, name: 'John Doe', delivery: 'Regular' },
  { id: 2, name: 'Jane Smith', delivery: 'Regular' },
  { id: 3, name: 'Jane Smith 1', delivery: 'Express' },
  { id: 4, name: 'Jane Smith 2', delivery: 'Regular' },
  { id: 5, name: 'Jane Smith 5', delivery: 'Express' },
  { id: 6, name: 'Jane Smith 6', delivery: 'Regular' },
  { id: 7, name: 'Jane Smith 7', delivery: 'Express' },
  { id: 8, name: 'Jane Smith 8', delivery: 'Regular' },
  { id: 9, name: 'Jane Smith 9', delivery: 'Express' },
  { id: 10, name: 'Jane Smith 10', delivery: 'Express' },
  { id: 11, name: 'John Doe 1', delivery: 'Regular' },
  { id: 12, name: 'Jane Smith 11', delivery: 'Express' },
  { id: 13, name: 'Jane Smith 12', delivery: 'Regular' },
  { id: 14, name: 'Jane Smith 13', delivery: 'Express' },
  { id: 15, name: 'Jane Smith 14', delivery: 'Regular' },
  { id: 16, name: 'Jane Smith 15', delivery: 'Express' },
  { id: 17, name: 'Jane Smith 16', delivery: 'Regular' },
  { id: 18, name: 'Jane Smith 17', delivery: 'Express' },
  { id: 19, name: 'Jane Smith 18', delivery: 'Regular' },
  { id: 20, name: 'Jane Smith 19', delivery: 'Regular' },
];

const App = () => {
  const [selectTab, setSelectTab] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 5; // Items show per page

  // Filter orders
  const filterOrders = selectTab === 'all'
    ? orders
    : orders.filter(order => order.delivery.toLowerCase() === selectTab);

  // Calculate pagination
  const totalPages = Math.ceil(filterOrders.length / limit);
  const indexOfLastItem = currentPage * limit;
  const indexOfFirstItem = indexOfLastItem - limit;
  const currentItems = filterOrders.slice(indexOfFirstItem, indexOfLastItem);

  // Handle tab selection
  const handleTabClick = (tab) => {
    setSelectTab(tab);
    setCurrentPage(1);
  };

  // Handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (<div className='w-full h-screen bg-blue-50'>
    <section className='max-w-7xl mx-auto'>
      <h1 className='text-5xl font-bold text-center py-10 text-gray-800'>
        Anti Blue Ray Glasses
      </h1>
      <div className="flex items-center justify-center gap-5">
        <button
          className={`${selectTab === 'all' ? 'bg-blue-600 text-white' : 'bg-blue-200 text-gray-800'} px-5 py-2 font-medium rounded-md hover:bg-blue-600 hover:text-white duration-300`}
          onClick={() => handleTabClick('all')}
        >
          All Orders
        </button>
        <button
          className={`${selectTab === 'regular' ? 'bg-blue-600 text-white' : 'bg-blue-200 text-gray-800'} px-5 py-2 font-medium rounded-md hover:bg-blue-600 hover:text-white duration-300`}
          onClick={() => handleTabClick('regular')}
        >
          Regular Delivery
        </button>
        <button
          className={`${selectTab === 'express' ? 'bg-blue-600 text-white' : 'bg-blue-200 text-gray-800'} px-5 py-2 font-medium rounded-md hover:bg-blue-600 hover:text-white duration-300`}
          onClick={() => handleTabClick('express')}
        >
          Express Delivery
        </button>
      </div>

      <div className='max-w-2xl w-[90%] mx-auto bg-white mt-10 rounded-lg border'>
        <table className="table-auto w-full">
          <thead className="bg-violet-50 text-left uppercase">
            <tr>
              <th className="text-sm py-3 px-5">
                <h2 className='w-max'>ID</h2>
              </th>
              <th className="text-sm py-3 pr-5">
                <h2 className='w-max'>Name</h2>
              </th>
              <th className="text-sm py-3 pr-5">
                <h2 className='w-max'>Delivery</h2>
              </th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map(order => (
              <tr key={order.id} className='border-b'>
                <td className='py-3 px-5'>
                  <p className="w-max text-base">
                    {order.id}
                  </p>
                </td>
                <td className='py-3 pr-5'>
                  <p className="w-max text-sm">
                    {order.name}
                  </p>
                </td>
                <td className='py-3 pr-5'>
                  <p className="w-max text-sm">
                    {order.delivery}
                  </p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="w-max mx-auto mt-10 mb-6 flex items-center gap-2">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            className={`${currentPage === i + 1 ? 'bg-blue-600 text-white border-blue-600' : 'border-gray-300'} px-2 border rounded`}
            onClick={() => handlePageChange(i + 1)}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </section>
  </div>
  )
}

export default App
