import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToStoreDB } from '../../components/Utility/addToDB';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

const BookDetails = () => {
    const {id} = useParams()
    const bookId = parseInt(id)
    const data = useLoaderData()
    const singleData = data.find(book=>book.bookId === bookId)
    
    const {bookName, image} = singleData || {}

    const handleMarkAsRead = id =>{
        MySwal.fire({
  title: <p>Hello World</p>,
  didOpen: () => {
    // `MySwal` is a subclass of `Swal` with all the same instance & static methods
    MySwal.showLoading()
  },
}).then(() => {
  return MySwal.fire(<p>Shorthand works too</p>)
})

       addToStoreDB(id)
    }


    return (
        <div className=' w-2/3 mx-auto'>
           <img className='w-48' src={image} alt="" />
           <p>{bookName} </p>
           <button className='btn btn-primary' onClick={()=>handleMarkAsRead(id)} >Mark as Read</button>
           <button className='btn btn-primary' >Add to Wishlist</button>
        </div>
    );
};

export default BookDetails;