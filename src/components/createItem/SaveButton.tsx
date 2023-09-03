type Props = {
  isLoading: boolean;
};

const SaveButton = ({ isLoading }: Props) => {
  return (
    <button
      className="middle none center w-full rounded-lg bg-orange-500 px-6 py-3 font-sans text-xs font-bold uppercase text-white shadow-md shadow-orange-500/20 transition-all hover:shadow-lg hover:shadow-orange-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      data-ripple-light="true"
      type="submit"
      disabled={isLoading}
    >
      <span className="ease absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 transform bg-white opacity-10 transition-all duration-1000 group-hover:-translate-x-40"></span>
      <span className="relative">{isLoading ? "Please Wait..." : "Save"}</span>
    </button>
  );
};

export default SaveButton;
