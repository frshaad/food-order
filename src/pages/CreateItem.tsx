import { useState } from "react";
import { MdOutlineFastfood } from "react-icons/md";
import {
  FileUploadInput,
  NumberInput,
  SaveButton,
  SelectCategory,
  TextInput,
} from "../components/createItem";

const CreateItem = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [calories, setCalories] = useState(100);
  const [price, setPrice] = useState(5);
  const [imageAsset, setImageAsset] = useState<null | string>(null);

  const saveDetails = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    // ...
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
