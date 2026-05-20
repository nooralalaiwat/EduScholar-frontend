import { useEffect, useState } from 'react'
import axios from 'axios'
import ScholarshipCard from '../components/ScholarshipCard'

const Scholarships = () => {
  const [scholarships, setScholarships] = useState([])

  useEffect(() => {
    const fetchScholarships = async () => {
      const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/scholarships`)
      setScholarships(response.data)
    }

    fetchScholarships()
  }, [])

  return (
    <main className="page">
      <section className="page-heading">
        <h1>Explore Scholarships</h1>
        <p>Find and apply to scholarships that match your goal</p>
      </section>

      <section className="cards-grid">
        {scholarships.map((scholarship) => (
          <ScholarshipCard
            key={scholarship._id}
            scholarship={scholarship}
          />
        ))}
      </section>
    </main>
  )
}

export default Scholarships