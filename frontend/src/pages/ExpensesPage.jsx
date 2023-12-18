import { useLoaderData, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Table from "../components/Table";
import { deleteItem, fetchData, waait } from "../helpers";
import { useEffect, useState } from "react";
import axios from "axios";

export async function expensesLoader() {
  const expenses = fetchData("expenses");
  return { expenses };
}

export async function expensesAction({ request }) {
  const data = await request.formData();
  const { _action, ...values } = Object.fromEntries(data);

  if (_action === "deleteExpense") {
    try {
      deleteItem({
        key: "expenses",
        id: values.expenseId,
      });
      return toast.success("Expense deleted!");
    } catch (e) {
      throw new Error("There was a problem deleting your expense.");
    }
  }
}

const ExpensesPage = () => {
  const [expenses, setExpenses] = useState([]);
  const { expenseCategoryId } = useParams();
  const getExpenses = () => {
    axios
      .get(
        "http://localhost:3000/api/expense/getAllExpense/" + expenseCategoryId,
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      )
      .then((response) => {
        setExpenses(response.data);
        console.log(response);
      });
  };
  useEffect(() => {
    getExpenses();
  }, []);

  return (
    <div className="grid-lg">
      <h1>Wszystkie wydatki</h1>
      {expenses && expenses.length > 0 ? (
        <div className="grid-md">
          <h2>
            Ostatnie wydatki <small>({expenses.length} total)</small>
          </h2>
          <Table expenses={expenses} />
        </div>
      ) : (
        <p>Brak wydatków</p>
      )}
    </div>
  );
};

export default ExpensesPage;
