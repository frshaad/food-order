import { Provider } from "react-redux";
import { store } from "./store";

type Props = {
  children: React.ReactNode;
};

const AuthProvider = ({ children }: Props) => {
  return <Provider store={store}>{children}</Provider>;
};

export default AuthProvider;
