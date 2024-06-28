import PropTypes from "prop-types";
import "./Balance.css";

const Balance = ({ className = "" }) => {
  return (
    <div className={`balance4 ${className}`}>
      <div className="balance-child1" />
      <div className="savings-card">
        <div className="savings-info">
          <div className="savings-icon" />
          <b className="savings-amount">3</b>
        </div>
        <div className="savings-3-parent">
          <div className="savings-3">Savings 3</div>
          <b className="empty-savings-label">$100,00</b>
        </div>
      </div>
      <div className="savings-graph">
        <div className="savings-graph-child" />
        <div className="savings-graph-item" />
      </div>
    </div>
  );
};

Balance.propTypes = {
  className: PropTypes.string,
};

export default Balance;
