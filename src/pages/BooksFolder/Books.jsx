import React, { Suspense } from 'react';
import SingleBook from '../Single Book/singleBook';


const Books = ({data}) => {


    return (
        <div>
          <h1 className='text-3xl text-center p-6'>Books</h1>
          <Suspense fallback={<span>Loading...</span>} >
         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
             {
            data.map((single)=> <SingleBook key={single.id} single={single} ></SingleBook>)
          }
         </div>
          </Suspense>
        </div>
    );
};

export default Books;