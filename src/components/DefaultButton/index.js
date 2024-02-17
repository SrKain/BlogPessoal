import styles from './DefaultButton.module.css'

export default function DefaultButton(props){
    return(
        <button className={styles.botaoLer}>{props.children}</button>
    )
}