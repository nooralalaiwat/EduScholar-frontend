import { Link } from 'react-router-dom'
import hero from '../assets/hero.png'

const UniversityCard = ({ university }) => {
  return (
    <div className="scholarship-card">
      <img
        src={university.image || hero}
        alt={university.name}
        className="card-img"
      />

      <h3>{university.name}</h3>
      <p>{university.city}, {university.country}</p>
      <p>Ranking: {university.ranking || 'N/A'}</p>

      <div className="card-actions">
        <Link to={`/universities/${university._id}`}>
          <button>Details</button>
        </Link>
      </div>
    </div>
  )
}

export default UniversityCard