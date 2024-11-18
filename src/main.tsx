import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { HelmetProvider } from "react-helmet-async";
import "@styles/App.css";
import "@lang/i18n.tsx";
import App from "./App.tsx";
import store from "@redux/store.ts";
import Landing from "@views/Landing.tsx";
import NotFound from "@views/NotFound.tsx";
import About from "@views/About.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <HelmetProvider>
          <Provider store={store}>
            <App />
          </Provider>
        </HelmetProvider>
      </>
    ),
    children: [
      { path: "/", element: <Landing /> },
      {path: "/about", element: <About />},
      { path: "*", element: <NotFound /> },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <RouterProvider router={router} />
);
