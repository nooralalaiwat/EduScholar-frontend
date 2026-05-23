import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'

const ApplyScholarship = ({ user }) => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [scholarship, setScholarship] = useState(null)

  useEffect(() => {
    const fetchScholarship = async () => {
      const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/scholarships/${id}`)
      setScholarship(response.data)
    }

    fetchScholarship()
  }, [id])

  const handleSubmit = async (e) => {
    e.preventDefault()

    const token = localStorage.getItem('token')

    await axios.post(
      `${import.meta.env.VITE_BACKEND_URL}/applications`,
      {
        scholarship: id,
        status: 'pending'
      },
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    )

    navigate('/my-applications')
  }

  if (!scholarship) {
    return <p className="loading">Loading...</p>
  }

  return (
    <main className="page">
      <section className="page-heading">
        <h1>Apply For Scholarship</h1>
        <p>Review your application before submitting</p>
      </section>

      <form className="apply-box" onSubmit={handleSubmit}>
        <label>User</label>
        <input value={user?.username || ''} readOnly />

        <label>Selected Scholarship</label>
        <input value={scholarship.title} readOnly />

        <label>Status</label>
        <input value="pending" readOnly />

        <div className="apply-actions">
          <button type="button" onClick={() => navigate('/scholarships')}>
            Cancel
          </button>

          <button type="submit">
            Submit
          </button>

          <button type="button" onClick={() => navigate(`/scholarships/${id}`)}>
            Edit Selection
          </button>
        </div>
      </form>
    </main>
  )
}

export default ApplyScholarship