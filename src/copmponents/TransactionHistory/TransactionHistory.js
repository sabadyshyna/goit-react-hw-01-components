import PropTypes from 'prop-types';

const Transaction = ({type, amount, currency}) => {
  return (
    <tr>
        <td>{type}</td>
        <td>{amount}</td>
        <td>{currency}</td>
    </tr>
  )
}

function TransactionsHistory({ items }) {
  return (
<table className="transaction-history">
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>    
      <tbody>
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
  );
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