import styles from './style.module.css'
import Button from '../button'
import left from './left.svg'
import Input from '../input'
import { useState } from 'react'
export default function SendEth(props: any) {

    const [address, setaddress] = useState('')
    const [amount, setamount] = useState('')
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
            <Button fill onClick={props.next}>Next</Button>
        </div>
    </div>)
}