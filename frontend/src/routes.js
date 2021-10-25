import JobPage from "./components/JobPage/JobPage";
import AppliedJobs from "./components/AppliedJobs/AppliedJobs";
import SubmissionPortal from "./components/SubmissionPortal/SubmissionPortal";
import AllotedStudents from "./components/AllotedStudents";
import JobSearch from "./containers/JobSearch/JobSearch";
import AdminJobs from "./containers/AdminJobs/AdminJobs";
import CreateJobForm from "./components/JobForm/CreateJobForm";

var routes = [
  
  {
    path: "/submission",
    name: "Internship Evaluation",
    icon: "fas fa-clipboard-check",
    component: SubmissionPortal,
    layout: "/admin",
  },

  {
    path: "/job-page",
    name: "Job",
    icon: "fas fa-briefcase",
    component: JobPage,
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
    path: "/alloted-students",
    name: "Alloted Students",
    icon: "fas fa-users",
    component: AllotedStudents,
    layout: "/admin",
  },

  {
    path: "/job-search",
    name: "Job Search",
    icon: "fas fa-briefcase",
    component: JobSearch,
    layout: "/admin",
  },

  {
    path: "/admin-jobs",
    name: "Admin Jobs",
    icon: "fas fa-briefcase",
    component: AdminJobs,
    layout: "/admin",
  },

  {
    path: "/create-jobs",
    name: "Create Jobs",
    icon: "fas fa-briefcase",
    component: CreateJobForm,
    layout: "/admin",
  },
  
];
export default routes;
