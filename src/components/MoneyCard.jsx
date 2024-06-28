import { useMemo } from "react";
import PropTypes from "prop-types";
import "./MoneyCard.css";

const MoneyCard = ({
  className = "",
  cardLabels,
  moneyReceived,
  emptyDataPlaceholder,
  propHeight,
  propWidth,
  propHeight1,
  propMinWidth,
}) => {
  const cardContentStyle = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  const cardIconsStyle = useMemo(() => {
    return {
      width: propWidth,
      height: propHeight1,
    };
  }, [propWidth, propHeight1]);

  const emptyDataPlaceholderStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div className={`money-card ${className}`}>
      <div className="money-card-child" />
      <div className="card-row">
        <div className="card-content" style={cardContentStyle}>
          <div className="card-icons" style={cardIconsStyle} />
          <img
            className="card-labels-icon"
            loading="lazy"
            alt=""
            src={cardLabels}
          />
        </div>
        <div className="money-labels">
          <h3 className="money-received">{moneyReceived}</h3>
        </div>
      </div>
      <div className="empty-card-data">
        <b className="empty-data-placeholder" style={emptyDataPlaceholderStyle}>
          {emptyDataPlaceholder}
        </b>
      </div>
    </div>
  );
};

MoneyCard.propTypes = {
  className: PropTypes.string,
  cardLabels: PropTypes.string,
  moneyReceived: PropTypes.string,
  emptyDataPlaceholder: PropTypes.string,

  /** Style props */
  propHeight: PropTypes.any,
  propWidth: PropTypes.any,
  propHeight1: PropTypes.any,
  propMinWidth: PropTypes.any,
};

export default MoneyCard;
