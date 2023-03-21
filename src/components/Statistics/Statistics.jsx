import PropTypes from 'prop-types';

import css from './Statistics.module.css';

function randColor() {
  const r = () => Math.floor(Math.random() * 256);
  const colorBack = 'rgb(' + r() + ',' + r() + ',' + r() + ',' + 0.3 + ')';
  return colorBack;
}

export function Statistics({ title, stats }) {
  return (
    <section className={css.statistics}>
      <section className={css.title}>
        {title && <h2>{title}</h2>}

        <ul className={css.list}>
          {stats.map(({ id, label, percentage }) => {
            return (
              <li
                className={css.item}
                key={id}
                style={{ backgroundColor: randColor() }}
              >
                <span className={css.label}>{label}</span>
                <span className={css.percentage}>{percentage}%</span>
              </li>
            );
          })}
        </ul>
      </section>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  // label: PropTypes.string.isRequired,
  // percentage: PropTypes.number.isRequired,
};
