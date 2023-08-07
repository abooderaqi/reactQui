/* eslint-disable react/prop-types */
function NextButton({ dispatch, answer, index, questionsNumber }) {
	if (answer === null) return null

	if (index < questionsNumber - 1) {
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

	if (index === questionsNumber - 1)
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
