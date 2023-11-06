import { useNavigate } from "react-router-dom"  /* IMPORTAMOS PARA PODER USAR "navigate" */

export function TaskCard({ task }) { /* creamos una funcion que la hara de NAV */

    const navigate = useNavigate(); /* DECLARAMOS A "navigate" PARA MOVERNOS A OTRA RRUTA */

    return (
        <div
            className="bg-zinc-800 p-3 hover:bg-zinc-700 hover:cursor-pointer" /* personalizamos los hover */

            onClick={() => {   /* funcion que reacciona a hacer clic sobre el area de "div" */
                /* navigate('/tasks/' + task.id)  tambien esto est valido*/
                navigate(`/tasks/${task.id}`)  /* REDIRECCIONAMOS CON "navigate", concatenamos con "${task.id}" mas comillas invertidas */
                /* se utilizan comillas simples para concatenar */
            }}>
            <h1 className="font-bold uppercase">{task.title}</h1>       {/* y por cada tarea va a colocar un titulo y parrafo correspondiente */}
            <p className="text-slate-400">{task.description}</p>
            <hr />  {/* colocamos una linea para diferenciar los bloques */}
        </div>
    )
}