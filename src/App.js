import DefaultLayout from "./Layout/DefaultLayout";
import { HomePage, DetailPage, CartPage } from "./pages";
import router from "./router";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path={router.Home}
            element={
              <DefaultLayout>
                <HomePage />
              </DefaultLayout>
            }
          />
          <Route
            path={router.Detail}
            element={
              <DefaultLayout>
                <DetailPage />
              </DefaultLayout>
            }
          />
          <Route
            path={router.Cart}
            element={
              <DefaultLayout>
                <CartPage />
              </DefaultLayout>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
