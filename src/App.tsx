import { AnimatePresence } from "framer-motion";
import { Route,Routes } from "react-router-dom";

import { Layout } from "./components";
import { CreateItem, Home } from "./pages";

const App = () => {
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
