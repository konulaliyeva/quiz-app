import React from 'react';
import "../App.css"

class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answered: false,
      answeredCorrectly: false,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(selectedAnswer) {
    this.setState({
      answered: true,
      answeredCorrectly: selectedAnswer.isCorrect,
    });
    this.props.onResult(selectedAnswer);
  }

  render() {
    const { id, text, answers, multiple } = this.props;
    const { answered, answeredCorrectly } = this.state;

    let answerMarkup = null;
    if (answered) {
      answerMarkup = answeredCorrectly ? (
        <span className="success">Great! You answered correctly!</span>
      ) : (
        <span className="error">Sorry, you got this wrong!</span>
      );
    }

    return (
      <div className="question">
        <h4>{text}</h4>
        {answerMarkup}
        <ol type="A">
          {answers.map((answer, index) => (
            <li key={index}>
              <label>
                <input
                  onChange={() => this.handleInputChange(answer)}
                  name={id}
                  type={multiple ? 'checkbox' : 'radio'}
                  disabled={answered}
                />
                {answer.text}
              </label>
            </li>
          ))}
        </ol>
      </div>

    );
  }
}

export default Question;
