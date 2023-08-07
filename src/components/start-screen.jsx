/* eslint-disable react/prop-types */
function StartScreen({ questions, dispatch }) {
	return (
		<div className='start'>
			<h2>Welcome to The React Quiz!</h2>
			<h3>{questions} questions to test your React mastry</h3>
			<button
				className='btn btn-ui'
				onClick={() => dispatch({ type: 'start' })}
			>
				Let's start!
			</button>
		</div>
	)
}

export default StartScreen
