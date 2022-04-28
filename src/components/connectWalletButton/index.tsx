import { useWeb3React } from '@web3-react/core'
import { Injected } from './../../utils/connector'


function sliceAddress(address: any) {
    if (address) {
        return address.slice(0, 6) + '...' + address.slice(address.length - 4)
    } else {
        return ''
    }
}

export default function ConnectWalletButton(props: any) {
    const { activate, deactivate, account } = useWeb3React();

    const connectWallet = () => { activate(Injected) }
    const disconnectWallet = () => { deactivate() }
    return (<button onClick={account ? disconnectWallet : connectWallet}>
        {account ? sliceAddress(account): 'Connect to Metamask'}
        </button>)
}





