import Income from "./Income";
import MoneyCard from "./MoneyCard";
import PropTypes from "prop-types";
import "./MoneyCards.css";

const MoneyCards = ({ className = "" }) => {
  return (
    <div className={`money-cards ${className}`}>
      <div className="balance-cards">
        <div className="balance">
          <div className="balance-child" />
          <div className="balance-row">
            <div className="balance-icons" />
            <img
              className="balance-labels-icon"
              loading="lazy"
              alt=""
              src="/frame-7.svg"
            />
          </div>
          <div className="balance-amounts">
            <div className="balance1">Balance</div>
            <b className="empty-balance-data">$1,390.00</b>
          </div>
        </div>
        <Income
          frame="/frame-8.svg"
          incomeThisMonth="Income This Month"
          prop="$1,200.00"
        />
        <Income
          frame="/frame-9.svg"
          incomeThisMonth="Outcome This Month"
          prop="$110.00"
          propDisplay="inline-block"
          propMinWidth="114px"
        />
      </div>
      <div className="graph">
        <div className="graph-child" />
        <a className="overview">Overview</a>
        <div className="graph-content">
          <div className="graph-data">
            <div className="graph-values">1200</div>
            <div className="graph-values1">1000</div>
            <div className="graph-values2">800</div>
            <div className="graph-values3">600</div>
            <div className="graph-values4">400</div>
            <div className="graph-values5">200</div>
            <div className="graph-values6">00</div>
          </div>
          <div className="graph-labels">
            <button className="rectangle-container">
              <div className="rectangle-div" />
              <div className="day-label-placeholder">$550.00</div>
            </button>
            <div className="graph-axis-icon">
              <img className="axis-icon" alt="" src="/axis-icon.svg" />
              <div className="graph-indicators">
                <img
                  className="indicator-points-icon"
                  alt=""
                  src="/indicator-points.svg"
                />
                <img
                  className="indicator-points-icon1"
                  loading="lazy"
                  alt=""
                  src="/vector-4.svg"
                />
                <div className="wrapper-indicator">
                  <img
                    className="indicator-icon"
                    loading="lazy"
                    alt=""
                    src="/indicator.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="weekdays">
          <div className="weekday-labels">
            <div className="mon">Mon</div>
            <div className="tue">Tue</div>
            <div className="wed">Wed</div>
            <div className="thu">Thu</div>
            <div className="fri">Fri</div>
            <div className="sat">Sat</div>
            <div className="sun">Sun</div>
          </div>
        </div>
      </div>
      <MoneyCard
        cardLabels="/frame-8.svg"
        moneyReceived="Money Received"
        emptyDataPlaceholder="+$150,00"
      />
      <MoneyCard
        cardLabels="/frame-9.svg"
        moneyReceived="Money Withdrawed"
        emptyDataPlaceholder="-$75,00"
        propHeight="44px"
        propWidth="100%"
        propHeight1="100%"
        propMinWidth="61px"
      />
      <MoneyCard
        cardLabels="/frame-8.svg"
        moneyReceived="Money Received"
        emptyDataPlaceholder="+$150,00"
        propHeight="30px"
        propWidth="44px"
        propHeight1="44px"
        propMinWidth="73px"
      />
    </div>
  );
};

MoneyCards.propTypes = {
  className: PropTypes.string,
};

export default MoneyCards;
