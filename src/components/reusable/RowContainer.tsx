import clsx from "clsx";

import notFound from "../../assets/img/NotFound.svg";
import { Food } from "../../types";
import { FoodCard } from ".";

type Props = {
  foodsData: Food[];
  overFlow?: boolean;
  scrollValue?: number;
};

const RowContainer = ({ foodsData, overFlow }: Props) => {
  return (
    <div
      className={clsx("my-12 flex w-full items-center  gap-3 scroll-smooth", {
        "scrollbar-none overflow-x-scroll": overFlow,
        "flex-wrap justify-center overflow-x-hidden": !overFlow,
      })}
    >
      {foodsData && foodsData.length > 0 ? (
        foodsData.map((food) => <FoodCard key={food.id} {...food} />)
      ) : (
        <div className="flex w-full flex-col items-center justify-center">
          <img src={notFound} className="h-340" />
          <p className="my-2 text-xl font-semibold text-headingColor">
            Items Not Available
          </p>
        </div>
      )}
    </div>
  );
};

export default RowContainer;
