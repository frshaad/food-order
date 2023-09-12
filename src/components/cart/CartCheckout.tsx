import clsx from "clsx";
import { MdAttachMoney } from "react-icons/md";

import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { selectAllCartItems } from "../../features/cart/cartSlice";
import { selectCurrentUser } from "../../features/user/userSlice";
import { loginWithGoogle } from "../../utils/login";

type InvoceSectionProps = {
  amount: number;
  title: string;
  isBold?: boolean;
};

const InvoceSection = ({ amount, title, isBold }: InvoceSectionProps) => {
  return (
    <div
      className={clsx("flex items-center justify-between", {
        "font-bold text-white": isBold,
      })}
    >
      <p className="text-lg capitalize">{title}</p>
      <div className="flex items-center">
        <MdAttachMoney className="text-lg" />
        <p className="text-lg">{amount}</p>
      </div>
    </div>
  );
};

const CartCheckout = () => {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector(selectAllCartItems);
  const currentUser = useAppSelector(selectCurrentUser);

  const isCartEmpty = cartItems.length === 0;

  let foodsTotalPrice = 0;
  let totalFoodsCount = 0;
  let deliveryPrice = 0;

  for (let i = 0; i < cartItems.length; i++) {
    foodsTotalPrice += cartItems[i].price * cartItems[i].qty;
  }
  for (let i = 0; i < cartItems.length; i++) {
    totalFoodsCount += cartItems[i].qty;
  }

  if (totalFoodsCount === 0) {
    deliveryPrice = 0;
  } else if (totalFoodsCount > 0 && totalFoodsCount < 5) {
    deliveryPrice = 2.5;
  } else {
    deliveryPrice = 5;
  }

  const totalPrice = foodsTotalPrice + deliveryPrice;

  return (
    <div
      className={clsx(
        "relative flex h-fit w-full flex-1 flex-col gap-7 rounded-t-3xl bg-cartTotal p-10 md:flex-[3]",
        {
          hidden: isCartEmpty,
        },
      )}
    >
      <InvoceSection title="sub totoal" amount={foodsTotalPrice} />
      <InvoceSection title="delivery" amount={deliveryPrice} />
      <div className="h-[1px] w-full bg-gray-700/90" />
      <InvoceSection title="total" amount={totalPrice} isBold />
      {currentUser ? (
        <button className="w-full rounded-full bg-orange-500 py-2">
          Check Out
        </button>
      ) : (
        <button
          className="w-full rounded-full bg-orange-500 py-2"
          onClick={() => loginWithGoogle(dispatch)}
        >
          Login to Check Out
        </button>
      )}
    </div>
  );
};

export default CartCheckout;
