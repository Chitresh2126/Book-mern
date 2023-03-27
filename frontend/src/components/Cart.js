import React from 'react';
import { useCart } from 'react-use-cart';

const Cart = () => {
    const { 
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        emptyCart,
     } = useCart();
    if (isEmpty) return <h1 className='text-center'>Total voting is Empty</h1>
  return (
    <section className='py-4 container'>
    <div className='row justify-content-center'>
        <div className='col-12'>
            <h5>Parties volume ({totalUniqueItems}) total Voting: ({totalItems}) </h5>
            <table className='table table-light table-hover m-0'>
                <tbody>
                    {items.map((item, index)=>{
                        return(
                        <tr key={index}>
                                <td>
                                    <img src={item.img} style={{height:'6rem'}} />
                                </td>
                                <td>{item.title}</td>
                                <td>  {item.price}</td>
                                <td>Votes per party: ({item.quantity})</td>
                                
                        </tr>)
                })}
                </tbody>
            </table>
        </div>
        <div className='col-auto ms-auto'>
            <h2>Total Votes:  {cartTotal}</h2>
        </div>
        <div className='col-auto'>
            <button
                className='btn btn-danger m-2'
                onClick={()=>emptyCart()}
            >Clear all votes</button>
            
        </div>
    </div>
    </section>
  );
};

export default Cart;