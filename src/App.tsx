import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "./app/hooks";
import { Layout } from "./components";
import {
  fetchAllFoods,
  getFoodsError,
  getFoodsStatus,
} from "./features/foods/foodsSlice";
import { CreateItem, Home } from "./pages";

const App = () => {
  const dispatch = useAppDispatch();
  const foodsStatus = useAppSelector(getFoodsStatus);
  const foodsError = useAppSelector(getFoodsError);

  useEffect(() => {
    if (foodsStatus === "idle") {
      dispatch(fetchAllFoods());
    }
  }, [dispatch, foodsStatus]);

  if (foodsStatus === "loading") {
    console.log("Loading foods...");
  } else if (foodsStatus === "succeeded") {
    console.log("All Foods are laoded");
  } else if (foodsStatus === "failed") {
    console.log("Loading foods failed", foodsError);
  }

  return (
    <AnimatePresence mode="wait">
      <div className="flex flex-col bg-primary">
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
