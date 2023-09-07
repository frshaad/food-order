type Props = {
  title: string;
};

const SectionTitle = ({ title }: Props) => {
  return (
    <h2 className="relative from-orange-400 to-orange-600 py-2 text-2xl font-semibold capitalize text-headingColor transition-all duration-150 ease-in-out before:absolute before:bottom-0 before:left-0 before:h-1 before:w-32 before:rounded-lg before:bg-gradient-to-r before:content-[''] ">
      {title}
    </h2>
  );
};

export default SectionTitle;
