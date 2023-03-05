import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ApplicationForm from "../Pages/ApplicationForm/ApplicationForm";
import EventList from "../Pages/EventList/EventList";
import FreelancerList from "../Pages/FreelancerList/FreelancerList";
import Home from "../Pages/Home/Home";
import JobDetail from "../Pages/JobDetail/JobDetail";
import Jobs from "../Pages/Jobs/Jobs";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/jobs",
        element: <Jobs />,
      },
      {
        path: "/JobDetail",
        element: <JobDetail />,
      },
      {
        path: "/ApplicationForm",
        element: <ApplicationForm />,
      },
      {
        path: "/FreelancerList",
        element: <FreelancerList />,
      },
      {
        path: "/event",
        element: <EventList />,
      },
    ],
  },
]);

export default routes;
