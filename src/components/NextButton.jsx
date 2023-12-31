import { useQuiz } from '../context/QuizContext'

/* eslint-disable react/prop-types */
function NextButton() {
	const { dispatch, answer, index, numOfQuestions } = useQuiz()

	if (answer === null) return null

	if (index < numOfQuestions - 1) {
		console.log(index)
		return (
			<button
				className='btn btn-ui'
				onClick={() => dispatch({ type: 'nextQuestion' })}
			>
				Next
			</button>
		)
	}

	if (index === numOfQuestions - 1)
		return (
			<button
				className='btn btn-ui'
				onClick={() => dispatch({ type: 'finish' })}
			>
				Finish
			</button>
		)
}

export default NextButton
