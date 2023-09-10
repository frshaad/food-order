import { motion } from "framer-motion";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

import { useAppSelector } from "../../app/hooks";
import { selectAllFoods } from "../../features/foods/foodsSlice";
import slide from "../../utils/sliderFn";
import { RowContainer, SectionTitle } from "../reusable";

const FruitShowcase = () => {
  const foods = useAppSelector(selectAllFoods);
  const fruits = foods?.filter((food) => food.category === "Fruits");

  return (
    <section className="mb-5">
      <div className="mb-8 flex justify-between">
        <SectionTitle title="Our Fresh & Healthy Fruits" />
        <div className="hidden items-center gap-3 md:flex">
          <motion.button
            whileTap={{ scale: 0.75 }}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-300 text-xl text-white shadow-sm transition duration-150 ease-in-out hover:bg-orange-500 hover:shadow-lg"
            onClick={() => slide("left")}
          >
            <MdKeyboardArrowLeft />
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.75 }}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-300 text-xl text-white shadow-sm transition duration-150 ease-in-out hover:bg-orange-500 hover:shadow-lg"
            onClick={() => slide("right")}
          >
            <MdKeyboardArrowRight />
          </motion.button>
        </div>
      </div>

      {fruits ? <RowContainer foodsData={fruits} overFlow /> : null}
    </section>
  );
};

export default FruitShowcase;
