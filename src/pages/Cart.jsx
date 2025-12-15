import { useDispatch, useSelector } from "react-redux";
import { IMG_URL } from "../utiles/Constants";
import { removeItem, clearCart } from "../DataStore/CartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.item);

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Cart</h1>

        {cartItems.length > 0 && (
          <button
            onClick={() => dispatch(clearCart())}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Clear Cart
          </button>
        )}
      </div>

      {cartItems.length === 0 ? (
        <h2 className="text-xl">Your cart is empty 🛒</h2>
      ) : (
        cartItems.map((item) => {
          const info = item.card.info;

          return (
            <div
              key={info.id}
              className="flex justify-between items-center border-b py-4"
            >
              <div className="flex gap-4 items-center">
                <img
                  className="w-24 h-20 object-cover rounded"
                  src={IMG_URL + info.imageId}
                  alt={info.name}
                />

                <div>
                  <h2 className="font-bold">{info.name}</h2>
                  <p className="text-gray-600">
                    ₹
                    {(info.defaultPrice ? info.defaultPrice : info.price) / 100}
                  </p>
                </div>
              </div>

              <button
                onClick={() => dispatch(removeItem(info.id))}
                className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300"
              >
                Remove
              </button>
            </div>
          );
        })
      )}
    </div>
  );
};

export default Cart;
