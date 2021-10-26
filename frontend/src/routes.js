import AppliedJobs from "./components/AppliedJobs/AppliedJobs";
import SubmissionPortal from "./components/SubmissionPortal/SubmissionPortal";
import AllotedStudents from "./components/AllotedStudents";
import AdminJobs from "./containers/AdminJobs/AdminJobs";
import CreateJobForm from "./components/JobForm/CreateJobForm";
import DisplayUserProfile from "./components/DisplayUserProfile/DisplayUserProfile";
import StudentJobs from "./containers/StudentJobs";

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
    component: SubmissionPortal,
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
    name: "Admin Jobs",
    icon: "fas fa-briefcase",
    component: AdminJobs,
    layout: "/admin",
  },

  {
    path: "/create-mentor",
    name: "Create Mentor",
    icon: "fas fa-user-plus",
    component: ()=><div className="content"></div>,
    layout: "/admin",
  }

];

// BsPencilSquare

// export const routes = [

//   {
//     path: "/submission",
//     name: "Internship Evaluation",
//     icon: "fas fa-clipboard-check",
//     component: SubmissionPortal,
//     layout: "/admin",
//   },

//   {
//     path: "/job-page",
//     name: "Job",
//     icon: "fas fa-briefcase",
//     component: JobPage,
//     layout: "/admin",
//   },

//   {
//     path: "/applied-jobs",
//     name: "Applied Jobs",
//     icon: "fas fa-briefcase",
//     component: AppliedJobs,
//     layout: "/admin",
//   },

//   {
//     path: "/alloted-students",
//     name: "Alloted Students",
//     icon: "fas fa-users",
//     component: AllotedStudents,
//     layout: "/admin",
//   },

//   {
//     path: "/job-search",
//     name: "Job Search",
//     icon: "fas fa-briefcase",
//     component: JobSearch,
//     layout: "/admin",
//   },

//   {
//     path: "/admin-jobs",
//     name: "Admin Jobs",
//     icon: "fas fa-briefcase",
//     component: AdminJobs,
//     layout: "/admin",
//   },

//   {
//     path: "/create-jobs",
//     name: "Create Jobs",
//     icon: "fas fa-briefcase",
//     component: CreateJobForm,
//     layout: "/admin",
//   },

// ];

