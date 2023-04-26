import css from './TransactionHistory.module.css';
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
