import * as React from 'react'
import { useAccount } from 'wagmi'

export const Account = () => {
  const [{ data: accountData }, disconnect] = useAccount({
    fetchEns: false,
  })

  if (!accountData) return <></>

  function getLastLetters(){
    var id = accountData?.address
    var lastFive = id?.substring(id.length - 4); // => "Tabs1"

    return{
      lastFive
    }
  }

  

  return (
    <div>
      <div>
      <button className="btn btn-error ease-out duration-300 hover:scale-110" onClick={() => disconnect()}>Disconnect</button> 
      <h1>{getLastLetters().lastFive}</h1>
      
      </div>


      
    </div>
  )
}