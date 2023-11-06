import { Link } from 'react-router-dom'

export function Navigation() { /* creamos una funcion que la hara de NAV */
    return (
        <div className='flex justify-between py-3'>
            <Link to="/tasks"> {/* agregamos un "h1" dentro de "Link" para redireccionar */}
                <h1 className='font-bold text-3xl mb-4'>Task App</h1>
            </Link>  {/* Link es una funcion de REACT que reemplaza a "link" */}
            <button className='bg-indigo-500 px-3 py-2 rounded-lg'>
                <Link to="/tasks-create">Create Task</Link>  {/* Link es una funcion de REACT que reemplaza a "link" */}
            </button>
            
        </div>
    )
}