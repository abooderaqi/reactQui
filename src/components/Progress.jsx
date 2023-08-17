import { useQuiz } from '../context/QuizContext'

/* eslint-disable react/prop-types */
function Progress() {
	const { index, points, totalPoints, numOfQuestions, answer } = useQuiz()

	return (
		<header className='progress'>
			<progress value={index + Number(answer !== null)} max={numOfQuestions} />
			<p>
				Question <strong>{index + 1}</strong>/{numOfQuestions}
			</p>
			<p>
				<strong>{points}</strong>/{totalPoints} points
			</p>
		</header>
	)
}

export default Progress
