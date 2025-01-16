import React from 'react'

const FAQ = () => {
    // FAQ Cards
    const cards = [
        {
            id: 0,
            qn: 'How do I resolve login and authentication issues?',
            ans: 'Ensure your credentials are correct. If you forgot your password, use the "Forgot Password" option to reset it. For further assistance, contact our support team.',
            duration: 'Today'
        },
        {
            id: 1,
            qn: 'What services do you offer for streamlining workflows?',
            ans: 'We provide tools for efficient work organization, including real-time user collaboration, scalable customer management, and secure payment solutions. Check out our features page for more details.',
            duration: 'Last week'
        },
        {
            id: 2,
            qn: 'How does your platform ensure enterprise-grade security?',
            ans: 'Our platform features 99.9% guaranteed uptime SLA, data encryption, and dedicated customer success teams to ensure the safety and reliability of your operations.',
            duration: 'Yesterday'
        },
        {
            id: 3,
            qn: 'Can your platform handle cross-media collaboration?',
            ans: 'Yes, our platform is designed to efficiently unleash cross-media information while maintaining seamless value delivery across different teams.',
            duration: '2 days ago'
        },
        {
            id: 4,
            qn: 'What should I do if I face issues with real-time messaging?',
            ans: 'Check your internet connection first. If the issue persists, try refreshing the page or clearing your cache. For ongoing issues, our support team is here to help.',
            duration: '3 days ago'
        },
        {
            id: 5,
            qn: 'How do I contact customer support?',
            ans: 'You can reach our support team via the contact form on our website or by emailing support@yourwebsite.com. We’re here to help 24/7.',
            duration: '4 days ago'
        }
    ];

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
                                    <div className="text-muted" style={{ marginLeft: '20px' }}>
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