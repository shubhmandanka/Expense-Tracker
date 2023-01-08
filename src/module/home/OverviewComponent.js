import React, { useEffect, useState } from "react";

const AddTransactionView = (props) => {
  const [amount, setAmount] = useState();
  const [desc, setDesc] = useState();
  const [type, setType] = useState("Expense");

  const addTransaction = () => {
    props.addTransaction({
      amount: Number(amount),
      desc,
      type,
      id: Date.now(),
    });
    console.log({ amount, desc, type });
    props.toggleAddtsx();
  };

  return (
    <div className="transaction-container p-2 d-flex flex-column">
      <input
        placeholder="Amount"
        value={amount}
        type="number"
        onChange={(event) => setAmount(event.target.value)}
      ></input>

      <input
        placeholder="Description"
        value={desc}
        onChange={(event) => setDesc(event.target.value)}
      ></input>

      <div>
        <input
          type="radio"
          id="expense"
          name="type"
          value="Expense"
          checked={type === "Expense"}
          onChange={(event) => setType(event.target.value)}
        ></input>
        <label htmlFor="expense" className="me-4">
          {" "}
          Expense{" "}
        </label>

        <input
          type="radio"
          id="income"
          name="type"
          value="Income"
          checked={type === "Income"}
          onChange={(event) => setType(event.target.value)}
        ></input>
        <label htmlFor="income"> Income </label>
      </div>

      <button type="button" className="btn btn-dark" onClick={addTransaction}>
        ADD Transaction
      </button>
    </div>
  );
};

const OverviewComponent = (props) => {
  const [isAddTsxVisible, toggleAddtsx] = useState(false);

  return (
    <div className="">
      <div className="d-flex justify-content-around align-items-center my-3">
        <span className="fw-600 me-3">
          Balance : ${props.income - props.expense}
        </span>
        <button
          type="button"
          className="btn btn-dark"
          onClick={() => toggleAddtsx(!isAddTsxVisible)}
        >
          {isAddTsxVisible ? "Cancel" : "ADD"}
        </button>
      </div>

      {isAddTsxVisible && (
        <AddTransactionView
          toggleAddtsx={toggleAddtsx}
          addTransaction={props.addTransaction}
        />
      )}

      <div className="expense-container d-flex justify-content-between my-3">
        <div className="expense-box exp d-flex flex-column">
          Expense <span>$ {props.expense} </span>
        </div>
        <div className="expense-box inc d-flex flex-column">
          Income <span>${props.income}</span>
        </div>
      </div>
    </div>
  );
};

export default OverviewComponent;
