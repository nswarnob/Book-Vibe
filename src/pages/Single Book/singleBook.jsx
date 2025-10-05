import React from 'react';
import { Link } from 'react-router';



const SingleBook = ({single}) => {

 const {bookName, image, review, bookId}=single

    return (
      <div className="card bg-base-100 w-96 shadow-sm border pt-5">
  <figure className="px-10 py-10 bg-gray-200 w-2/3 mx-auto rounded-xl">
    <img
      src={image}
      alt="image of books"
      className="rounded-xl h-[166px]" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{bookName}</h2>
    <p>{review} </p>
    <div className="card-actions">
      <Link to={`/bookDetails/${bookId}`}  ><button className="btn btn-primary">Book Details</button></Link>
    </div>
  </div>
</div>
    );
};

export default SingleBook;