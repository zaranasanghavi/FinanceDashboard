import FrameComponent1 from "../components/FrameComponent1";
import MoneyCards from "../components/MoneyCards";
import FrameComponent from "../components/FrameComponent";
import Balance from "../components/Balance";
import "./Finance.css";

const Finance = () => {
  return (
    <div className="finance-1">
      <div className="frame-parent">
        <FrameComponent1 />
        <div className="logout-parent">
          <h3 className="logout">Logout</h3>
          <div className="logout-icon-parent">
            <img className="logout-icon" alt="" src="/vector-3.svg" />
            <img
              className="frame-icon"
              loading="lazy"
              alt=""
              src="/frame-5.svg"
            />
          </div>
        </div>
      </div>
      <div className="main-content">
        <div className="dashboard-content">
          <div className="dashboard-header">
            <div className="dashboard-wrapper">
              <a className="dashboard">Dashboard</a>
            </div>
            <div className="rectangle-parent">
              <div className="frame-child" />
              <img className="search-input-icon" alt="" src="/frame-6.svg" />
              <div className="find-expenses-history-wrapper">
                <a className="find-expenses-history">Find expenses history</a>
              </div>
            </div>
          </div>
          <MoneyCards />
        </div>
      </div>
      <div className="user-panel">
        <FrameComponent />
        <div className="balance-details">
          <Balance />
        </div>
      </div>
    </div>
  );
};

export default Finance;
