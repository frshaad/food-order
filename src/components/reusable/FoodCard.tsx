import { motion } from "framer-motion";
import {
  MdAttachMoney,
  MdOutlineLocalFireDepartment,
  MdShoppingBasket,
} from "react-icons/md";

// import { useAppState } from "../../context/initialState";
import { Food } from "../../types";

const FoodCard = ({ calories, price, title, imageUrl }: Food) => {
  // const [state, dispatch] = useAppState();
  // const { cartItems } = state;

  return (
    <div className="relative flex h-[175px] w-275 min-w-[275px]  flex-col items-center justify-around rounded-lg border bg-cardOverlay py-2 pr-4 backdrop-blur-lg transition hover:shadow-lg md:w-300 md:min-w-[300px]">
      <div className="flex w-full items-center justify-between">
        <div className="-mt-14 h-36 w-36 drop-shadow-2xl">
          <img src={imageUrl} alt="" className="h-full w-full object-contain" />
        </div>
        <motion.div
          whileTap={{ scale: 0.75 }}
          className="relative -mt-14 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-orange-500 drop-shadow-sm hover:drop-shadow-xl"
        >
          <MdShoppingBasket className="-translate-x-[2px] text-white" />
          <div className="absolute right-2 top-0 h-2 w-2 text-white">+</div>
        </motion.div>
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
