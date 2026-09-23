import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Work } from "./pages/Work";
import { ProjectDetail } from "./pages/ProjectDetail";
import { Play } from "./pages/Play";
import { About } from "./pages/About";
import { NotFound } from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "work", Component: Work },
      { path: "work/:id", Component: ProjectDetail },
      { path: "play", Component: Play },
      { path: "about", Component: About },
      { path: "*", Component: NotFound },
    ],
  },
]);
