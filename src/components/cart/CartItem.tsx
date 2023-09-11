import { MdAttachMoney } from "react-icons/md";

import { useAppDispatch } from "../../app/hooks";
import { decreaseQty, increaseQty } from "../../features/cart/cartSlice";
import { Food } from "../../types";

type ButtonProps = {
  type: "increaseQty" | "decreaseQty";
  id: string;
};

const Button = ({ type, id }: ButtonProps) => {
  const dispatch = useAppDispatch();
  return (
    <button
      onClick={
        type === "increaseQty"
          ? () => dispatch(increaseQty(id))
          : () => dispatch(decreaseQty(id))
      }
    >
      {type === "increaseQty" ? "+" : "-"}
    </button>
  );
};

const CartItem = ({ id, imageUrl, price, title, qty }: Food) => {
  return (
    <div className="flex h-20 w-full items-center justify-between rounded-lg bg-gray-600 px-4 py-3">
      <div>
        <img src={imageUrl} alt={title} className="w-20" />
      </div>

      <div className="flex h-full w-full flex-col justify-between px-4">
        <p className="font-medium">{title}</p>
        <div className="flex items-center font-medium">
          <MdAttachMoney />
          <p>{price}</p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <Button id={id} type="decreaseQty" />
        <p className="flex h-8 w-8 items-center justify-center rounded-md bg-black">
          {qty}
        </p>
        <Button id={id} type="increaseQty" />
      </div>
    </div>
  );
};

export default CartItem;
