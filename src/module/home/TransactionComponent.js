import { useEffect, useState } from "react";

const TransactionCell = (props) => {
  return (
    <div className="cell px-3 d-flex align-items-center justify-content-between">
      <span>{props.payload.desc}</span>
      <span>{props.payload.amount}</span>
    </div>
  );
};

const TransactionComponent = (props) => {
  const [searchText, updateSearchText] = useState("");
  const [filterTransaction, updateTxn] = useState(props.transactions);
  const filterData = (searchText) => {
    if (!searchText || !searchText.trim().length) {
      updateTxn(props.transactions);
      return;
    }

    let txn = [...props.transactions];
    txn = txn.filter((payload) =>
      payload.desc.toLowerCase().includes(searchText.toLowerCase().trim())
      );
    updateTxn(txn);
  };

  useEffect(() => filterData(searchText), [props.transactions]);

  return (
    <div className="transaction-container p-2 d-flex flex-column">
      Transaction
      <input
        placeholder="Search"
        value={searchText}
        className="search"
        onChange={(event) => {
          updateSearchText(event.target.value);
          filterData(event.target.value);
        }}
      ></input>
      {filterTransaction?.length
        ? filterTransaction.map((payload) => (
            <TransactionCell payload={payload} />
          ))
        : ""}
    </div>
  );
};

export default TransactionComponent;
