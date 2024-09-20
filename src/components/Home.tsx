import '../App.css'
import About from './About'
import Nav from './Nav'
import Projects from './Projects'

function Home() {

  return (
    <div>
      <h1 id='name-header'>Adriano D'Alonzo</h1>
      <Nav />
      <About />
      <Projects />
      <p id='back-to-top'><a className='internal-link' href='#top'>Back to Top</a></p>
    </div>
  )
}

export default Home
