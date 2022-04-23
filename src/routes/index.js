import { PluginsPage } from "../pages/Plugins/index";
import { ExplorePage } from "../pages/Explore/index";

const routes = [
  {
    path: "/",
    component: ExplorePage,
  },
  {
    path: "/plugins",
    component: PluginsPage,
  },
];

export default routes;
