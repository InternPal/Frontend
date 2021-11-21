import AppliedJobs from "./components/AppliedJobs/AppliedJobs";
import AdminJobs from "./containers/AdminJobs/AdminJobs";
import CreateJobForm from "./components/JobForm/CreateJobForm";
import DisplayUserProfile from "./components/DisplayUserProfile/DisplayUserProfile";
import CoordinatorRegistrationForm from "./components/CoordinatorRegistrationForm";
import StudentJobs from "./containers/StudentJobs";
import StudentInternshipEvaluation from "./containers/InternshipEvaluation/StudentInternshipEvaluation";
import ManageCoordinators from "./containers/ManageCoordinators/ManageCoordinators";
import ManageEvaluations from "./containers/ManageEvaluations.js/ManageEvaluations";
import CoordinatorEvaluation from "./containers/CoordinatorEvaluation/CoordinatorEvaluations";

export const StudentRoutes = [

  {
    path: "/user-profile",
    name: "User Profile",
    icon: "fas fa-user",
    component: DisplayUserProfile,
    layout: "/admin",
  },

  {
    path: "/job-search",
    name: "Search Jobs",
    icon: "fas fa-search",
    component: StudentJobs,
    layout: "/admin",
  },

  {
    path: "/applied-jobs",
    name: "Applied Jobs",
    icon: "fas fa-briefcase",
    component: AppliedJobs,
    layout: "/admin",
  },

  {
    path: "/submission",
    name: "Internship Evaluation",
    icon: "fas fa-clipboard-check",
    component: StudentInternshipEvaluation,
    layout: "/admin",
  },

];

export const AdminRoutes = [

  {
    path: "/post-jobs",
    name: "Post Jobs",
    icon: "fas fa-pen-square",
    component: CreateJobForm,
    layout: "/admin",
  },

  {
    path: "/admin-jobs",
    name: "Manage Jobs",
    icon: "fas fa-briefcase",
    component: AdminJobs,
    layout: "/admin",
  },

  {
    path: "/create-faculty-coordinator",
    name: "Faculty Coordinator",
    icon: "fas fa-user-plus",
    component: ()=><CoordinatorRegistrationForm role="Faculty"/>,
    layout: "/admin"
  },

  {
    path: "/create-industry-coordinator",
    name: "Industry Coordinator",
    icon: "fas fa-user-plus",
    component: ()=><CoordinatorRegistrationForm role="Industry"/>,
    layout: "/admin"
  },

  {
    path: "/manage-coordinators",
    name: "Manage Coordinators",
    icon: "fas fa-tasks",
    component: ManageCoordinators,
    layout: "/admin"
  },

  {
    path: "/manage-evaluations",
    name: "Manage Evaluations",
    icon: "fas fa-clipboard-check",
    component: ManageEvaluations,
    layout: "/admin",
  },

];

export const CoordinatorRoutes = [
  {
    path: "/coordinator-evaluations",
    name: "Evaluations",
    icon: "fas fa-clipboard-check",
    component: CoordinatorEvaluation,
    layout: "/admin",
  },
];



