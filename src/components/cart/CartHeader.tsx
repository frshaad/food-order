import clsx from "clsx";
import { motion } from "framer-motion";
import { useState } from "react";
import { MdClearAll, MdClose } from "react-icons/md";

import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { clearCart, selectAllCartItems } from "../../features/cart/cartSlice";

type Props = {
  setIsCartOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const CartHeader = ({ setIsCartOpen }: Props) => {
  const dispatch = useAppDispatch();
  const [verifyClear, setVerifyClear] = useState(false);
  const isCartEmpty = useAppSelector(selectAllCartItems).length === 0;

  const clearCartItems = () => {
    dispatch(clearCart());
    setVerifyClear(false);
  };

  return (
    <div className="flex w-full items-center justify-between p-8 text-textColor">
      <motion.button
        whileTap={{ scale: 0.9 }}
        className="flex-1 text-2xl"
        onClick={() => setIsCartOpen(false)}
      >
        <MdClose />
      </motion.button>
      <h3 className="flex-[2] text-center text-2xl font-medium">Cart</h3>
      <div className="flex flex-1 justify-end">
        <motion.button
          whileTap={{ scale: 0.8 }}
          className={clsx(
            "group flex w-fit items-center justify-center gap-1 rounded-md bg-red-100 px-1 py-1 text-sm hover:bg-red-300 hover:text-red-800 md:px-3",
            { hidden: isCartEmpty },
          )}
          onClick={() => setVerifyClear(true)}
        >
          {verifyClear ? (
            <button
              onClick={clearCartItems}
              className="text-sm text-red-400 group-hover:text-red-900"
            >
              You Sure?
            </button>
          ) : (
            <>
              Clear <MdClearAll className="text-base" />
            </>
          )}
        </motion.button>
      </div>
    </div>
  );
};

export default CartHeader;
