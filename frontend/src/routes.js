import CreateUserProfile from "./containers/CreateUserProfile/CreateUserProfile";

var routes = [
  {
    path: "/create-user-profile",
    name: "User Profile",
    icon: "fas fa-user",
    component: CreateUserProfile,
    layout: "/admin",
  },

  {
    path: "/job-openings",
    name: "Job Openings",
    icon: "fas fa-briefcase",
    component: CreateUserProfile,
    layout: "/admin",
  },
  
  {
    path: "/submission",
    name: "Internship Evaluation",
    icon: "fas fa-clipboard-check",
    component: CreateUserProfile,
    layout: "/admin",
  },

  
];
export default routes;
