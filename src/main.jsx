import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.scss";
import Projects from "./views/projects/Projects.jsx";
import Landing from "./views/landing/Landing.jsx";
import About from "./views/about/About.jsx";
import Contact from "./views/contact/Contact.jsx";
import ToDoProject from "./views/project/to-do-project/ToDoProject.jsx";
import Error from "./views/error/Error.jsx";
import DaikiriProject from "./views/project/daikiri-project/DaikiriProject.jsx";
import WeatherApp from "./views/project/weather-app/WeatherApp.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Landing /> },
      { path: "projects", element: <Projects /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "to-do-project", element: <ToDoProject /> },
      { path: "daikiri-project", element: <DaikiriProject /> },
      { path: "weather-app", element: <WeatherApp /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
