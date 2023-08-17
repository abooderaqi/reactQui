/* eslint-disable no-case-declarations */

import Header from './components/header.component'
import Main from './components/main.component'
import Error from './components/Error.component'
import Loader from './components/loader.component'
import StartScreen from './components/start-screen'
import Question from './components/Question'
import NextButton from './components/NextButton'
import Progress from './components/Progress'
import FinishScreen from './components/FinishScreen'
import Footer from './components/Footer'
import Timer from './components/Timer'
import { useQuiz } from './context/QuizContext'

function App() {
	const { status } = useQuiz()
	return (
		<div className='app'>
			<Header />
			<Main>
				{status === 'error' && <Error />}
				{status === 'loading' && <Loader />}
				{status === 'ready' && <StartScreen />}
				{status === 'active' && (
					<>
						<Progress />
						<Question />
						<Footer>
							<Timer />
							<NextButton />
						</Footer>
					</>
				)}
				{status === 'finished' && <FinishScreen />}
			</Main>
		</div>
	)
}

export default App
