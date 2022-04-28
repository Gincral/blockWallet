import styles from './style.module.css'
import img from './arrow.svg'
export default function SendEth(props: any) {

    return (<div className={styles.body}>
        <div className={styles.content}>
            <div className={styles.balance}>0 ETH</div>
            <div className={styles.balanceInUSD}>$0.00 USD</div>
            <div className={styles.img_background}><img src={img} className={styles.img} /></div>
            <div className={styles.send}>Send</div>
        </div>
    </div>)
}