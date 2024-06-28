import PropTypes from "prop-types";
import "./FrameComponent1.css";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <div className={`murtani-parent ${className}`}>
      <a className="murtani">Murtani</a>
      <a className="dashboard1">Dashboard</a>
      <div className="navigation">
        <img className="vector-icon" alt="" src="/vector.svg" />
        <img
          className="navigation-item-icon"
          loading="lazy"
          alt=""
          src="/frame.svg"
        />
        <img
          className="navigation-item-icon1"
          loading="lazy"
          alt=""
          src="/vector-1.svg"
        />
        <img
          className="navigation-item-icon2"
          loading="lazy"
          alt=""
          src="/vector-2.svg"
        />
        <img
          className="navigation-item-icon3"
          loading="lazy"
          alt=""
          src="/frame-1.svg"
        />
      </div>
      <div className="rectangle-group">
        <div className="frame-item" />
        <div className="vector-wrapper">
          <img
            className="frame-inner"
            loading="lazy"
            alt=""
            src="/rectangle-2.svg"
          />
        </div>
        <div className="savings-label">
          <h3 className="savings">Savings</h3>
        </div>
        <div className="settings-items">
          <img
            className="willkommen-bei-der-seite-von-a"
            loading="lazy"
            alt=""
            src="/frame-2.svg"
          />
          <div className="profile-settings">
            <h3 className="saved">Saved</h3>
          </div>
        </div>
        <div className="settings-items1">
          <img
            className="frame-icon1"
            loading="lazy"
            alt=""
            src="/frame-3.svg"
          />
          <div className="profile-wrapper">
            <a className="profile">Profile</a>
          </div>
        </div>
        <div className="settings-items2">
          <img
            className="frame-icon2"
            loading="lazy"
            alt=""
            src="/frame-4.svg"
          />
          <div className="settings-wrapper">
            <a className="settings">Settings</a>
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
