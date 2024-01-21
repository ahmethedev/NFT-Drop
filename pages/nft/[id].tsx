import React from 'react'
import { useAddress, useDisconnect, useMetamask } from '@thirdweb-dev/react'

function NFTDropPage() {
  //Auth
  const connectWithMetamask = useMetamask();
  const address = useAddress();
  const disconnect = useDisconnect();
  //--
  console.log(address)
  return (
    
    <div className='flex h-screen flex-col lg:grid lg:grid-cols-10'>
      {/** LEFT */}
      <div className='bg-gradient-to-br from-cyan-800 to-slate-500 lg:col-span-4'>
        <div className='flex flex-col items-center justify-center py-2 lg:min-h-screen'>
          <div className='rounded-xl bg-gradient-to-br from-yellow-400 to-purple-600 p-2'>
          <img className='w-44 rounded-xl object-cover lg:h-96 lg:w-72' 
          src="https://nftevening.com/wp-content/uploads/2022/04/2-1.jpg" alt="" />
          </div>
          
          <div className='space-y-2 p-5 text-center'>
            <h1 className='text-4xl font-bold text-white'>ABD NFTs</h1>
            <h2 className='text-xl text-gray-50'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio, tempore!</h2>
          </div>
        </div>
        
      </div>

      {/** RIGHT */}

      <div className='flex flex-1 flex-col p-12 lg:col-span-6'>
        {/** Head */}
        <header className='flex items-center justify-between'>
          <h1 className='w-52 cursor-pointer text-xl font-extralight sm:w-80'>
            The {' '}
            <span className='font-extrabold underline decoration-blue-600/50'>ABD</span> {' '}
            NFT Market Place
          </h1>

          <button 
          onClick={() => address ? disconnect() : connectWithMetamask()}
          className='rounded-full bg-blue-400/80 text-white px-4 py-2 text-xs 
          font-bold lg:px-5 lg:py-3 lg:text-base'>
            {address ? 'Sign Out': 'Sign In'}
            </button>
            
        </header>

        <hr className='my-2 border' />
        {address && <p className='text-center text-sm text-cyan-500'> 
          You are logged in with wallet {address.substring(0, 5)}...{address.substring(address.length -5)}</p> }
        {/** Content */}

        <div className='mt-10 flex flex-col flex-1 items-center space-y-6 text-center lg:space-y-0 lg:justify-center'>
          <img className='w-80 object-cover pb-10 lg:h-40' src="https://dappradar.com/blog/static/934b5bc42c243282988b93e31069be28/dd3f5/dappradar.com-azuki-nfts-all-about-the-brands-past-present-future-azuki-nfts.png" alt="" />
          <h1 className='text-3xl font-bold lg:text-5xl lg:font-extrabold'> The ABD Coding Club | NFT Drop</h1>
          <p className='pt-2 text-xl text-green-500'>2/90 NFTs claimed</p>
        </div>

        {/** Mint Button */}
        <button className='h-16 w-full bg-blue-500 text-white font-bold rounded-full mt-10 '>
          Mint NFT (0.01 ETH)
        </button>


      </div>


    </div>
  )
}

export default NFTDropPage