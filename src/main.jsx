import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.scss";
import Projects from "./views/projects/Projects.jsx";
import Landing from "./views/landing/Landing.jsx";
import About from "./views/about/About.jsx";
import Contact from "./views/contact/Contact.jsx";
import ToDoProject from "./views/project/to-do-project/ToDoProject.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>Esto está roto</div>,
    children: [
      { index: true, element: <Landing /> },
      { path: "projects", element: <Projects /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "to-do-project", element: <ToDoProject /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
