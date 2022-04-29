import styles from './style.module.css'
import Button from '../button'

export default function SendEth(props:any){

    return(<div>
        <div>Send Ether</div>
        <div>
            recipient
        </div>
        <div>
            amount
        </div>
        <div>
            <Button onClick={props.cancel}>Cancel</Button>
            <Button fill onClick={props.next}>Next</Button>
        </div>
    
    </div>)
}