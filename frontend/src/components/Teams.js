import React from 'react'
import team1 from '../assets/teams/Image1.png'
import team2 from '../assets/teams/Image2.png'
import team3 from '../assets/teams/Image3.png'




const Teams = () => {
    const cards = [{
        id: 0,
        photo: team1,
        name: 'Morgan Drew',
        post: 'Manager'
      },
      {
        id: 1,
        photo: team2,
        name: 'Jeffrey Walker',
        post: 'Lead Designer'
    },
      {
        id: 2,
        photo: team3,
        name: 'Andrew Steve',
        post: 'UI/UX Developer'
    }];
    return (
        <div className='m-4 p-4'>
            <h2 className='fw-bold text-center '>The Core of Our Team</h2>
            <p className='text-center '>Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment of people and great talent that truly rocks.</p>
            <div className="row mx-4 px-4 py-2">
            {cards.map((card) => (
                <div className="col-12 col-md-4">
                    <div className='text-center'>
                        <img src={card.photo} className="img-fluid px-4" alt="demo" />
                    </div>
                    <div className='ms-3 ps-3 pb-5'>
                        <h4>{card.name}</h4>
                        <p>{card.post}</p>
                        <div style={{fontSize:'12px'}}>
                            <i className="fa-brands fa-twitter mx-1"></i>
                            <i className="fa-brands fa-facebook mx-1"></i>
                            <i className="fa-brands fa-linkedin mx-1"></i>
                            <i className="fa-brands fa-telegram mx-1"></i>
                        </div>
                    </div>
                </div>
                 ))}

                
            </div>
        </div>
    )
}

export default Teams