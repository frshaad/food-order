import { motion } from "framer-motion";
import { MdShoppingBasket } from "react-icons/md";

const CartButton = () => (
  <motion.button
    className="relative rounded-full p-2 text-2xl text-textColor"
    whileTap={{ scale: 0.9 }}
  >
    <MdShoppingBasket />
    <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-cartNumBg p-2 text-sm font-semibold text-white">
      3
    </span>
  </motion.button>
);

export default CartButton;
