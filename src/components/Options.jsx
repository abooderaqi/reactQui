/* eslint-disable react/prop-types */
function Options({ options, dispatch, answer }) {
	const hasAnswered = answer !== null
	return (
		<div className='options'>
			{options.options.map((option, index) => (
				<button
					className={`btn btn-option ${index === answer ? 'answer' : ''} ${
						hasAnswered
							? index === options.correctOption
								? 'correct'
								: 'wrong'
							: ''
					}`}
					key={option}
					disabled={hasAnswered}
					onClick={() => dispatch({ type: 'newAnswer', payload: index })}
				>
					{option}
				</button>
			))}
		</div>
	)
}

export default Options
