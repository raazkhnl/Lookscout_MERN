import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
const Profile = () => {
  const user = useSelector(state => state?.user?.user)
  if (!user) {

    return <div className="container-fluid text-center py-3" style={{ height: '85vh', alignContent: 'center', backgroundColor: '#151B28' }}>
      <h3 className='text-white'>Please, Log in to view your profile</h3>
      <Link to='/login' className="btn btn-primary">Log in</Link>
    </div>
  }

  const demoUser = {
    name: 'John Doe',
    bio: 'Web Developer',
    avatarUrl: 'https://avatar.iran.liara.run/public/boy', // Replace with actual avatar URL
    skills: [
      { name: 'HTML', level: 80 },
      { name: 'CSS', level: 70 },
      { name: 'JavaScript', level: 90 },
      // Add more skills here
    ],
    projects: [
      { name: 'Project A', description: 'Lorem ipsum dolor sit amet.' },
      { name: 'Project B', description: 'Consectetur adipiscing elit.' },
      { name: 'Project C', description: 'Suscipit inventore officia maxime odit' },
      { name: 'Project D', description: 'Eaque architecto nisi corrupti harum accusamus' },
      { name: 'Project E', description: 'Suscipit inventore officia maxime odit' },
      { name: 'Project F', description: 'Eaque architecto nisi corrupti harum accusamus' },

      // Add more projects here
    ],
  };
  return <div className="container my-5">
    <div className="row mx-auto">
      <div className="col-12 col-md-4 mb-4">
        <div className="card text-center">
          <img
            src={user?.profilePic || demoUser.avatarUrl}
            className="img-fluid rounded-circle mx-auto mt-3 border border-success border-2"
            style={{ height: "10rem", width: "10rem" }}
            alt="User Avatar"
          />
          <hr />
          <div className="px-3 pb-3">
            <div className="d-flex justify-content-between align-items-center">
              <h2 className="card-title">{user?.name}</h2>
              <Link
                className="btn fa-solid fa-pen-to-square fs-3 "
                to="/edit-user"
                title="Edit User"
              ></Link>
            </div>
            <div className="text-start">
              <p>{user?.bio || "Please, update your bio..."}</p>
              <p>
                <strong>Email:</strong> {user?.email}
              </p>
              <p>
                <strong>Role:</strong> {user?.role}
              </p>
              <p>
                <strong>Joined Since:</strong> {new Date(user?.createdAt).toLocaleDateString()}
              </p>
              <p>
                <strong>Updated At:</strong> {new Date(user?.updatedAt).toLocaleDateString()}
              </p>
              <p>
                <strong>User Status:</strong>{" "}
                <span className="text-success bg-light px-2 rounded">Active</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="col-12 col-md-8">
        <div className="border rounded p-3">
          <h2 className="pt-1">Skills</h2>
          <ul className="list-group mb-3">
            {demoUser.skills?.map((skill) => (
              <li key={skill.name} className="list-group-item">
                {skill.name} ({skill.level}%)
              </li>
            ))}
          </ul>
          <h2 className="pt-2">Projects</h2>
          <ul className="list-group">
            {demoUser.projects?.map((project) => (
              <li key={project?.name} className="list-group-item">
                <strong>{project?.name}</strong>: {project?.description}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </div>
}

export default Profile