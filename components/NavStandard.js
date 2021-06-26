import { FaCog } from 'react-icons/fa'

export default function NavStandard() {
  return (
    <nav className='flex justify-between align-middle z-0'>
      {/* left side */}
      <div className='flex align-middle'>
        <a href='./' className='md:text-4xl py-3 px-3 hover:bg-gray-900 hover:text-grass-light transition ease-in duration-100 block z-0'>
          <svg viewBox='0 0 20 20' className='h-8 w-8 md:w-10 md:h-10 text-gray-300 fill-current text-inherit' >
            <path d='M 1.2 18 C 2.3 19.5 3.6 19 4.6 18.2 C 6.2 19.4 7.2 19.1 8.2 18.3 C 9.3 19.2 10.7 19.1 11.7 18.4 C 12.4 18.8 13.8 19.5 15.2 18 C 15.8 19.2 18.3 19 19 17.5 C 19.5 16.4 19.3 14.3 19.4 12.2 C 19.6 9 18.6 1.1 11 1.1 C 6.7 1.2 3.5 5.6 3.3 9.3 C 3.2 11.6 2.4 13 1.4 14.7 C 0.2 16.5 1 17.7 1.2 18 M 8.1 8 C 5.2 7.8 5.6 3.5 8.6 3.6 C 11.3 3.8 11.3 8.2 8.1 8 M 13.8 8.1 C 10.9 8.6 10.5 4.1 13.6 3.9 C 16.1 3.7 16.6 7.6 13.8 8.1 Z' />
          </svg>
        </a>
      </div>
      {/* right side */}
      <div className='flex align-middle'>
        {/* login */}
        <a href='#' className='hidden font-bold px-3 text-2xl md:text-4xl py-3 hover:bg-gray-900 hover:text-grass-light transition ease-in duration-100 z-0'>Login</a>
        {/* signup */}
        <a href='#' className='hidden font-bold px-3 text-2xl md:text-4xl py-3 hover:bg-gray-900 hover:text-grass-light transition ease-in duration-100 z-0'>Sign Up</a>
        {/* user */}
        <a href='#' className='group flex px-3 text-2xl md:text-4xl py-3 hover:bg-gray-900 hover:text-grass-light transition ease-in duration-100 z-0 min-w-0'>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className='h-8 w-8 md:w-10 md:h-10 rounded-per50 group-hover:rounded-lg transition-all ease-in-out duration-200 flex-shrink-0' src='https://images.unsplash.com/photo-1571326467924-28c215a3e7a4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80' alt=''></img>
          <div className='pl-3 truncate'>ProPlayer666</div>
        </a>
        <a href='#' className='text-2xl px-3 md:text-4xl py-3 hover:bg-gray-900 hover:text-grass-light transition ease-in duration-100 z-0'><FaCog /></a>
      </div>
    </nav>
  )
}
