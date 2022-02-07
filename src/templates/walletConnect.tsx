import React from 'react'
import { Connector, useConnect } from 'wagmi'
import CoinbaseWalletIcon from './CoinbaseWalletIcon'
import MetaMaskIcon from './MetaMaskIcon'

import { useIsMounted } from './useIsMounted'
import WalletConnectLogo from './WalletConnectLogo'

export const Connect = () => {
  const isMounted = useIsMounted()
  const [
    {
      data: { connector, connectors, connected },
      error,
      loading,
    },
    connect,
  ] = useConnect()




interface SingleConnectProps{
  connection: Connector
}
  const SingleConnect = ({connection}:SingleConnectProps)=>{

 

    function renderIcon(name:string){

      let lm;
      switch (name) {
        case "WalletConnect":
          return <WalletConnectLogo width={"100%"} height={"100%"} key={"walletconnect"}/>
          
        case "MetaMask":
          return <MetaMaskIcon width={"100%"} height={"100%"}key={"metamask"}/>
        
        case "Coinbase Wallet":
          return <CoinbaseWalletIcon width={"80%"} height={"80%"}key={"coinbasewallet"}/>
        default:
          return name;
      }

     
      
    }

    
    return(

      <button 
        className=" bg-transparent hover:bg-blue-900 text-blue-700 font-semibold inline-block rounded w-12 hover:text-white hover:scale-110
        "
        disabled={isMounted && !connection.ready}
        key={connection.name}
        onClick={() => connect(connection)}
      >
        {connection.id === 'injected' ? (isMounted ? renderIcon(connection.name) : connection.id) : renderIcon(connection.name)}
        {isMounted && !connection.ready && '(unsupported)'}
      
      </button>


    );
  }

 
 

  const connectButtons = connectors.map((x) =>(
    
      <SingleConnect key={`${x.id} "chumbo"`} connection={x}/>
    
      
    ))
  

  

  return (
    <div>
      <div className="flex gap-6">
       {connected ? <></> : connectButtons }
        
      </div>
      
    </div>
  )
}



