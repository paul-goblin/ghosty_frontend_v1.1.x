import Head from 'next/head'
import Background from './Background'
import NavStandard from './NavStandard'

export default function Layout({title, keywords, description, children}) {
  return (
    <div className='bg-black text-gray-300 font-trebuchet relative h-full overflow-hidden'>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description}></meta>
        <meta name='keywords' content={keywords}></meta>
      </Head>

      {/* Body */}
      <div className='flex flex-col h-full'>

        <Background />
        <NavStandard />

        {/* Content */}
        <div className='flex flex-row justify-center items-center p-4 pt-0 flex-grow max-h-96 md:max-h-192 lg:max-h-full'>
          {children}
        </div>

      </div>
    </div>
  )
}

Layout.defaultProps = {
  title: 'Ghosty',
  description: 'Ghosty is a grid based logic game',
  keywords: 'ghosty, game, grid, play, pushy'
}