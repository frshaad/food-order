import clsx from "clsx";
import { motion } from "framer-motion";
import {
  MdAddShoppingCart,
  MdAttachMoney,
  MdOutlineLocalFireDepartment,
  MdOutlineRemoveShoppingCart,
} from "react-icons/md";

import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  selectAllCartItems,
  toogleAddToCart,
} from "../../features/cart/cartSlice";
import { Food } from "../../types";

type Props = {
  food: Food;
};

const FoodCard = ({ food }: Props) => {
  const { calories, imageUrl, price, title, id } = food;
  const dispatch = useAppDispatch();
  const cart = useAppSelector(selectAllCartItems);
  const isFoodInCart = cart.find((item) => item.id === id);

  return (
    <div className="relative flex h-44 w-72 min-w-[275px] flex-col items-center justify-around rounded-lg border bg-cardOverlay py-2 pr-4 backdrop-blur-lg transition hover:shadow-lg md:min-w-[300px]">
      <div className="flex w-full items-center justify-between">
        <div className="-mt-14 h-40 w-40 drop-shadow-2xl">
          <img src={imageUrl} alt="" className="h-full w-full object-contain" />
        </div>
        <motion.button
          whileTap={{ scale: 0.75 }}
          className={clsx(
            "relative -mt-14 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full text-lg drop-shadow-sm transition hover:drop-shadow-xl",
            {
              "bg-orange-500 text-white": !isFoodInCart,
              "border border-red-500 text-red-500 hover:bg-red-500 hover:text-white":
                isFoodInCart,
            },
          )}
          onClick={() => dispatch(toogleAddToCart(food))}
        >
          {isFoodInCart ? (
            <MdOutlineRemoveShoppingCart />
          ) : (
            <MdAddShoppingCart />
          )}
        </motion.button>
      </div>

      <div className="-mt-10 flex w-full flex-col items-end justify-end">
        <p className="text-base font-semibold text-textColor md:text-lg">
          {title}
        </p>
        <div className="mb-2 flex items-center gap-1 font-medium text-gray-500">
          <MdOutlineLocalFireDepartment className="text-orange-500" />
          <p className="flex items-center gap-1">
            {calories} <span className="text-sm font-thin">calories</span>
          </p>
        </div>
        <div className="flex items-center gap-8">
          <div className="flex items-center text-xl font-semibold text-headingColor">
            <span className="text-base text-orange-500">
              <MdAttachMoney />
            </span>
            <span className="">{price}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
