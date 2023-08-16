import Users from "./pages/Users";
import SurveyGroups from "./pages/SurveyGroups";
import Roles from "./pages/Roles";
import Properties from "./pages/Properties";
import User from "./pages/User";
import Role from "./pages/Role";
import Property from "./pages/Property";
import SurveyGroup from "./pages/SurveyGroup";

const Routes = [
  {
    path: "/",
    element: <Users />,
  },
  {
    path: "/users",
    element: <Users />,
  },
  {
    path: "/users/:userId",
    element: <User />,
  },
  {
    path: "/roles",
    element: <Roles />,
  },
  {
    path: "/roles/:roleId",
    element: <Role />,
  },
  {
    path: "/properties",
    element: <Properties />,
  },
  {
    path: "/properties/:propertyId",
    element: <Property />,
  },
  {
    path: "/survey-groups",
    element: <SurveyGroups />,
  },
  {
    path: "/survey-groups/:surveyGroupId",
    element: <SurveyGroup />,
  },
];

export default Routes;
