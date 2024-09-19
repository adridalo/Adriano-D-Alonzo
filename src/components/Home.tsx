import '../App.css'
import About from './About'
import Nav from './Nav'

function Home() {

  return (
    <div>
      <h1 id='name-header'>Adriano D'Alonzo</h1>
      <Nav />
      <About />
      <p id='back-to-top'><a className='internal-link' href='#name-header'>Back to Top</a></p>
    </div>
  )
}

export default Home
