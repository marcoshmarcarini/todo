import { useState } from "react"
import styles from "../styles/todo.module.css"

export default function Form(){
    const [texto, setTexto] = useState("")
    const [tarefas, setTarefas] = useState([])
    const enviar = "Enviar"
    const placeholder = "Insira uma tarefa"
    let randomNum = 0

    async function salvarTarefa(){
        
        await fetch('/api/task', {
            method: "POST",
            body: JSON.stringify({texto}) 
        })

        setTexto("")

        const resp = await fetch('/api/task')
        const tarefas = await resp.json()
        setTarefas(tarefas)
    }

    

    function renderizarTarefas(){
        return tarefas.map((tarefa, i) => {
            return(
                <>
                    <li key={i} className={styles.tarefaItem}>
                        <input type="checkbox" name="tarefa-{i}"/> - {tarefa.texto}
                    </li>
                </>
            )
        })
    }


    return(
        <div className={styles.formArea}>
            <h4 className={styles.tarefaTitulo}>Insira suas tarefas</h4>
            <div className={styles.formContent}>
                <input type="text" value={texto} onChange={e =>setTexto(e.target.value)} className={styles.inputTxt} placeholder={placeholder}/>
                <input type="submit" onClick={salvarTarefa} value={enviar} className={styles.inputBtn}/>
                
            </div>
            <ul className={styles.lista}>
                {renderizarTarefas()}
            </ul>
        </div>
    )
}



/**
 * <button onClick={salvarTarefa}>Enviar</button>
 */