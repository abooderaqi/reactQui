/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */

import Options from './Options'

/* eslint-disable react/prop-types */
function Question({ questions, dispatch, answer }) {
	const { question } = questions

	return (
		<div>
			<h4>{question}</h4>
			<Options options={questions} dispatch={dispatch} answer={answer} />
		</div>
	)
}

export default Question
