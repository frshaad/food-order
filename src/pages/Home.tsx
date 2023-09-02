import delivery from "../assets/img/delivery.png";
import { PrimaryButton } from "../components";

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

const Home = () => {
  return (
    <section className="grid grid-cols-1 gap-2 lg:grid-cols-2">
      <div className="flex flex-1 flex-col gap-4 md:gap-8">
        <BikeDelivery />
        <h2 className="mb-4 text-6xl font-bold leading-normal tracking-wide text-headingColor md:mb-0 md:text-7xl md:leading-relaxed lg:leading-[1.8] ">
          The Fastest Delivery in{" "}
          <span className="text-7xl text-orange-600 md:text-8xl">
            Your City
          </span>
        </h2>
        <p className="mb-4 text-base leading-relaxed text-textColor md:mb-0">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate et
          velit delectus alias dignissimos labore. Quibusdam a suscipit harum
          qui vero corrupti quae optio nam sapiente modi, similique, consectetur
          perferendis.
        </p>
        <PrimaryButton />
      </div>
      <div className="flex-1 p-4"></div>
    </section>
  );
};

export default Home;
