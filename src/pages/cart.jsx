import {useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import CartTile from "../components/cart-tile";


export default function Cart() {

    const [totalCart, setTotalCart] = useState(0)
    const { cart } = useSelector(state => state)
    console.log('cart', cart)

    useEffect(() => {
        setTotalCart(cart.reduce((acc, curr) => acc + curr.price, 0))
    }, [cart]);

    return <div className="flex justify-center">
        {
           cart && cart.length ?
               <>
                   <div className="min-h-[80vh] grid md:grid-cols-2 max-w-6xl mx-auto">
                       <div className="flex flex-col justify-center items-center p-3">
                           {
                               cart.map(cartItem => <CartTile cartItem={cartItem} key={cartItem.id}/>)
                           }
                       </div>
                   </div>
                   <div className="w-[300px]">
                       <div className="flex flex-col justify-center items-end p-5 space-y-5 mt-14">
                           <h2 className="font-bold text-lg text-red-800">Your Cart Summary</h2>
                           <p>
                               <span className="text-gray-800 font-bold">Total Items</span>
                               <span> { cart.length }</span>
                           </p>
                           <p>
                               <span className="text-gray-800 font-bold">Total Amount</span>
                               <span> { totalCart }</span>
                           </p>
                       </div>
                   </div>
               </>

               : <div className="min-h-[80vh] flex flex-col justify-center items-center">
                   <h2 className="text-gray-800 font-bold text-xl mb-2">
                       Your cart is empty
                   </h2>
                   <Link to={'/'}>
                       <button className="bg-red-950 text-white border-2 rounded-lg font-bold p-4">SHOP NOW</button>
                    </Link>
               </div>
        }
    </div>
}