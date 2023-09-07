import { motion } from "framer-motion";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

import { useAppState } from "../../context/initialState";
import { RowContainer, SectionTitle } from "../reusable";

const FruitShowcase = () => {
  const [state] = useAppState();
  const { foods } = state;
  const fruits = foods?.filter((food) => food.category === "Fruits");

  return (
    <section className="my-20">
      <div className="flex justify-between">
        <SectionTitle title="Our Fresh & Healthy Fruits" />
        <div className="hidden items-center gap-3 md:flex">
          <motion.button
            whileTap={{ scale: 0.75 }}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-300 text-xl text-white shadow-sm transition duration-150 ease-in-out hover:bg-orange-500 hover:shadow-lg"
          >
            <MdKeyboardArrowLeft />
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.75 }}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-300 text-xl text-white shadow-sm transition duration-150 ease-in-out hover:bg-orange-500 hover:shadow-lg"
          >
            <MdKeyboardArrowRight />
          </motion.button>
        </div>
      </div>

      {fruits ? <RowContainer foodsData={fruits} /> : null}
    </section>
  );
};

export default FruitShowcase;
