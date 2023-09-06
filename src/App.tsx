import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import { Layout } from "./components";
import { useAppState } from "./context/initialState";
import { CreateItem, Home } from "./pages";
import { ActionType, Food } from "./types";
import { fetchAllFoods } from "./utils/firebaseFns";

const App = () => {
  const [state, dispatch] = useAppState();
  const { foods } = state;

  useEffect(() => {
    const fetchFoodsData = async () => {
      await fetchAllFoods().then((data) =>
        dispatch({ type: ActionType.SET_FOODS, foodItems: data as Food[] }),
      );
    };
    fetchFoodsData();
  }, [dispatch]);

  if (!foods) {
    console.log("Loading...");
  } else {
    console.log(foods);
  }

  return (
    <AnimatePresence mode="wait">
      <div className="flex h-auto w-screen flex-col bg-primary">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="create-item" element={<CreateItem />} />
          </Route>
        </Routes>
      </div>
    </AnimatePresence>
  );
};

export default App;
