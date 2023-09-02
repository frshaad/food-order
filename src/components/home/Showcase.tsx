import { PrimaryButton, ProductCard } from "../reusable";
import delivery from "../../assets/img/delivery.png";
import heroBg from "../../assets/img/heroBg.png";
import { showcaseData } from "../../constants";

const BikeDelivery = () => (
  <div className="flex w-fit items-center gap-2 rounded-full bg-orange-100 px-4 py-1">
    <p className="text-base font-semibold text-orange-500">Bike Delivery</p>
    <img
      src={delivery}
      alt="bike delivery"
      className="h-8 w-8 rounded-full bg-white object-contain drop-shadow-xl"
    />
  </div>
);

const ShowcaseInfo = () => (
  <div className="flex h-screen flex-1 flex-col gap-4 md:h-auto md:gap-8">
    <BikeDelivery />
    <h2 className="mb-4 text-6xl font-bold leading-normal tracking-wide text-headingColor md:mb-0 md:text-7xl md:leading-relaxed lg:leading-[1.8] ">
      The Fastest Delivery in{" "}
      <span className="text-7xl text-orange-600 md:text-8xl">Your City</span>
    </h2>
    <p className="mb-4 text-base leading-relaxed text-textColor md:mb-0">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate et
      velit delectus alias dignissimos labore. Quibusdam a suscipit harum qui
      vero corrupti quae optio nam sapiente modi, similique, consectetur
      perferendis.
    </p>
    <PrimaryButton />
  </div>
);

const ShowcaseProducts = () => (
  <div className="relative flex-1 py-2 md:mt-24 lg:mt-0">
    <img
      src={heroBg}
      alt="hero background"
      className="absolute right-1/2 top-0 h-800 translate-x-1/2 md:h-685 lg:right-0 lg:translate-x-0 2xl:-translate-x-16"
    />
    <div className="placc mx-auto grid max-w-xl grid-cols-1 justify-items-center gap-y-20 p-10 pt-16 md:grid-cols-2">
      {showcaseData.map((item) => (
        <ProductCard key={item.id} {...item} />
      ))}
    </div>
  </div>
);

const Showcase = () => {
  return (
    <section className="grid grid-cols-1 gap-2 pt-28 md:h-screen md:pt-32 lg:grid-cols-2 lg:pt-36">
      <ShowcaseInfo />
      <ShowcaseProducts />
    </section>
  );
};

export default Showcase;
