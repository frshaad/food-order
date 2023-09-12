import { motion } from "framer-motion";
import {
  MdAddCircleOutline,
  MdAttachMoney,
  MdRemoveCircleOutline,
} from "react-icons/md";

import { useAppDispatch } from "../../app/hooks";
import {
  decreaseQty,
  increaseQty,
  removeFromCart,
} from "../../features/cart/cartSlice";
import { Food } from "../../types";

type ButtonProps = {
  type: "increaseQty" | "decreaseQty";
  id: string;
  qty: number;
};

const Button = ({ type, id, qty }: ButtonProps) => {
  const dispatch = useAppDispatch();
  const decreaseItemQty = () => {
    if (qty > 1) {
      dispatch(decreaseQty(id));
    } else {
      dispatch(removeFromCart(id));
    }
  };

  return (
    <motion.button
      whileTap={{ scale: 0.6 }}
      onClick={
        type === "increaseQty"
          ? () => dispatch(increaseQty(id))
          : decreaseItemQty
      }
      className="flex h-8 w-8 items-center justify-center rounded-full text-2xl transition hover:bg-cartBg/50"
    >
      {type === "increaseQty" ? (
        <MdAddCircleOutline />
      ) : (
        <MdRemoveCircleOutline />
      )}
    </motion.button>
  );
};

const CartItem = ({ id, imageUrl, price, title, qty }: Food) => {
  return (
    <div className="flex h-20 w-full items-center justify-between rounded-lg border border-cartItem bg-cartItem px-4 py-3 drop-shadow-xl transition hover:bg-cartBg hover:drop-shadow-md">
      <div>
        <img src={imageUrl} alt={title} className="w-20" />
      </div>

      <div className="flex h-full w-full flex-col justify-between px-4 text-gray-50">
        <p className="font-medium">{title}</p>
        <div className="flex items-center font-medium">
          <MdAttachMoney />
          <p className="text-gray-300">{price}</p>
        </div>
      </div>

      <div className="flex items-center gap-2 text-gray-50">
        <Button id={id} type="decreaseQty" qty={qty} />
        <p className="flex h-8 w-8 items-center justify-center rounded-md bg-cartBg">
          {qty}
        </p>
        <Button id={id} type="increaseQty" qty={qty} />
      </div>
    </div>
  );
};

export default CartItem;
