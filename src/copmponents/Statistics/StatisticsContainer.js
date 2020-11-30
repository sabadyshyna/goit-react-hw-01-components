import PropTypes from 'prop-types';

function StatisticsContainer({ title, children }) {
  return <section className="statistics">
    <h2 className="title">{title}</h2>
    {children}
  </section>
}

StatisticsContainer.propTypes = {
  title: PropTypes.string.isRequired
}

export default StatisticsContainer
