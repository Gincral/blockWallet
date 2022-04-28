// import Metamask from '../../../asset/public/metamask.svg';
// import { useEffect, useState } from 'react';
// // import useMediaQuery from '@mui/material/useMediaQuery';
// // import useAuth from '../hooks/useAuth';
// // import useAccount from '../hooks/useAccount';

// export default function ConnectWallet(props: any) {
//     const [hover, onHover] = useState(false)
//     // const smartPhone = !useMediaQuery('(min-width:600px)');

//     const { connectWallet, disconnectWallet } = useAuth()
//     const { getAddress } = useAccount()
//     const [account, setAccount] = useState(getAddress())

//     useEffect(() => {
//         setAccount(getAddress())
//     }, [getAddress])

//     const getBtnFill = () => {
//         if (account && hover) { return 'Disconnect' }
//         else if (account ) { return sliceAddress(account) }
//         else { return 'Connect' }
//     }

//     const style = {
//         height: '20px',
//         padding: '10px',
//         display: 'inline-block',
//         marginLeft: '10px',
//         position: 'relative',
//         // top: smartPhone ? '2px' : '-9px',
//         cursor: 'pointer',
//         borderRadius: '7px',
//         marginTop: props.smartPhone ? '-2px' : '0px',
//         width: 'auto',
//     } as const
//     const iconStyle = {
//         height: '20px',
//         display: 'inline-block',
//     } as const
//     const connectBtnStyle = {
//         display: 'inline-block',
//         position: 'relative',
//         top: '-4px',
//         color: 'white',
//         marginLeft: '7px',
//     } as const

//     return (<div className="flowing-background" style={style}>
//         <img src={Metamask} style={iconStyle} />
//         <div style={connectBtnStyle} onClick={account ? disconnectWallet : connectWallet} onMouseEnter={() => onHover(true)} onMouseLeave={() => onHover(false)}>{getBtnFill()}</div>
//     </div>)
// }

// function sliceAddress(address: any) {
//     if (address) {
//         return address.slice(0, 6) + '...' + address.slice(address.length - 4)
//     } else {
//         return ''
//     }
// }