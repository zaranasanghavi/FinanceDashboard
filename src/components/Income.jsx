import { useMemo } from "react";
import PropTypes from "prop-types";
import "./Income.css";

const Income = ({
  className = "",
  frame,
  incomeThisMonth,
  prop,
  propDisplay,
  propMinWidth,
}) => {
  const bStyle = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth,
    };
  }, [propDisplay, propMinWidth]);

  return (
    <div className={`income ${className}`}>
      <div className="income-child" />
      <div className="ellipse-parent">
        <div className="ellipse-div" />
        <img className="frame-icon3" loading="lazy" alt="" src={frame} />
      </div>
      <div className="income-this-month-parent">
        <div className="income-this-month">{incomeThisMonth}</div>
        <b className="b" style={bStyle}>
          {prop}
        </b>
      </div>
    </div>
  );
};

Income.propTypes = {
  className: PropTypes.string,
  frame: PropTypes.string,
  incomeThisMonth: PropTypes.string,
  prop: PropTypes.string,

  /** Style props */
  propDisplay: PropTypes.any,
  propMinWidth: PropTypes.any,
};

export default Income;
