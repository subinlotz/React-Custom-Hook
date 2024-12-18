import React from 'react'
import useFetch from '../hooks/useFetch';

function Photos() {
    const { data, loading, error, refetch } = useFetch(
      "https://jsonplaceholder.typicode.com/photos"
    );
  
    if (loading) {
      return (
        <div className="w-full h-screen flex justify-center items-center bg-black">
          <h1 className="text-white text-2xl">Loading...</h1>
        </div>
      );
    }
  
    if (error) {
      return (
        <div className="w-full h-screen flex justify-center items-center bg-black">
          <h1 className="text-white text-2xl">Error: Failed to fetch data</h1>
        </div>
      );
    }
  
    return (
      <div>
        <div className="bg-black text-white text-3xl flex justify-center h-14 w-full items-center fixed top-0"> 
          Photos
        </div>
        <div className="w-full bg-black flex flex-wrap gap-2 justify-center items-center mt-14">
          {data.map((item) => (
            <div className="w-80 h-52 border-white border-2 flex flex-col justify-center items-center p-2 ">
              <img className="w-28" src={item.url} />
              <p className="text-white text-center mt-2">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

export default Photos
