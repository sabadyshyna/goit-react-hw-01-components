import PropTypes from 'prop-types';
import s from '../Statistics/Statistics.module.css'
import StatisticsListItem from '../StatisticsListItem/StatisticsListItem'


function Statistics({ title, stats }) {
  return (
    <section className={s.statistics}>
    {title && <h2 className={s.title}>{title}</h2>}
      <ul className={s.list}> 
      {stats.map(stat => ( 
        <StatisticsListItem
            key={stat.id}
            label={stat.label}
            percentage={stat.percentage}
        />
      ))}
    </ul>
  </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ).isRequired
};

export default Statistics




