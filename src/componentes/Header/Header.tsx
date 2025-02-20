import styles from "./styles.module.css"

export default function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.in}>
                <img src="src\assets\Logo 1.png" alt="" />
                <p>Feed</p>
            </div>
        </div>
    )
}