import React from 'react'
import icon1 from '../assets/features/icon1.svg'
import icon2 from '../assets/features/icon2.svg'
import icon3 from '../assets/features/icon3.svg'
import photo from '../assets/Photo.png'


const Features= () => {
    const cards = [{
        id: 0,
        icon: icon2,
        title: `Easier Work Organization`,
        content: 'Efficiently unleash cross-media information without cross-media value. Quickly timely deliverables for real-time schemas.'
      },
      {
        id: 1,
        icon: icon3,
        title: `Fast Connection`,
        content: 'Completely pursue scalable customer cross-media through potentialities. Holistically quickly installed portals.'
      },
      {
        id: 2,
        icon: icon1,
        title: `Streamlined Process`,
        content: 'Objectively innovate empowered scalable manufactured products whereas parallel platforms predominate extensible.'
      }];

  return (
    <div className='container-fluid p-2'>
        <div className='text-center mt-4'>
            <h1 className='fw-bold'>Messaging for all</h1>
            <p style={{fontSize: '12px'}}>User generated content in real-time will have multiple touchpoints for offshoring</p>
        </div>

        <div className="container-fluid p-0">
      {/* Desktop View: Single row, horizontally scrollable */}
      <div className="d-none d-md-flex flex-md-row flex-nowrap overflow-hidden">
        {cards.map((card) => (
          <div key={card.id} className="card mx-2 border-0">
            <div className="card-body">
            <img src={card.icon} alt='icon' className="rounded-circle bg-primary" style={{height:'30px', marginBottom: '5px' }}/>
              <h5 className="card-title">{card.title}</h5>
              <p className="card-text">{card.content}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Tablet View: 1 card per row */}
<div className="row d-none d-sm-flex d-md-none mx-2 px-2">
  {cards.map((card) => (
    <div key={card.id} className="col-sm-12">
      <div className="card border-0">
        <div className="card-body">
        <img src={card.icon} alt='icon' className="rounded-circle bg-primary" style={{height:'30px', marginBottom: '5px' }}/>
          <h5 className="card-title">{card.title}</h5>
          <p className="card-text">{card.content}</p>
        </div>
      </div>
    </div>
  ))}
</div>

{/* Mobile View: 1 card per line */}
<div className="row d-flex d-sm-none">
  {cards.map((card) => (
    <div key={card.id} className="col-12 mb-1">
      <div className="card border-0">
        <div className="card-body">
        <img src={card.icon} alt='icon' className="rounded-circle bg-primary" style={{height:'30px', marginBottom: '5px'}}/>
          <h5 className="card-title">{card.title}</h5>
          <p className="card-text">{card.content}</p>
        </div>
      </div>
    </div>
  ))}
</div>

</div>


<div className="row mx-4 p-2 mt-4">
        <div className="col-12 col-md-6 pt-4 my-4">
        <h1 className='fw-bold mt-5'>Demonstrate branding consequently think outside</h1>
        <p>Velit purus egestas tellus phasellus. Mattis eget sed faucibus magna vulputate pellentesque a diam tincidunt. Aenean malesuada tellus tellus faucibus mauris quisque mauris in.</p>
        <div style={{fontSize:'12px', lineHeight:'0px', paddingTop:'8px',alignItems:'center'}}> 
          <p><i className="fas fa-check text-primary pe-2"></i>Enterprise-grade security</p>
          <p><i className="fas fa-check text-primary pe-2"></i>99.9% guaranteed uptime SLA</p>
          <p><i className="fas fa-check text-primary pe-2"></i>Designated customer success team</p>
        </div>
        <button className="btn btn-primary py-2 px-4 my-2" type="submit"  >Start Now <i className="fa-solid fa-arrow-right text-white"></i></button>

        </div>
        <div className="col-12 col-md-6 img-fluid">
        <img src={photo} className="img-fluid" alt="demo" />
        </div>
      </div>
    </div>
  )
}

export default Features
