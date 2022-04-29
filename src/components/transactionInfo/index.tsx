import styles from './style.module.css'
import TransactionCard from './transactionCard'
import AppContext from '../../context/background/AppContext';
import { useContext, useEffect } from 'react';

export default function TransactionInfo(props: any) {
    const { state } = useContext(AppContext);
    useEffect(() => {
        console.log(state)
    }, [state])
    
    const data = {
        sent: true,
        date: '2021-02-056',
        ethAmount: 496,
        usdAmount: 3,
    }

    const data2 = {
        sent: false,
        date: '2021-02-056',
        ethAmount: 496,
        usdAmount: 32143,
    }
    return (<div className={styles.transaction_info}>
        <TransactionCard data={data} hideTopBar />
        <TransactionCard data={data2} />
        <TransactionCard data={data} />
        <TransactionCard data={data2} />
        <TransactionCard data={data} />
        <TransactionCard data={data2} />
        <TransactionCard data={data} />
    </div>)
}




