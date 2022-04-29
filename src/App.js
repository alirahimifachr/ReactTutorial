import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/layout";
import TestUseMemo from "./pages/testUseMemo";
import TestUseEffect from "./pages/testUseEffect";
import TestUseCallback from "./pages/testUseCallback";
import TestUseContext from "./pages/testUseContext";
import TestUseReducer from "./pages/testUseReducer";
import TestUseRef from "./pages/testUseRef";


function App() {
  return (
    <div>
      <div>App.js</div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<TestUseMemo />} />
            <Route path="testUseEffect" element={<TestUseEffect />} />
            <Route path="testUseCallback" element={<TestUseCallback />} />
            <Route path="testUseContext" element={<TestUseContext />} />
            <Route path="testUseReducer" element={<TestUseReducer />} />
            <Route path="testUseRef" element={<TestUseRef />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
