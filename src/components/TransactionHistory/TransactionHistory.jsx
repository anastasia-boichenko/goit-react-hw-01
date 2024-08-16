import s from "./TransactionHistory.module.css";
import clsx from "clsx";

const TransactionHistory = ({ items }) => {
  return (
    <table className={s.form}>
      <thead>
        <tr>
          <th className={clsx(s.table, s.title)}>Type</th>
          <th className={clsx(s.table, s.title)}>Amount</th>
          <th className={clsx(s.table, s.title)}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map((item, index) => {
          return (
            <tr
              key={item.id}
              className={clsx(s.trTable, index % 2 !== 0 ? s.gray : s.white)}
            >
              <td className={clsx(s.table, s.typeTable)}>{item.type}</td>
              <td className={s.table}>{item.amount}</td>
              <td className={s.table}>{item.currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
