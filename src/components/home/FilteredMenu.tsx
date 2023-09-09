import clsx from "clsx";
import { useState } from "react";
import { IconType } from "react-icons";

import { useAppSelector } from "../../app/hooks";
import { categories } from "../../constants";
import { selectAllFoods } from "../../features/foods/foodsSlice";
import { FoodCategory } from "../../types";
import { RowContainer, SectionTitle } from "../reusable";

type CategoryBoxProps = {
  category: FoodCategory;
  Icon: IconType;
};

const FilteredMenu = () => {
  const [selectedCategory, setSelectedCategory] =
    useState<FoodCategory>("Chicken");

  const foods = useAppSelector(selectAllFoods);
  const filteredFoods = foods.filter(
    (food) => food.category === selectedCategory,
  );

  const CategoryBox = ({ category, Icon }: CategoryBoxProps) => {
    return (
      <button
        className={clsx(
          "flex w-24 flex-col items-center gap-4 rounded-lg py-5 font-medium transition duration-200 ease-in-out",
          {
            "scale-105 bg-orange-500 text-white drop-shadow-xl":
              selectedCategory === category,
            "bg-white text-headingColor drop-shadow-sm hover:scale-105 hover:bg-orange-200 hover:text-orange-700":
              selectedCategory !== category,
          },
        )}
        onClick={() => setSelectedCategory(category)}
      >
        <div className="rounded-full bg-orange-500 p-4 text-2xl text-white">
          <Icon />
        </div>
        <p className="text-sm">{category}</p>
      </button>
    );
  };

  const FilterSection = () => {
    return (
      <div
        className={clsx(
          "no-scrollbar mx-auto flex w-fit items-center justify-between gap-8 pt-12",
        )}
      >
        {categories.map((item) => (
          <CategoryBox category={item.name} key={item.id} Icon={item.icon} />
        ))}
      </div>
    );
  };

  return (
    <section>
      <SectionTitle title="Our Hot Dishes" />
      <FilterSection />
      <RowContainer foodsData={filteredFoods} />
    </section>
  );
};

export default FilteredMenu;
