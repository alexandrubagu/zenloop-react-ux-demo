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
    path: "/users/:userId",
    element: <User />,
  },
  {
    path: "/users",
    element: <Users />,
  },
  {
    path: "/roles/:roleId",
    element: <Role />,
  },
  {
    path: "/roles",
    element: <Roles />,
  },
  {
    path: "/properties/:propertyId",
    element: <Property />,
  },
  {
    path: "/properties",
    element: <Properties />,
  },
  {
    path: "/survey-groups/:surveyGroupId",
    element: <SurveyGroup />,
  },
  {
    path: "/survey-groups",
    element: <SurveyGroups />,
  },
  {
    path: "/",
    element: <Users />,
  },
];

export default Routes;
