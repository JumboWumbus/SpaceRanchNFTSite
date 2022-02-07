import { AnimatePresence, motion } from 'framer-motion';
import { AppProps } from 'next/app';
import { useEffect } from 'react'

import { Provider, chain, defaultChains } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'
import { WalletLinkConnector } from 'wagmi/connectors/walletLink'

import '../styles/global.css';


const infuraId = process.env.INFURA_ID

// Chains for connectors to support
const chains = defaultChains
const defaultChain = chain.mainnet

// Set up connectors
type ConnectorsConfig = { chainId?: number }
const connectors = ({ chainId }: ConnectorsConfig) => {
  const rpcUrl =
    chains.find((x) => x.id === chainId)?.rpcUrls?.[0] ??
    defaultChain.rpcUrls[0]
  return [
    new InjectedConnector({ chains }),
    new WalletConnectConnector({
      chains,
      options: {
        infuraId,
        qrcode: true,
      },
    }),
    new WalletLinkConnector({
      chains,
      options: {
        appName: 'wagmi',
        jsonRpcUrl: `${rpcUrl}/${infuraId}`,
      },
    }),
  ]
}

function MyApp({ Component, pageProps, router }: AppProps) {


  


  return (
<Provider autoConnect connectors={connectors}>
<AnimatePresence exitBeforeEnter>
  



  <motion.div
  initial="initial"
  animate="animate"
  exit="exit"
  key={router.route}
  >


<Component {...pageProps}  key={router.route}/>



  </motion.div>

  </AnimatePresence>
  </Provider>

);

  }

export default MyApp;
