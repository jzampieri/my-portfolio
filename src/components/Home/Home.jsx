import {} from 'react'
import Header from '../Header/Header'
import Main from '../Main/Main'
import Sobre from '../Sobre/Sobre'
import Transition from '../Transition/Transition'
import Scroll from '../Scroll/Scroll'

const Home = () => {
    return(
        <main className='home-page'>
           <Header/> 
           <Main/>
           <Scroll/>
           <Transition/>
           <Sobre/>
        </main>
    )
}

export default Home