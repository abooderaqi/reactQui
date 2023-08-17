/* eslint-disable react/prop-types */
function Progress({ index, points, questionsNumber, totalPoints, answer }) {
	return (
		<header className='progress'>
			<progress value={index + Number(answer !== null)} max={questionsNumber} />
			<p>
				Question <strong>{index + 1}</strong>/{questionsNumber}
			</p>
			<p>
				<strong>{points}</strong>/{totalPoints} points
			</p>
		</header>
	)
}

export default Progress
