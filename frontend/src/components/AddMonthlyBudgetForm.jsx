import { useEffect, useRef, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { Form, useFetcher } from "react-router-dom";
import { CurrencyDollarIcon } from "@heroicons/react/24/solid";
import DatePicker from "react-datepicker";
import axios from "axios";
import jwtDecode from "jwt-decode";
import moment from "moment";

const AddMonthlyBudgetForm = ({ refresh }) => {
  const fetcher = useFetcher();
  const isSubmitting = fetcher.state === "submitting";

  const formRef = useRef();
  const focusRef = useRef();
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState("");

  useEffect(() => {
    if (!isSubmitting) {
      formRef.current.reset();
      //focusRef.current.focus()
    }
  }, [isSubmitting]);

  const sendData = () => {
    const token = jwtDecode(localStorage.getItem("token"));
    console.log(formRef.current);
    console.log(date);
    const dateToSave = moment(date).format("YYYY-MM-DD");
    axios({
      method: "post",
      url: "http://localhost:3000/api/monthBudget/create",
      data: {
        amount,
        month: dateToSave,
        year: dateToSave,
        userId: token.userId,
      },
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((response) => {
        refresh();
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="form2">
      <h2 className="h3">Stwórz budżet miesięczny</h2>
      <fetcher.Form
        method="post"
        action="http://localhost:3000/api/monthBudget/create"
        className="grid-sm"
        ref={formRef}
      >
        <div className="grid-xs">
          <label htmlFor="newBudgetAmount">Kwota</label>
          <input
            type="number"
            step="0.01"
            name="newBudgetAmount"
            id="newBudgetAmount"
            placeholder="np. 350"
            required
            inputMode="decimal"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <div className="grid-xs">
          <label htmlFor="selectedDate">Wybierz miesiąc </label>
          <DatePicker
            locale="pl-PL"
            showMonthYearPicker
            name="selectedDate"
            dateFormat="dd/MM/yyyy"
            selected={date}
            onChange={(e) => setDate(e)}
          />
        </div>
        <input type="hidden" name="_action" value="createBudget" />
        <button
          type="button"
          onClick={() => sendData()}
          className="btn1"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <span>Podsumowanie ...</span>
          ) : (
            <>
              <span>Stwórz budżet </span>
              <CurrencyDollarIcon width={20} />
            </>
          )}
        </button>
      </fetcher.Form>
    </div>
  );
};
export default AddMonthlyBudgetForm;
