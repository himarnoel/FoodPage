import React, { useState } from "react";
import { data } from "./../data/data";

const Food = () => {
  const btn =
    "border border-orange-600 text-orange-600 rounded-xl m-1 px-5 py-1 hover:text-white hover:bg-orange-600";

  const [foods, setfoods] = useState(data);

  //Filter Type burgers/pizza/etc
  const filterType=(category)=>{
    setfoods(
        data.filter((item)=>{
            return item.category===category
        })
    )
  }

  //Filter by price
  const filterFood=(price)=>{
    setfoods(
        data.filter((item)=>{
            return item.price==price;
        })
    )
  }
  return (
    <div className="max-w-[1640px] m-auto px-4 py-12">
      <h1 className="text-orange-600 font-bold text-4xl text-center">
        Top Rated Menu Items
      </h1>
      {/*Filter Row */}
      <div className="flex flex-col lg:flex-row justify-between">
        {/* Filter Type */}
        <div>
          <p className="font-bold text-gray-700">Filter Type</p>
          <div className="flex justify-between flex-wrap">
            <button className={btn} onClick={()=>setfoods(data)}>All</button>
            <button className={btn} onClick={()=>filterType('burger')}>Burgers</button>
            <button className={btn} onClick={()=>filterType('pizza')}>Pizza</button>
            <button className={btn} onClick={()=>filterType('salad')}>Salads</button>
            <button className={btn} onClick={()=>filterType('chicken')}>Chickens</button>
          </div>
        </div>

        {/* Filter Price*/}
        <div>
          <p className="font-bold text-gray-700">Filter price</p>
          <div className="flex justify-between max-w-[390px] w-full">
            <button className={btn} onClick={()=>filterFood('$')}>$ </button>
            <button className={btn} onClick={()=>filterFood('$$')}>$$ </button>
            <button className={btn} onClick={()=>filterFood('$$$')}>$$$ </button>
            <button className={btn} onClick={()=>filterFood('$$$$')}>$$$$ </button>
          </div>
        </div>
      </div>

      {/* Display Grid */}
      <div className='grid grid-col-2  md:grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
        {foods.map((item, index) => (
          <div key={index} className='border shadow-lg hover:scale-105 duration-300 rounded-lg'>
            <img src={item.image} alt={item.name}  className='w-full h-[200px] object-cover rounded-t-lg'/>
            <div className='flex justify-between px-2 py-4'>
              <p className='font-bold'>{item.name}</p>
              <p>
                <span className='bg-orange-500 text-white rounded-full p-1'>{item.price}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Food;
