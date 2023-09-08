import clsx from "clsx";
import { motion } from "framer-motion";
import { MdShoppingBasket } from "react-icons/md";

import { useAppSelector } from "../../app/hooks";
import { selectAllCartItems } from "../../features/cart/cartSlice";

const CartButton = () => {
  const cartItems = useAppSelector(selectAllCartItems);
  const isCartEmpty = cartItems.length === 0;

  return (
    <motion.button
      className="relative rounded-full p-2 text-2xl text-textColor"
      whileTap={{ scale: 0.9 }}
    >
      <MdShoppingBasket />
      <span
        className={clsx(
          "absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-orange-600 p-2 text-sm font-semibold text-white drop-shadow-lg",
          {
            hidden: isCartEmpty,
          },
        )}
      >
        {cartItems.length}
      </span>
    </motion.button>
  );
};

export default CartButton;
