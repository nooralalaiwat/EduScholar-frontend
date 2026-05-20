import { Link } from 'react-router-dom'
import hero from '../assets/hero.png'

const ScholarshipCard = ({ scholarship }) => {
  return (
    <div className="scholarship-card">
      <img
        src={scholarship.image || scholarship.University?.image || hero}
        alt={scholarship.title}
        className="card-img"
      />

      <div className="card-row">
        <div>
          <h3>{scholarship.title}</h3>
          <p>{scholarship.University?.name || 'University name'}</p>
          <p>{scholarship.country}</p>
        </div>

        <div className="deadline-box">
          <small>Deadline</small>
          <p>
            {scholarship.deadline
              ? new Date(scholarship.deadline).toLocaleDateString()
              : 'N/A'}
          </p>
        </div>
      </div>

      <div className="card-actions">
        <Link to={`/scholarships/${scholarship._id}`}>
          <button>Details</button>
        </Link>

        <Link to={`/apply/${scholarship._id}`}>
          <button>Apply Now</button>
        </Link>
      </div>
    </div>
  )
}

export default ScholarshipCard