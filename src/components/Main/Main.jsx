import { useEffect, useRef } from 'react';

const Main = () => {
  const tituloRef = useRef(null);

  useEffect(() => {
    typeWriter(tituloRef.current);
  }, []);

  const typeWriter = (elemento) => {
    const textoArray = elemento.textContent.split('');
    elemento.textContent = '';
    textoArray.forEach((letra, i) => {
      setTimeout(() => elemento.textContent += letra, 70 * i);
    });
  };

  return (
    <section className='main-container'>
      <h1>ZAMPIERI</h1>
      <h3>SOFTWARE ENGINEER <span ref={tituloRef} className='text-decoration'> | UI UX DESIGNER | Front-End | Back-End | Database</span></h3>
    </section>
  );
};

export default Main;
