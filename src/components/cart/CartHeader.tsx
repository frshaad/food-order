import { MdClearAll, MdKeyboardBackspace } from "react-icons/md";

const CartHeader = () => {
  return (
    <div className="flex w-full items-center justify-between p-8">
      <div className="flex-1 text-3xl">
        <MdKeyboardBackspace />
      </div>
      <h3 className="flex-[2] text-center text-2xl font-medium">Cart</h3>
      <div className="flex flex-1 justify-end">
        <button className="flex w-fit items-center justify-center gap-1 rounded-md bg-red-100 px-3 py-1 text-sm transition hover:bg-red-400 hover:text-white">
          Clear <MdClearAll className="text-base" />
        </button>
      </div>
    </div>
  );
};

export default CartHeader;
