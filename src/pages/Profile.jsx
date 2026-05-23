import React from 'react';
import './Profile.css';

function Profile() {
  return (
    <div className="form-page">
      <h1 className="form-title">Academic Profile</h1>
      
      <form className="form-grid">
        <div className="form-column">
          <div className="input-group">
            <label>Name</label>
            <input type="text" placeholder="Your Name" />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input type="password" placeholder="Password" />
          </div>
        </div>

        <div className="form-column">
          <div className="input-group">
            <label>GPA</label>
            <input type="number" placeholder="Your Highschool Gpa" />
          </div>
          <div className="input-group">
            <label>Degree</label>
            <input type="text" placeholder="Your Degree Choice" />
          </div>
          <div className="input-group">
            <label>Major</label>
            <input type="text" placeholder="Your Major Choice" />
          </div>
        </div>

        <div className="form-column right-column">
          <div className="input-group">
            <label className="country-label">Country</label>
            <div className="select-wrapper">
              <select defaultValue="">
                <option value="" disabled hidden>Select Country</option>
                <option value="BH">Bahrain</option>
                <option value="SA">Saudi Arabia</option>
                <option value="AE">UAE</option>
                <option value="KW">Kuwait</option>
                <option value="OM">Oman</option>
                <option value="QA">Qatar</option>
              </select>
            </div>
          </div>
          
          <button type="submit" className="submit-btn">
            Save and next -&gt;
          </button>
        </div>
      </form>
    </div>
  );
}

export default Profile;