import './Home.css';
import compu from '../../../images/compu.gif'
import komHist from '../../../images/komhist.webp';
import bundle from '../../../images/bundle.jpeg';
import neozana from '../../../images/neozana.jpeg';

const Home = () => {
  return (
    <main>

      <section className='first-section'>
        <h1 className="welcome-msg">¡BIENVENIDOS AL MUNDO KOMVIDA!</h1>
        <img className='neozana-img' src={neozana} alt="kombucha gif" />
      </section>

      <section className='compu-section'>
        <h2 className='compu-title'>¿CONOCES NUESTRA HISTORIA?</h2>
        <img className='compu-gif' src={compu} alt="kombucha background" />
        <p className='compu-history'>La mayoría de marcas que molan empezaron con dos hombres en un garaje de California programando delante de un ordenador. <em>Komvida Organic Kombucha comenzó con dos mujeres en un desván de Fregenal de la Sierra</em>, Extremadura.</p>
      </section>

      <section className='proyect-section'>
        <h2 className='proyect-title'>No fue en un garaje ¡fue en un desván!</h2>
        <img className='proyect-img' src={komHist} alt="history" />
      </section>

      <section className='kombu-section'>
        <h2 className='kombu-title'>Y... ¿SABES QUÉ ES LA KOMBUCHA?</h2>
      </section>

      <section className='bundle-section'>
        <p className='bundle-paragraph'>La kombucha es una bebida milenaria que ya tomaban los samuráis y que se consigue gracias a la fermentación natural de té y azúcar que lleva a cabo una colonia de bacterias y levaduras llamada Scoby. En el proceso de fermentación, el Scoby se come casi todo el azúcar y produce unas burbujas que convierten a la kombucha en un refresco delicioso.</p>
        <img className='bundle-img' src={bundle} alt="kombucha kit" />
        <p className='bundle-paragraph'>*Su sabor es ligeramente dulce y ácido, y recuerda al del vinagre o la sidra de manzana, dependiendo del té que se emplee y del tiempo de fermentación.</p>
      </section>

      <section className='enjoy-section'>
        <h1><em>¡DESCUBRE Y DISFRUTA DEL MUNDO KOMBUCHA!</em></h1>
      </section>

    </main>
  )
}

export default Home;