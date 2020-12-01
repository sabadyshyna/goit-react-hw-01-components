import PropTypes from 'prop-types';
import s from '../Statistics/Statistics.module.css'

function StatisticsContainer({ title, children }) {
  return <section className={s.statistics}>
    <h2 className={s.title}>{title}</h2>
    {children}
  </section>
}

StatisticsContainer.propTypes = {
  title: PropTypes.string.isRequired
}

export default StatisticsContainer