/* eslint-disable react/prop-types */
/* eslint-disable no-case-declarations */
/* eslint-disable no-undef */
import { createContext, useContext, useReducer, useEffect } from 'react'

const SEC_PER_QUESTION = 30

const initialState = {
	questions: [],

	// 'loading','error','ready','active','finish'
	status: 'loading',
	index: 0,
	answer: null,
	points: 0,
	highscore: 0,
	secondsRemaining: null,
}
const reducer = (state, action) => {
	const { type, payload } = action

	switch (type) {
		case 'dataReceived':
			return {
				...state,
				questions: payload,
				status: 'ready',
			}

		case 'dataFaild':
			return { ...state, status: 'error' }

		case 'start':
			return {
				...state,
				status: 'active',
				secondsRemaining: state.questions.length * SEC_PER_QUESTION,
			}

		case 'restartQuiz':
			return { ...initialState, questions: state.questions, status: 'ready' }
		// return { ...state, status: 'ready', index: 0, points: 0, answer: null }

		case 'newAnswer':
			const question = state.questions.at(state.index)

			return {
				...state,
				answer: payload,
				points:
					payload === question.correctOption
						? state.points + question.points
						: state.points,
			}

		case 'nextQuestion':
			return { ...state, index: state.index + 1, answer: null }

		case 'finish':
			return {
				...state,
				status: 'finished',
				highscore:
					state.points > state.highscore ? state.points : state.highscore,
			}

		case 'tic':
			return {
				...state,
				secondsRemaining: state.secondsRemaining - 1,
				status: state.secondsRemaining === 0 ? 'finished' : state.status,
			}

		default:
			throw new Error('Action unknown')
	}
}

const quizContext = createContext()

function QuizProvider({ children }) {
	const [state, dispatch] = useReducer(reducer, initialState)

	const {
		status,
		questions,
		index,
		answer,
		points,
		highscore,
		secondsRemaining,
	} = state

	const totalPoints = questions
		.map((points) => points.points)
		.reduce((acc, curr) => {
			return (acc += curr)
		}, 0)

	const numOfQuestions = questions.length

	useEffect(() => {
		const fetchQuestion = async () => {
			const res = await fetch('http://localhost:8000/questions')

			const data = await res.json().catch(() => dispatch({ type: 'dataFaild' }))
			dispatch({ type: 'dataReceived', payload: data })
		}
		fetchQuestion()
	}, [])

	return (
		<quizContext.Provider
			value={{
				status,
				questions,
				index,
				answer,
				points,
				highscore,
				secondsRemaining,
				numOfQuestions,
				totalPoints,
				dispatch,
			}}
		>
			{children}
		</quizContext.Provider>
	)
}

function useQuiz() {
	const context = useContext(quizContext)

	if (context === undefined)
		throw new Error('You using QuizContext outside the provider')

	return context
}

export { QuizProvider, useQuiz }
