import Form from "../components/Form";
import styles from "../styles/todo.module.css";
export default function todo(){
    return(
        <div className={styles.listaContent}>
            <h1 className={styles.listaTitulo}>Lista de Tarefas</h1>
            <Form />
        </div>
    )
}