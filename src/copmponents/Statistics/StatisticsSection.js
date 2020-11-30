import PropTypes from 'prop-types';

const Statistics = ({label, percentage}) => {
  return (
    <li className="item">
      <span className="label">{label}</span>
      <span className="percentage">{percentage}</span>
    </li>
  )
}

function StatisticsSection({ items }) {
  return (
  
    <ul>
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




