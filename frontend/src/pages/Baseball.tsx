import Header from '../components/Header'
import BaseballPagination from "../components/BaseballPagination.tsx";
import '../styles/App.css'

function Home() {
    return (
        <>
            <Header />

            <main>
                <div>
                    <BaseballPagination />
                </div>
            </main>
        </>
    )
}

export default Home
