import Header from '../components/Header'
import reactLogo from '../assets/react.svg'
import viteLogo from '../../public/vite.svg'
import '../styles/App.css'

function Home() {
    return (
        <>
            <Header />

            <main>
                <div>
                    <h1>Vite + React</h1>
                    <a href="https://vite.dev" target="_blank">
                        <img src={viteLogo} className="logo" alt="Vite logo"/>
                    </a>
                    <a href="https://react.dev" target="_blank">
                        <img src={reactLogo} className="logo react" alt="React logo"/>
                    </a>
                </div>
            </main>
        </>
    )
}

export default Home
