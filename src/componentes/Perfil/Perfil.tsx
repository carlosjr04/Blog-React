import { useContext } from "react"
import styles from "./styles.module.css"
import { UserContext } from "../../stores/UserContext"
import minhafoto from "../../assets/minha foto.jpg"

export default function Perfil() {
    const UserData = useContext(UserContext)
    if (!UserData) {
        console.error("UserData não está definido!");
        return;
    }
    return (
        
        <div className={styles.card}>

            
            <img src={minhafoto} alt="" />
            <div className={styles.texto}>
                <h1>{UserData.nome}</h1>
                <h3>Dev Front-end</h3>
            </div>
        </div>
    )
}