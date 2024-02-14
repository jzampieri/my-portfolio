import {} from 'react'
import Header from '../Header/Header'
import Main from '../Main/Main'
import Sobre from '../Sobre/Sobre'
import Transition from '../Transition/Transition'

const Home = () => {
    return(
        <main className='home-page'>
           <Header/> 
           <Main/>
           <Transition/>
           <Sobre/>
        </main>
    )
}

export default Home