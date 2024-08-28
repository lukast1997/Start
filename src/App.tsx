import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Jobs from "./pages/jobs/Jobs";
import News from "./pages/news/News";
import Contact from "./pages/contacts/Contacts";
import Layout from "./components/layout/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/jobs", element: <Jobs /> },
      { path: "/news", element: <News /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
