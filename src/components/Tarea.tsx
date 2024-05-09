type Tarea = {
    tarea: string
    borrarTarea: () => void
}

export const Tarea = ({ tarea, borrarTarea }: Tarea) => {
    return (
        <div className="task">
            <span>{tarea}</span>
            <button onClick={borrarTarea}>Eliminar Tarea</button>

        </div>
    )
}