import clsx from "clsx";

import notFound from "../../assets/img/NotFound.svg";
import { Food } from "../../types";
import { FoodCard } from ".";

type Props = {
  foodsData: Food[];
  overFlow?: boolean;
};

const RowContainer = ({ foodsData, overFlow }: Props) => {
  return (
    <div
      id="slider"
      className={clsx(
        "no-scrollbar my-2 flex items-center gap-10 scroll-smooth py-12",
        {
          "scrollbar-none overflow-auto overflow-x-visible": overFlow,
          "flex-wrap justify-center overflow-x-hidden": !overFlow,
        },
      )}
    >
      {foodsData && foodsData.length > 0 ? (
        foodsData.map((food) => <FoodCard key={food.id} food={food} />)
      ) : (
        <div className="flex w-full flex-col items-center justify-center">
          <img src={notFound} className="h-72" />
          <p className="my-2 text-xl font-semibold text-headingColor">
            Items Not Available
          </p>
        </div>
      )}
    </div>
  );
};

export default RowContainer;
