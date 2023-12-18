import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Main, { mainLoader } from "./layouts/Main";
import { logoutAction } from "./actions/logout";
import { deleteBudget } from "./actions/deleteBudget";
import AdminPanel from "./pages/AdminPanel";
import Dashboard, { dashboardAction, dashboardLoader } from "./pages/Dashboard";
import Error from "./pages/Error";
import BudgetPage, { budgetAction, budgetLoader } from "./pages/BudgetPage";
import ExpensesPage, {
  expensesAction,
  expensesLoader,
} from "./pages/ExpensesPage";

import MonthlyBudgetPage from "./pages/MonthlyBudgetPage";
import { IntroWithRouter } from "./components/Intro";
import EducationalPanel from "./pages/EducationalPanel";
import ChartPage from "./pages/ChartPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    loader: mainLoader,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <IntroWithRouter />,
        errorElement: <Error />,
      },
      {
        index: true,
        element: <Dashboard />,
        path: "dashboard/:budgetId",
        loader: dashboardLoader,
        action: dashboardAction,
        errorElement: <Error />,
      },
      {
        path: "budget/:id",
        element: <BudgetPage />,
        loader: budgetLoader,
        action: budgetAction,
        errorElement: <Error />,
        children: [
          {
            path: "delete",
            action: deleteBudget,
          },
        ],
      },
      {
        path: "expenses/:expenseCategoryId",
        element: <ExpensesPage />,
        loader: expensesLoader,
        action: expensesAction,
        errorElement: <Error />,
      },
      {
        path: "monthlyBudget",
        element: <MonthlyBudgetPage />,
        errorElement: <Error />,
      },
      {
        path: "logout",
        action: logoutAction,
      },
      {
        path: "/adminPanel",
        element: <AdminPanel />,
        errorElement: <Error />,
      },
      {
        path: "/educationalPanel",
        element: <EducationalPanel />,
        errorElement: <Error />,
      },
      {
        path: "/chartPage/:monthBudgetId",
        element: <ChartPage />,
        errorElement: <Error />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
      <ToastContainer />
    </div>
  );
}

export default App;
