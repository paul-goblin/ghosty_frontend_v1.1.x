import Layout from '../components/Layout'

export default function HomePage() {
  return (
    <Layout>
      <div className='flex flex-col justify-center z-0 text-2xl md:text-4xl lg:text-6xl text-center'>
        <button className='focus:outline-none my-2 z-0 py-3 px-6 border text-grass-light hover:text-grass-darkest border-grass-light hover:border-grass-darkest hover:bg-grass-light rounded transition ease-in duration-100'>
          Ghosty Story
        </button>
        <button className='focus:outline-none my-2 z-0 py-3 px-6 border text-grass-light hover:text-grass-darkest border-grass-light hover:border-grass-darkest hover:bg-grass-light rounded transition ease-in duration-100'>
          Level Editor
        </button>
        <button className='focus:outline-none my-2 z-0 py-3 px-6 border text-grass-light hover:text-grass-darkest border-grass-light hover:border-grass-darkest hover:bg-grass-light rounded transition ease-in duration-100'>
          Online Levels
        </button>
        <footer>
          <a href='#' className='text-grass-light hover:text-grass text-base transition ease-in duration-100'>About</a>
        </footer>
      </div>
    </Layout>
  )
}
