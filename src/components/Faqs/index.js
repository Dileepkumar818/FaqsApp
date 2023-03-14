// Write your code here.
import FaqItem from '../FaqItem/index'
import './index.css'

const Faqs = props => {
  const {faqsList} = props

  return (
    <div className="bg-container">
      <div className="heading">
        <h1>FAQs</h1>
        <ul>
          {faqsList.map(each => (
            <FaqItem key={each.id} item={each} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Faqs
