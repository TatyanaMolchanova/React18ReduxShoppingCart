import {useDispatch} from "react-redux";
import {removeFromCart} from "../../store/slices/cart-slice";


export default function CartTile({ cartItem }) {

    const dispatch = useDispatch()
    const handleRemoveFromCart = () => {
        dispatch(removeFromCart(cartItem.id))
    }

    return (
        <div className="flex items-center p-5 justify-between bg-red-500 mt-2 mb-2 rounded-xl">
            <div className="flex p-3">
                <img
                    className="h-28 rounded-lg"
                    src={cartItem?.image}
                    alt={cartItem?.title}
                />
                <div className="ml-10 self-start space-y-5">
                    <h2 className="text-white font-bold">{cartItem?.title}</h2>
                    <p className="text-white font-extrabold"> {cartItem?.price}</p>
                </div>
            </div>
            <button
                onClick={handleRemoveFromCart}
                className="bg-red-950 text-white border-2 rounded-lg font-bold p-4">
                Remove from cart
            </button>
        </div>
    )
}