import {} from 'react'
import './transition.css'
import { LuGithub } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Transition = () => {

    return(
        <section className='container-transition'>
            <div className='cards'>
                <div className='apresentacao'>
                    <h1>Hi, 👋  my name is Julio Cesar Zampieri.</h1>
                    <h1>I live in Sao Paulo, Brazil. 📍</h1>
                    <h1>Full Stack Developer.</h1>
                    <h1>18 years old.</h1>
                </div>
                <div className='imagem1'>
                    <h1>Actually, i'm trying to get my first job.</h1>
                </div>
                <div className='c-gray'>
                    <h1>" Technology moves the world "</h1>
                    <p>Steve jobs is my inspiration.</p>
                    <h2>- Steve Jobs</h2>
                </div>
                <div className='c-orange'>
                    <h1>" Technology is my passion "</h1>
                    <p> Codding too. </p>
                    <h2>- Julio Zampieri 😬</h2>
                </div>
                <div className='imagem2'>
                </div>
                <div className='imagem3'></div>
                <div className='imagem4'>
                    <h1>I'm a software engineer academic at FIAP. Actually, I'm in my 3nd semester.</h1>
                </div>
                <div className='imagem5'>
                    <h1>Weighted average: 8.32.</h1>
                </div>
                <div className='imagem6'>
                    <h1>See my social medias :</h1>
                </div>
                <div className='imagem7'>
                    <div className='icons'>
                        <a href="https://github.com/jzampieri">
                            <LuGithub/>
                        </a>
                    </div>
                    <div className='icons'>
                        <a href="https://www.instagram.com/j.zampierii/">
                            <FaInstagram/>
                        </a>
                    </div>
                    <div className='icons'>
                        <a href="https://www.linkedin.com/in/julio-cesar-zampieri-3257b6267/">
                            <FaLinkedin />
                        </a>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Transition