import { useNavigate } from "react-router-dom"
import "./Homepage.css"

function Homepage() {
  const navigate = useNavigate()

  return (
    <div className="homepage">

      {/* Hero Section */}
      <section className="hero-section">

        <div className="hero-text">

          <h1>
            Find Scholarships Around
            <br />
            The World!
          </h1>

          <p className="hero-subtext">
            Discover global opportunities
            and apply to scholarships
            easily.
          </p>

          <button
            className="get-started-btn"
            onClick={() =>
              navigate("/profile")
            }
          >
            Get Started →
          </button>

        </div>

        <img
          className="hero-image"
          src="https://www.pngkey.com/png/full/287-2871296_tried-and-tested-world-map.png"
          alt="world map"
        />

      </section>

      {/* Stats Section */}
      <section className="stats-section">

        <div className="stat-box">
          <h3>500+</h3>
          <p>Scholarships</p>
        </div>

        <div className="stat-box">
          <h3>50+</h3>
          <p>Universities</p>
        </div>

        <div className="stat-box">
          <h3>20+</h3>
          <p>Countries</p>
        </div>

      </section>

    </div>
  )
}

export default Homepage