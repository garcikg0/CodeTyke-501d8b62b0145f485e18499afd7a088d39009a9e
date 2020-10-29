import React from 'react';
import './Styles.scss';

const ProgressBar = (props) => {
    const { totalQuestions, currentQuestion } = props;

    console.log(totalQuestions)
    console.log(currentQuestion)

    let progressPercent = (((currentQuestion) / totalQuestions) * 100)

    console.log(progressPercent)

    return (
        <div className="progressBar--container">
            <div className="progressBar--filler">
                <span className="progressBar--label">{progressPercent}%</span>
            </div>
        </div>
    )
}


export default ProgressBar;