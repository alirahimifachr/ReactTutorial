import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/layout";
import TestUseMemo from "./pages/testUseMemo";
import TestUseEffect from "./pages/testUseEffect";

function App() {
  return (
    <div>
      <div>App.js</div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<TestUseMemo />} />
            <Route path="testUseEffect" element={<TestUseEffect />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
