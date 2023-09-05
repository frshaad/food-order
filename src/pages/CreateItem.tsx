import { useState } from "react";
import { MdOutlineFastfood } from "react-icons/md";
import { v4 as uuidv4 } from "uuid";
import {
  FileUploadInput,
  NumberInput,
  SaveButton,
  SelectCategory,
  TextInput,
} from "../components/createItem";
import { Food, FoodCategory } from "../types";
import { firebaseSaveItem } from "../utils/firebaseFns";

const CreateItem = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState<FoodCategory>("Chicken");
  const [imageAsset, setImageAsset] = useState<null | string>(null);
  const [calories, setCalories] = useState(100);
  const [price, setPrice] = useState(5);

  const isAnyFieldEmpty =
    !title || !category || !calories || !price || !imageAsset;

  const clearInputFileds = () => {
    setTitle("");
    setCategory("Chicken");
    setCalories(0);
    setImageAsset(null);
    setPrice(0);
  };

  const saveDetails = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      if (isAnyFieldEmpty) {
        console.log("there is an empty field!");
      } else {
        const foodData: Food = {
          id: uuidv4(),
          title,
          imageUrl: imageAsset,
          calories,
          category,
          price,
          qty: 1,
        };
        firebaseSaveItem(foodData);
        setIsLoading(false);
        clearInputFileds();
        console.log("Data uploaded successfully");
      }
    } catch (error) {
      console.log("error", error);
    }
    setIsLoading(false);
  };

  return (
    <section className="flex h-screen items-center justify-center">
      <form
        className="flex w-11/12 max-w-xl flex-col gap-8 rounded-xl border border-gray-200 bg-white p-8 drop-shadow-lg"
        onSubmit={saveDetails}
      >
        <div className="mb-4 flex items-center justify-center gap-4 text-3xl text-orange-500">
          <MdOutlineFastfood />
          <h1 className="block font-sans font-semibold leading-tight tracking-normal text-headingColor antialiased">
            Add New Food
          </h1>
        </div>
        <TextInput title={title} setTitle={setTitle} />
        <SelectCategory category={category} setCategory={setCategory} />
        <FileUploadInput
          imageAsset={imageAsset}
          setImageAsset={setImageAsset}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
        />
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <NumberInput
            title="Calories"
            value={calories}
            setValue={setCalories}
          />
          <NumberInput title="Price" value={price} setValue={setPrice} />
        </div>
        <SaveButton isLoading={isLoading} />
      </form>
    </section>
  );
};

export default CreateItem;
