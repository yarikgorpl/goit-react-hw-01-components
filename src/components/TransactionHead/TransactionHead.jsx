import css from 'components/TransactionHead/TransactionHead.module.css';
export const TransactionHead = () => {
  return (
    <thead className={css.tableHead}>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>
  );
};
