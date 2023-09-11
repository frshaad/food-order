import clsx from "clsx";
import { MdAttachMoney } from "react-icons/md";

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
  return (
    <div className="relative flex h-340 w-full flex-[4] flex-col gap-7 rounded-t-3xl bg-gray-600 p-10">
      <InvoceSection title="sub totoal" amount={27} />
      <InvoceSection title="delivery" amount={2.5} />
      <hr />
      <InvoceSection title="total" amount={29.5} isBold />
      <button className="w-full rounded-full bg-orange-500 py-2">
        Check Out
      </button>
    </div>
  );
};

export default CartCheckout;
