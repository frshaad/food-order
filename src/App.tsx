import { Routes, Route } from "react-router-dom";
import { Layout } from "./components";

const App = () => {
  return (
    <div className="flex h-auto w-screen flex-col">
      <Routes>
        <Route path="/" element={<Layout />}></Route>
      </Routes>
    </div>
  );
};

export default App;
