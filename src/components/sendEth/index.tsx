import styles from './style.module.css'
import Button from '../button'
import left from './left.svg'

export default function SendEth(props: any) {

    return (<div>
        <div className={styles.topbar}>
            <span style={{cursor:'pointer'}} onClick={props.cancel}>
                <img src={left} className={styles.left} />
                <span className={styles.move_top}>Back</span>
            </span>
            <div className={styles.title}>Send Ether</div>
        </div>
        <div>
            recipient
        </div>
        <div>
            amount
        </div>
        <div className={styles.grid}>
            <Button onClick={props.cancel}>Cancel</Button>
            <Button fill onClick={props.next}>Next</Button>
        </div>

    </div>)
}