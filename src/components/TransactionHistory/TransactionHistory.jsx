import css from './TransactionHistory.module.css';
import PropTypes from 'prop-types';
import { TransactionHead } from 'components/TransactionHead/TransactionHead';
import { TransactionBody } from 'components/TransactionBody/TransactionBody';
export const TransactionHistory = ({ items }) => {
  return (
    <table className={css.transactionHistory}>
      <TransactionHead />
      {items.map(item => {
        return <TransactionBody key={item.id} {...item} />;
      })}
    </table>
  );
};
TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
