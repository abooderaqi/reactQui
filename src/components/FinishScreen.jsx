/* eslint-disable no-unused-vars */

import { useEffect } from 'react'
import { useQuiz } from '../context/QuizContext'

/* eslint-disable react/prop-types */
function FinishScreen() {
	const { dispatch, points, highscore, totalPoints } = useQuiz()

	const precentage = Math.ceil((points / totalPoints) * 100)
	let emoji
	if (precentage === 100) emoji = '🥇'
	if (precentage >= 80 && precentage < 100) emoji = '🎉'
	if (precentage >= 50 && precentage < 80) emoji = '🙃'
	if (precentage >= 0 && precentage < 50) emoji = '🤨'
	if (precentage === 0) emoji = '💩'

	return (
		<>
			<p className='result'>
				<span>{emoji}</span> You scored <strong>{points}</strong> out of{' '}
				{totalPoints} ({precentage}%)
			</p>
			<p className='highscore'>(Highscore: {highscore} points) </p>

			<button
				className='btn btn-ui'
				onClick={() => dispatch({ type: 'restartQuiz' })}
			>
				Restart Quiz
			</button>
		</>
	)
}

export default FinishScreen
