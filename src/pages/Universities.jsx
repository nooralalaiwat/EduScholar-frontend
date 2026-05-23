import { useEffect, useState } from 'react'
import axios from 'axios'
import UniversityCard from '../components/UniversityCard'

const Universities = () => {
  const [universities, setUniversities] = useState([])

  useEffect(() => {
    const fetchUniversities = async () => {
      const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/universities`)
      setUniversities(response.data)
    }

    fetchUniversities()
  }, [])

  return (
    <main className="page">
      <section className="page-heading">
        <h1>Universities</h1>
        <p>Explore universities offering scholarships</p>
      </section>

      <section className="cards-grid">
        {universities.map((university) => (
          <UniversityCard
            key={university._id}
            university={university}
          />
        ))}
      </section>
    </main>
  )
}

export default Universities

 
