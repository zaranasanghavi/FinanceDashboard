import PropTypes from "prop-types";
import "./FrameComponent.css";

const FrameComponent = ({ className = "" }) => {
  return (
    <div className={`vector-parent ${className}`}>
      <img className="rectangle-icon" alt="" src="/rectangle-1.svg" />
      <div className="profile-content">
        <div className="profile-header">
          <div className="profile-details">
            <div className="profile-picture-icons-wrapper">
              <div className="profile-picture-icons">
                <div className="profile-icon" />
                <div className="profile-status" />
              </div>
            </div>
          </div>
          <div className="user-name">
            <div className="display-name">
              <h2 className="charley-mandess">Charley Mandess</h2>
            </div>
            <div className="charley13mandessemaicom">
              charley13mandess@emai.com
            </div>
          </div>
          <div className="edit-profile-button">
            <button className="group-button">
              <div className="frame-child1" />
              <b className="edit-profile">Edit Profile</b>
            </button>
          </div>
        </div>
      </div>
      <div className="savings-summary">
        <div className="balance2">
          <div className="balance-item" />
          <div className="savings-icons">
            <div className="savings-circle" />
            <b className="savings-placeholder">1</b>
          </div>
          <div className="savings-titles">
            <div className="savings-1">Savings 1</div>
            <b className="empty-savings-data">$550,00</b>
          </div>
          <div className="savings-bars">
            <div className="savings-bars-child" />
            <div className="savings-progress" />
          </div>
        </div>
        <div className="balance3">
          <div className="balance-inner" />
          <div className="ellipse-group">
            <div className="frame-child2" />
            <b className="b1">2</b>
          </div>
          <div className="savings-2-parent">
            <div className="savings-2">Savings 2</div>
            <b className="b2">$100,00</b>
          </div>
          <div className="frame-div">
            <div className="frame-child3" />
            <div className="frame-child4" />
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
