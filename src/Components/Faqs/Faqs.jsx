import { useState } from 'react'
import FaqComponent from './FaqComponent'
import './Faqs.scss'

function Faqs() {
    const [faqs, setFaqs] = useState([
        {
            question: 'What activities does the chef perform?',
            answer: 'The chef arranges for supplies, travels to your home, prepares the food and cleans the kitchen or work area.',
            open: false
        },
        {
            question: 'How much does a private chef typically cost?',
            answer: 'A private chef in Cozumel costs $65 per day per person and $230 per week per person on average (Adult).',
            open: false
        },
        {
            question: 'Are your prices flexible?',
            answer: 'Our prices are subject to the cost of food in Cozumel and the direct cost of the chef´s services. "Hermit cooking for us" has the most affordable prices in the market.',
            open: false
        },
        {
            question: 'What is the experience of the chef who will cook for me?',
            answer: 'The chefs that "Hermit" selects for you have a lot of experience in the field. Edgar is one of our main chefs with more than 20 years of experience',
            open: false
        },
        {
            question: 'Do you do background checks on the chefs?',
            answer: 'All chefs who represent "Hermit cooking for us" are trained, are put to practice and various tests of confidence.',
            open: false
        },
        {
            question: 'Can we order our purchases prior to our arrival?',
            answer: 'If you wish, you can request this additional service. Provide us with your shopping list and we will take care of it.',
            open: false
        },
        {
            question: 'Who disposes of the rest of the inputs, products and foodstuffs?',
            answer: 'All other supplies, products and food are the property of the diners. If you have a refrigerator or a conditioned space, we can store your food.',
            open: false
        }
    ]);

    const faqsToggle = index => {
        setFaqs(faqs.map((faq, i) => {
            if (i === index) {
                faq.open = !faq.open
            } else {
                faq.open = false;
            }

            return faq
        }))
    }

    return (
        <div className='Faqs'>
            <div className="wrapper">
                <div className="title">
                    <h2>
                        Frequently asked questions
                    </h2>
                    <span>
                        You've got questions?
                    </span>
                    <span>
                        We've got answers!.
                    </span>
                </div>
                <div className="content">
                    <div className="questions-wrapper">
                        {faqs.map((faq, i) => (
                            <FaqComponent faq={faq} i={i} faqsToggle={faqsToggle} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Faqs