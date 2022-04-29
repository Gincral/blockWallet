import styles from './style.module.css'
import Button from '../button'
import left from './left.svg'
import Input from '../input'
import AppContext from '../../context/background/AppContext';
import { useState, useContext } from 'react'
import defaults from '../../utils/constants';
import moment from 'moment'

export default function SendEth(props: any) {
    const { state, setState, addTransaction } = useContext(AppContext);
    const [address, setaddress] = useState('')
    const [amount, setamount] = useState('')
    
    const createTranscation = () => {
        const newTransaction = {
            id: state.transactions.length,
            to: address,
            from: defaults.publicAddress,
            value: Number(amount),
            date: moment(new Date()).format('DD-MM-YYYY hh:mm')
        }
        setState({transactions: state.transactions.concat(newTransaction)})
        addTransaction(newTransaction)
        props.next()
        // 
    }
    return (<div>
        <div className={styles.topbar}>
            <span style={{ cursor: 'pointer' }} onClick={props.cancel}>
                <img src={left} className={styles.left} />
                <span className={styles.move_top}>Back</span>
            </span>
            <div className={styles.title}>Send Ether</div>
        </div>
        <div className={styles.input_title}>Recipient</div>
        <Input text="Enter Public Address" value={address} setValue={setaddress} />
        <div className={styles.input_title}>Amount</div>
        <Input text="Enter the Amount of Ether" value={amount} setValue={setamount} />

        <div className={styles.grid}>
            <Button onClick={props.cancel}>Cancel</Button>
            <Button fill onClick={createTranscation}>Next</Button>
        </div>
    </div>)
}