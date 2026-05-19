import React from 'react'

function MyApplications() {

  const applications = [

    {
      scholarship: "Chevening Scholarship",
      university: "University of Oxford",
      status: "Pending"
    },

    {
      scholarship: "MEXT Scholarship",
      university: "University of Tokyo",
      status: "Accepted"
    },

    {
      scholarship: "KAUST Fellowship",
      university: "KAUST",
      status: "Rejected"
    }

  ]

  return (

    <div className="application">

      <h1>MY APPLICATIONS</h1>

      {

        applications.map((application, index) => (

          <div key={index} className="application-card">

            <h3>{application.scholarship}</h3>

            <p>{application.university}</p>

            <p>Status: {application.status}</p>

          </div>

        ))

      }

    </div>

  )

}

export default MyApplications