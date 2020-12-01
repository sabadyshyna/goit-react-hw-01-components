import PropTypes from 'prop-types'
import s from '../TransactionHistory/TransactionHistory.module.css'

const Transaction = ({type, amount, currency}) => {
  return (
    <tr className={s.rowBody}>
        <td className={s.dataBody}>{type}</td>
        <td className={s.dataBody}>{amount}</td>
        <td className={s.dataBody}>{currency}</td>
    </tr>
  )
}

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

Transaction.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};

TransactionsHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};

export default TransactionsHistory