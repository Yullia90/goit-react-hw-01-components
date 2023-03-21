import PropTypes from 'prop-types';
import {
  Section,
  Title,
  Card,
  Item,
  Percentage,
  Label,
} from './Statistics.styled';

function randColor() {
  const r = () => Math.floor(Math.random() * 256);
  const colorBack = 'rgb(' + r() + ',' + r() + ',' + r() + ',' + 0.3 + ')';
  return colorBack;
}

export function Statistics({ title, stats }) {
  return (
    <Section>
      <Title>
        {title && <h2>{title}</h2>}

        <Card>
          {stats.map(({ id, label, percentage }) => {
            return (
              <Item key={id} style={{ backgroundColor: randColor() }}>
                <Label>{label}</Label>
                <Percentage>{percentage}%</Percentage>
              </Item>
            );
          })}
        </Card>
      </Title>
    </Section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  // label: PropTypes.string.isRequired,
  // percentage: PropTypes.number.isRequired,
};
