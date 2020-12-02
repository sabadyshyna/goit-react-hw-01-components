import PropTypes from 'prop-types'
import s from '../Transaction/Transaction.module.css'

const Transaction = ({ type, amount, currency }) => {
  return (
    <tr className={s.rowBody}>
        <td className={s.dataBody}>{type}</td>
        <td className={s.dataBody}>{amount}</td>
        <td className={s.dataBody}>{currency}</td>
    </tr>
  )
}

Transaction.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};

export default Transaction