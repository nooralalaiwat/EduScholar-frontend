import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const UniversityDetails = () => {
  const { id } = useParams()
  const [university, setUniversity] = useState(null)

  useEffect(() => {
    const fetchUniversity = async () => {
      const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/universities/${id}`)
      setUniversity(response.data)
    }

    fetchUniversity()
  }, [id])

  if (!university) {
    return <p className="loading">Loading...</p>
  }

  return (
    <main className="page">
      <section className="page-heading">
        <h1>University Details</h1>
      </section>

      <section className="details-box">
        <h2>{university.name}</h2>
        <p><strong>Country:</strong> {university.country}</p>
        <p><strong>City:</strong> {university.city}</p>
        <p><strong>Ranking:</strong> {university.ranking || 'N/A'}</p>

        <h3>About University</h3>
        <p>{university.details || 'No details available'}</p>
      </section>
    </main>
  )
}

export default UniversityDetails