import styles from './style.module.css'
export default function Card(props: any) {

    return (<div className={[styles.card, styles.cardWidth].join(" ")}>
        {props.children}
    </div>)
}