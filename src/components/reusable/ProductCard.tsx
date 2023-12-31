import { MdAttachMoney } from "react-icons/md";

import { ShowcaseFood } from "../../types";

const ProductCard = ({ imageUrl, title, price, description }: ShowcaseFood) => {
  return (
    <div className="relative flex w-fit flex-col items-center gap-5 rounded-3xl bg-cardOverlay p-5 drop-shadow-xl backdrop-blur-md transition duration-300 ease-in-out hover:scale-105">
      <div className="-mb-20">
        <img
          src={imageUrl}
          alt={title}
          className="relative -top-20 w-32 lg:w-40"
        />
      </div>
      <div className="flex flex-col items-center gap-2">
        <h5 className="text-base font-semibold text-textColor lg:text-xl">
          {title}
        </h5>
        <p className="font-semibold text-lighttextGray">{description}</p>
        <div className="flex items-center font-semibold text-headingColor">
          <MdAttachMoney />
          <span>{price}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
