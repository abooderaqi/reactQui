/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */

import { useQuiz } from '../context/QuizContext'
import Options from './Options'

/* eslint-disable react/prop-types */
function Question() {
	const { questions, index } = useQuiz()
	const question = questions.at(index)
	console.log(question)

	return (
		<div>
			<h4>{question.question}</h4>
			<Options question={question} />
		</div>
	)
}

export default Question
