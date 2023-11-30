import { generatePath } from "react-router-dom";
interface SwitchRoutes {
  root: string;
  list: string;
  detail: string;
}

export const switchRoutes: SwitchRoutes = {
  root: "/rick-morty",
  list: "/rick-morty/list",
  detail: "/rick-morty/detail/:id",
};

interface Routes extends Omit<SwitchRoutes, "detail"> {
  detail: (id: string) => string;
}

export const routes: Routes = {
  ...switchRoutes,
  detail: (id) => generatePath(switchRoutes.detail, { id }),
};
