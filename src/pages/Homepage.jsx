import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import "./Homepage.css"

function Homepage() {
  const navigate = useNavigate()
  const [scholarships, setScholarships] = useState([])

  useEffect(() => {
    const fetchScholarships = async () => {
      try {
        const response = await fetch("http://localhost:3000/scholarships")
        const data = await response.json()

        setScholarships(data.slice(0, 3))
      } catch (error) {
        console.log("Error fetching scholarships:", error)
      }
    }

    fetchScholarships()
  }, [])

  return (
    <div className="homepage">
      <nav className="navbar">
        <h2 className="logo">EduScholar</h2>

        <div className="nav-links">
          <button onClick={() => navigate("/")}>Home</button>
          <button onClick={() => navigate("/scholarships")}>Scholarships</button>
          <button onClick={() => navigate("/universities")}>Universities</button>
        </div>

        <div className="auth-buttons">
          <button onClick={() => navigate("/sign-in")} className="login-btn">
            Login
          </button>

          <button onClick={() => navigate("/sign-up")} className="signup-btn">
            Sign Up
          </button>
        </div>
      </nav>

      <section className="hero-section">
        <div className="hero-text">
          <h1>
            Find Scholarships Around
            <br />
            The World!
          </h1>

          <p className="hero-subtext">
            Discover global opportunities and apply to scholarships easily.
          </p>

          <button
            className="get-started-btn"
            onClick={() => navigate("/sign-up")}
          >
            Get Started <span>▶</span>
          </button>
        </div>

        <img
          className="hero-image"
          src="https://www.pngkey.com/png/full/287-2871296_tried-and-tested-world-map.png"
          alt="world map"
        />
      </section>

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

      <section className="featured-section">
        <h2>Featured Scholarships</h2>

        <div className="scholarship-cards">
          {scholarships.map((scholarship) => (
            <div key={scholarship._id} className="scholarship-card">
              <h3>🎓 {scholarship.title}</h3>

              <p>{scholarship.description}</p>

              <p>
                <strong>🌍 Country:</strong> {scholarship.country}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Homepage