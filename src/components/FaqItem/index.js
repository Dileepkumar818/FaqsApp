// Write your code here.
import {Component} from 'react'
import './index.css'

class FaqItem extends Component {
  state = {isShown: false}

  onShow = () => {
    this.setState(prev => ({isShown: !prev.isShown}))
  }

  render() {
    const {item} = this.props
    const {questionText, answerText} = item
    const {isShown} = this.state
    const imgUrl = isShown
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
    const imgAlt = isShown ? 'minus' : 'plus'

    return (
      <li className="listItem">
        <div className="question">
          <h1>{questionText}</h1>
          <button className="button" onClick={this.onShow} type="button">
            <img src={imgUrl} alt={imgAlt} />
          </button>
        </div>
        {isShown ? (
          <div>
            <hr />
            <div className="answer">
              <p>{answerText}</p>
            </div>
          </div>
        ) : (
          ''
        )}
      </li>
    )
  }
}

export default FaqItem
