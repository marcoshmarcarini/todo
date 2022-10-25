//Chamada de uma api com o método Post
const tarefas = []

export default function task(req, res){
    if(req.method === "POST"){
        post(req, res)
    }else if(req.method === "GET"){
        get(req,res)
    }else{
        res.status(405).send()
    }
}

function post(req, res){
    const tarefa = JSON.parse(req.body)
    tarefas.push(tarefa)
    res.status(200).send()
}

function get(req, res){
    res.status(200).json(tarefas)
}
