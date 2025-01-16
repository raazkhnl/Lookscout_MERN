import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Profile = () => {
  const user = useSelector(state => state?.user?.user)

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

      // Add more projects here
    ],
  };
  return (
    <div className="container m-5 ">
      <div className="row mx-auto">
        <div className="col-md-4">
          <div className="card">
            <img src={user?.profilePic || demoUser.avatarUrl} className="img-fluid rounded-circle mx-auto mt-2 border border-success border-2" style={{ height: "10rem", width: '10rem' }} alt="User Avatar" />
            <hr />
            <div className="px-2 pb-2">
              <div className='d-flex justify-content-between'>
                <h2 className="card-title">{user?.name}</h2>
                <Link className=" btn fa-solid fa-pen-to-square fs-3" to='/edit-user'></Link>
              </div>
              {user?.bio || "Please, update your bio..."} <br />
              <strong>Email</strong>: {user?.email} <br />
              <strong>Role</strong>: {user?.role} <br />
              <strong>Joine Since</strong>: {user?.createdAt} <br />
              <strong>Updated At</strong>: {user?.updatedAt} <br />
              <strong>User Status</strong>: <strong className='text-success bg-light'>Active</strong> <br />
            </div>
          </div>
        </div>
        <div className="col-md-8 border rounded">
          <h2 className='pt-1'>Skills</h2>
          <ul className="list-group">
            {demoUser.skills?.map((skill) => (
              <li key={skill.name} className="list-group-item">
                {skill.name} ({skill.level}%)
              </li>
            ))}
          </ul>
          <h2 className='pt-2'>Projects</h2>
          <ul className="list-group">
            {demoUser.projects?.map((project) => (
              <li key={project?.name} className="list-group-item">
                <strong>{project?.name}</strong>: {project?.description}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>)
}

export default Profile