import PropTypes from 'prop-types';
import s from '../Statistics/Statistics.module.css'

const Statistics = ({label, percentage}) => {
  return (
    <li className={s.item}>
      <span className={s.label}>{label}</span>
      <span className={s.percentage}>{percentage}</span>
    </li>
  )
}

function StatisticsSection({ items }) {
  return (
  
    <ul className={s.list}>
      {items.map(item => ( 
        <Statistics
            key={item.id}
            label={item.label}
            percentage={item.percentage}
        />
      ))}
    </ul>
    
  );
}

Statistics.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

StatisticsSection.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};

export default StatisticsSection




