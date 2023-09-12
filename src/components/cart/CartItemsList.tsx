import { MdOutlineShoppingCart } from "react-icons/md";

import { useAppSelector } from "../../app/hooks";
import { selectAllCartItems } from "../../features/cart/cartSlice";
import CartItem from "./CartItem";

const CartItemsList = () => {
  const cartItems = useAppSelector(selectAllCartItems);
  const isCartEmpty = cartItems.length === 0;

  return (
    <div className="no-scrollbar mx-auto flex w-11/12 flex-1 flex-col items-center gap-2 overflow-auto rounded-lg py-6 md:flex-[4]">
      {isCartEmpty ? (
        <div className="mt-5 flex items-center gap-4 text-2xl font-semibold">
          <div className="text-4xl">
            <MdOutlineShoppingCart />
          </div>
          <p>Cart is empty</p>
        </div>
      ) : (
        <>
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
        </>
      )}
    </div>
  );
};

export default CartItemsList;
