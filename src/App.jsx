
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Component/Layout/Layout";
import About from "./Component/About/About";
import Contact from "./Component/Contact/Contact";
import ProjectCss from "./Component/ProjectCss/ProjectCss";
import ProjectJs from "./Component/ProjectJs/ProjectJs";
import ProjectReact from "./Component/ProjectReact/ProjectReact";
import MyProjects from "./Component/MyProjects/MyProjects";



let x = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {index: true, element: <About /> },
      {
        path: "myProjects",
        element: <MyProjects />,
        children: [
          { index: true, element: <ProjectCss /> },
          { path: "projectJs", element: <ProjectJs /> },
          { path: "projectReact", element: <ProjectReact /> },
        ],
      },
      { path: "contact", element: <Contact /> },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={x}></RouterProvider>
    </>
  );
}

export default App;
