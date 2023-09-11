import CartCheckout from "./CartCheckout";
import CartHeader from "./CartHeader";
import CartItemsList from "./CartitemsList";

const Cart = () => {
  return (
    <section className="fixed right-0 top-0 z-50 flex h-screen w-460 flex-col items-center bg-primary shadow-2xl">
      <CartHeader />
      <div className="relative flex h-full w-full flex-col justify-between gap-4 rounded-t-3xl bg-gray-700 text-white">
        <CartItemsList />
        <CartCheckout />
      </div>
    </section>
  );
};

export default Cart;
