import React from 'react';
import Games from './Games';

function Cards({ item }) {
  console.log(item);
  return (
    <>
      <div className="mt-4 my-3 p-3">
        <div
          className="card bg-base-100 shadow-xl hover:scale-105 duration-200"
          style={{
            width: '400px', // Set a fixed width
            height: '500px', // Set a fixed height
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            overflow: 'hidden'
          }}
        >
          <figure
            style={{
              height: '70%', // Adjust as needed to fit the overall card size
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden'
            }}
          >
            <img
              src={item.image}
              alt={item.name}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover' // Ensures the image covers the area without distortion
              }}
            />
          </figure>
          <div className="card-body" style={{ padding: '16px', display: 'flex', flexDirection: 'column' }}>
            <h2 className="card-title" style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>
              {item.name}
              <div className="badge badge-secondary" style={{ marginLeft: '8px' }}>NEW</div>
            </h2>
            <div className="card-actions" style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div className="badge badge-outline" style={{ fontSize: '1rem', fontWeight: 'bold' }}>{item.category}</div>
              <div className="cursor-pointer px-2 py-2 rounded-full border-[2px] badge badge-outline hover:bg-pink-500 text-white duration-200">
                Start Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
