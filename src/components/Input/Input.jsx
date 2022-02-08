import PropTypes from 'prop-types';

import styles from './Input.module.scss';

const Input = ({ type, amount, onAmmountHandler }) => {
  return (
    <input
      type={type}
      value={amount}
      onChange={e => onAmmountHandler(e.target.value)}
      className={styles.input}
    />
  );
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onAmmountHandler: PropTypes.func.isRequired,
};

export default Input;
