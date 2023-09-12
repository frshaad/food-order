import clsx from "clsx";
import { motion } from "framer-motion";

import CartCheckout from "./CartCheckout";
import CartHeader from "./CartHeader";
import CartItemsList from "./CartItemsList";

type Props = {
  isCartOpen: boolean;
  setIsCartOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Cart = ({ isCartOpen, setIsCartOpen }: Props) => {
  return (
    <motion.section
      initial={{ opacity: 0, x: 200 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 200 }}
      className={clsx(
        "fixed right-0 top-0 z-50 flex h-screen w-full flex-col items-center bg-white drop-shadow-lg md:w-460",
        {
          hidden: !isCartOpen,
        },
      )}
    >
      <CartHeader setIsCartOpen={setIsCartOpen} />
      <div className="relative flex h-full w-full flex-col justify-between gap-4 rounded-t-3xl bg-cartBg text-white">
        <CartItemsList />
        <CartCheckout />
      </div>
    </motion.section>
  );
};

export default Cart;
