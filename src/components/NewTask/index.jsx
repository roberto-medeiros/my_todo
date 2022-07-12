import './styles.css'

export function NewTask() {
  return (
    <div className="Container">
      <input type="text" placeholder="Adicione uma nova tarefa" />
      <button type="submit">Criar
      <img src="src/assets/plus.svg"/>
      </button>
    </div>
  )
}