import React from "react";
import "./Subheader.css";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
function Subheader() {
  return (
    <div className='subheader'>
      <div className='subheader__location'>
        <LocationOnOutlinedIcon className='subheader_locationIcon' />
        <p>
          Deliver to<strong>Nepal</strong>
        </p>
      </div>
      <div className='subheader__list'>
        <ul>
          <li>Today's Deals</li>
          <li>Customer Service</li>
          <li>Gift Cards</li>
          <li>Registry</li>
          <li>Sell</li>
          <li>Buy Again</li>
          <li>Help</li>
        </ul>
      </div>
      <div className='subheader__covid'>
        <h4>Amazon's response to COVID-19</h4>
      </div>
    </div>
  );
}

export default Subheader;
