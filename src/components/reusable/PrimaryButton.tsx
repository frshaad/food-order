const PrimaryButton = () => {
  return (
    <button className="group relative w-fit overflow-hidden rounded bg-orange-500 px-5 py-2.5 text-white transition-all duration-300 ease-out hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-400 hover:ring-2 hover:ring-orange-400 hover:ring-offset-2">
      <span className="ease absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 transform bg-white opacity-10 transition-all duration-1000 group-hover:-translate-x-40"></span>
      <span className="relative">Order Now</span>
    </button>
  );
};

export default PrimaryButton;
