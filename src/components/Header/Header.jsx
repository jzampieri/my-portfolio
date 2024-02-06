import { useEffect, useRef } from 'react'
import Logo from '../../assets/{} com cortes.png'
import './header.css'

const Header = () =>{
    const headerRef = useRef(null);

    useEffect(() => {
      const handleScroll = () => {
        const scrollY = window.scrollY;
        if (scrollY > 0) {
          headerRef.current.classList.add('header-animation');
        } else {
          headerRef.current.classList.remove('header-animation');
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return(
        <section ref={headerRef} className='header'>
            <img src={Logo} alt="" className='logo-header'/>

            <ul>
                <li><a href="">HOME</a></li>
                <li><a href="">SOBRE</a></li>
                <li><a href="">SKILLS</a></li>
                <li><a href="">CONTATO</a></li>
            </ul>

        </section>
    )
}

export default Header