import React, { useState, useEffect } from 'react';
import './MyApplications.css';

function MyApplications() {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    const mockApplications = [
      {
        id: 1,
        universityName: "University of Toronto",
        country: "Canada",
        major: "Computer Science",
        degree: "Bachelor",
        appliedDate: "2026-05-20",
        status: "Pending"
      },
      {
        id: 2,
        universityName: "Harvard University",
        country: "USA",
        major: "Data Science",
        degree: "Master",
        appliedDate: "2026-05-15",
        status: "Accepted"
      },
      {
        id: 3,
        universityName: "Oxford University",
        country: "UK",
        major: "Software Engineering",
        degree: "Bachelor",
        appliedDate: "2026-05-10",
        status: "Rejected"
      }
    ];
    
    setApplications(mockApplications);
  }, []);

  return (
    <div className="applications-container">
      <div className="applications-header">
        <h1 className="applications-title">My Applications</h1>
        <p className="applications-subtitle">Track the status of your submitted scholarship applications</p>
      </div>

      <div className="applications-grid">
        {applications.map((app) => (
          <div key={app.id} className="application-card">
            <div className="card-header">
              <h2>{app.universityName}</h2>
              <span className="card-country">{app.country}</span>
            </div>
            
            <div className="card-body">
              <div className="info-row">
                <span className="info-label">Major:</span>
                <span className="info-value">{app.major}</span>
              </div>
              <div className="info-row">
                <span className="info-label">Degree:</span>
                <span className="info-value">{app.degree}</span>
              </div>
              <div className="info-row">
                <span className="info-label">Applied On:</span>
                <span className="info-value">{app.appliedDate}</span>
              </div>
            </div>

            <div className="card-footer">
              <span className={`status-badge ${app.status.toLowerCase()}`}>
                {app.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyApplications;