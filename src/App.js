import './App.scss';
import Home from "./pages/Home/Home";
import Upload from "./pages/Upload/Upload";
import NotFound from "./pages/NotFound/NotFound";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      {/* //Header is not here because I don't want it in my NotFound page//  */}
      <Routes>
        <Route
          path="/"
          element={
            <Home />
          }
        />
        <Route
          path="/upload"
          element={<Upload />}
        />
        <Route path="/videos/:videoId" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
