import React from 'react'

const FAQ = () => {
    // FAQ Cards
    const cards = [{
        id: 0,
        qn: 'Authentication Issues',
        ans: 'Porttitor nec est nisi, id nunc.',
        dutation: '0'
    },
    {
        id: 1,
        qn: 'Mi est diam hendrerit ut ipsum, sodales aliquam mauris neque.',
        ans: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates, quibusdam.",
        dutation: 'Last week'
    },
    {
        id: 2,
        qn: 'Cras vitae, scelerisque tortor augue, semper viverra.',
        ans: 'Porttitor nec est nisi, id nunc.',
        dutation: 'Today'
    },
    {
        id: 3,
        qn: 'Venenatis malesuada turpis sit integer felis rhoncus dictum eget ut.',
        ans: 'Porttitor nec est nisi, id nunc.',
        dutation: '2 days ago'
    },
    {
        id: 4,
        qn: 'Pretium ultricies donec non mollis senectus lectus libero tellus.',
        ans: 'Porttitor nec est nisi, id nunc.',
        dutation: '3 days ago'
    },
    {
        id: 5,
        qn: 'Elit massa amet aenean ultrices vitae placerat augue.',
        ans: 'Porttitor nec est nisi, id nunc.',
        dutation: '4 days ago'
    }];
    return (
        <div className='container-fluid  pb-5'>
    <div className='text-center p-2'>
        <h1 className='fw-bold'>Frequently Asked Question</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus expedita quidem aperiam deleniti laborum sapiente ducimus nulla saepe ipsum consequatur asperiores, vero quisquam, unde dolorem nostrum at esse quas odio?</p>
    </div>

    <div className="accordion" id="faqAccordion">
        {cards.map((card, index) => (
            <div className="accordion-item" key={card.id}>
                <h2 className="accordion-header" id={`heading${index}`}>
                    <button className="accordion-button fw-bold collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${index}`} aria-expanded="false" aria-controls={`collapse${index}`}>
                        <div className='d-flex justify-content-between'>
                            <div>{card.qn}</div>
                            <div className="text-muted" style={{marginLeft: '20px'}}>
                                {card.id === 0 ? <span className="badge text-primary bg-light">New</span> : <>Updated {card.dutation}</>}
                            </div>
                        </div>
                    </button>
                </h2>
                <div id={`collapse${index}`} className="accordion-collapse collapse" aria-labelledby={`heading${index}`} data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                        {card.ans}
                    </div>
                </div>
            </div>
        ))}
    </div>
</div>

    )
}

export default FAQ