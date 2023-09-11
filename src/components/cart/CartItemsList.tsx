import { useAppSelector } from "../../app/hooks";
import { selectAllCartItems } from "../../features/cart/cartSlice";
import CartItem from "./CartItem";

const CartItemsList = () => {
  const cartItems = useAppSelector(selectAllCartItems);

  return (
    <div className="no-scrollbar mx-auto flex w-11/12 flex-[5] flex-col items-center gap-2 overflow-auto rounded-lg py-6">
      {cartItems.map((item) => (
        <CartItem key={item.id} {...item} />
      ))}
    </div>
  );
};

export default CartItemsList;
