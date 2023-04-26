import css from 'components/TransactionBody/TransactionBody.module.css';
export const TransactionBody = ({ type, amount, currency }) => {
  return (
    <tbody className={css.tableBody}>
      <tr className={css.tableTr}>
        <td className={css.tableTd}>{type}</td>
        <td className={css.tableTd}>{amount}</td>
        <td className={css.tableTd}>{currency}</td>
      </tr>
    </tbody>
  );
};
