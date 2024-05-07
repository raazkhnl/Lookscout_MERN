import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import userIcon from "../assets/userIcon.svg"


const Profile = () => {
    const user = useSelector(state => state?.user?.user)

    const users = {
        name: 'John Doe',
        bio: 'Web Developer',
        avatarUrl: 'https://via.placeholder.com/150', // Replace with actual avatar URL
        skills: [
          { name: 'HTML', level: 80 },
          { name: 'CSS', level: 70 },
          { name: 'JavaScript', level: 90 },
          // Add more skills here
        ],
        projects: [
          { name: 'Project A', description: 'Lorem ipsum dolor sit amet.' },
          { name: 'Project B', description: 'Consectetur adipiscing elit.' },
          { name: 'Project C', description: 'Suscipit inventore officia maxime odit'},
          { name: 'Project D', description: 'Eaque architecto nisi corrupti harum accusamus' },
          
          // Add more projects here
        ],
      };
  return (
<div className="container my-2 my-md-5 ">
      <div className="row card-group mx-auto ">
        <div className="col-md-4 mb-3 mb-md-0 ">
          <div className="card h-100">
            <img src={user?.profilePic || userIcon } className="img-fluid rounded-circle mx-auto my-1 border border-success border-2" style={{height:"10rem", width:'10rem'}} alt="User Avatar" />
            
            <div className="px-2 pb-2 border-top ">
                <div className='d-flex justify-content-between'>
                <h2 className="card-title">{user?.name|| "User"}</h2>
                <Link className=" btn fa-solid fa-pen-to-square fs-3" to='/edit-user'></Link>
                </div>
              {user?.bio || "Please, update your bio..."} <br />
              <strong>Email</strong>: {user?.email || "unknown"} <br />
              <strong>Role</strong>: {user?.role || "unknown"} <br />
              <strong>Joine Since</strong>: {user?.createdAt || "unknown"} <br />
              <strong>Updated At</strong>: {user?.updatedAt || "unknown"} <br />
              <strong>User Status</strong>: <strong className='text-success bg-light'>Active</strong> <br />
            </div>
          </div>
        </div>
        <div className="col-md-8 border rounded">
          <h2 className='pt-1'>Skills</h2>
          <ul className="list-group">
            {users.skills?.map((skill) => (
              <li key={skill.name} className="list-group-item">
                {skill.name} ({skill.level}%)
              </li>
            ))}
          </ul>
          <h2 className='pt-2'>Projects</h2>
          <ul className="list-group mb-2">
            {users.projects?.map((project) => (
              <li key={project?.name} className="list-group-item">
                <strong>{project?.name}</strong>: {project?.description}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>  )
}

export default Profile