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
      <div className='bg-gradient-to-br from-cyan-800 to-rose-500 lg:col-span-4'>
        <div className='flex flex-col items-center justify-center py-2 lg:min-h-screen'>
          <div className='rounded-xl bg-gradient-to-br from-yellow-400 to-purple-600 p-2'>
          <img className='w-44 rounded-xl object-cover lg:h-96 lg:w-72' 
          src="https://i.insider.com/61cc84b94710b10019c77960?width=700" alt="" />
          </div>
          
          <div className='space-y-2 p-5 text-center'>
            <h1 className='text-4xl font-bold text-white'>ABD Apes</h1>
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
            <span className='font-extrabold underline decoration-pink-600/50'>ABD</span> {' '}
            NFT Market Place
          </h1>

          <button 
          onClick={() => address ? disconnect() : connectWithMetamask()}
          className='rounded-full bg-rose-400/80 text-white px-4 py-2 text-xs 
          font-bold lg:px-5 lg:py-3 lg:text-base'>
            {address ? 'Sign Out': 'Sign In'}
            </button>
            
            
            
        </header>

        <hr className='my-2 border' />
        {address && <p className='text-center text-sm text-rose-500'> 
          You are logged in with wallet {address.substring(0, 5)}...{address.substring(address.length -5)}</p> }
        {/** Content */}

        <div className='mt-10 flex flex-col flex-1 items-center space-y-6 text-center lg:space-y-0 lg:justify-center'>
          <img className='w-80 object-cover pb-10 lg:h-40' src="https://links.papareact.com/bdy" alt="" />
          <h1 className='text-3xl font-bold lg:text-5xl lg:font-extrabold'> The ABD Ape Coding Club | NFT Drop</h1>
          <p className='pt-2 text-xl text-green-500'>13/21 NFT's claimed</p>
        </div>

        {/** Mint Button */}
        <button className='h-16 w-full bg-red-500 text-white font-bold rounded-full mt-10 '>
          Mint NFT (0.01 ETH)
        </button>


      </div>


    </div>
  )
}

export default NFTDropPage