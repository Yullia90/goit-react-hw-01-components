import PropTypes from 'prop-types';
import {
  Section,
  Table,
  Tittle,
  Tittlerow,
  Row,
  Item,
} from './TransactionHistory.styled';
export const TransactionHistory = ({ items }) => {
  return (
    <Section>
      <Table>
        <Tittle>
          <Item>
            <Tittlerow>Type</Tittlerow>
            <Tittlerow>Amount</Tittlerow>
            <Tittlerow>Currency</Tittlerow>
          </Item>
        </Tittle>

        <tbody>
          {items.map(({ id, type, amount, currency }) => (
            <Item key={id}>
              <Row>{type}</Row>
              <Row>{amount}</Row>
              <Row>{currency}</Row>
            </Item>
          ))}
        </tbody>
      </Table>
    </Section>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
