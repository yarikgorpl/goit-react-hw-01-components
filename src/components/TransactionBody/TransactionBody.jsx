import css from 'components/TransactionBody/TransactionBody.module.css';
import PropTypes from 'prop-types';
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
TransactionBody.propTypes = {
  transaction: PropTypes.arrayOf(
    PropTypes.exact({
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
