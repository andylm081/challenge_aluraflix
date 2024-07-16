import styles from "./Rodape.module.css";

function Rodape() {
    return (
        <footer className={styles.rodape}>
            <img src='logo.png' alt='Logotipo' />
            <div className={styles.texto}>
                <p>Desenvolvido por Anderson Lima.</p>
                <p>Alura Latam - 2024</p>
            </div>
        </footer>
    );
}

export default Rodape;
