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