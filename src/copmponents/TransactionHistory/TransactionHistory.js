import PropTypes from 'prop-types'
import s from '../TransactionHistory/TransactionHistory.module.css'
import Transaction from '../Transaction/Transaction'

function TransactionsHistory({ items }) {
  return (
<table className={s.transactionHistory}>
  <thead>
    <tr className={s.row}>
      <th className={s.heading}>Type</th>
      <th className={s.heading}>Amount</th>
      <th className={s.heading}>Currency</th>
    </tr>
  </thead>    
      <tbody className={s.body}>
      {items.map(item => ( 
          <Transaction
            key={item.id} 
            type={item.type}
            amount={item.amount}
            currency={item.currency}
        />
      ))}
      </tbody>
</table>
  )
}


TransactionsHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ).isRequired
};

export default TransactionsHistory