import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'

const ScholarshipDetails = () => {
  const { id } = useParams()
  const [scholarship, setScholarship] = useState(null)

  useEffect(() => {
    const fetchScholarship = async () => {
      const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/scholarships/${id}`)
      setScholarship(response.data)
    }

    fetchScholarship()
  }, [id])

  if (!scholarship) {
    return <p className="loading">Loading...</p>
  }

  return (
    <main className="page">
      <section className="page-heading">
        <h1>Scholarship Details</h1>
      </section>

      <section className="details-box">
        <h2>{scholarship.title}</h2>

        <p><strong>University:</strong> {scholarship.University?.name || 'N/A'}</p>
        <p><strong>Country:</strong> {scholarship.country || 'N/A'}</p>
        <p><strong>Field:</strong> {scholarship.field || 'N/A'}</p>
        <p><strong>Minimum GPA:</strong> {scholarship.minGPA || 'N/A'}</p>
        <p><strong>Required Degree:</strong> {scholarship.requiredDegree || 'N/A'}</p>
        <p>
          <strong>Deadline:</strong>{' '}
          {scholarship.deadline
            ? new Date(scholarship.deadline).toLocaleDateString()
            : 'N/A'}
        </p>

        <h3>Eligibility / Description</h3>
        <p>{scholarship.description}</p>

        <Link to={`/apply/${scholarship._id}`}>
          <button className="wide-btn">Apply Now</button>
        </Link>
      </section>
    </main>
  )
}

export default ScholarshipDetails