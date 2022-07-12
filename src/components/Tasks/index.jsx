import { TaskBox } from '../TaskBox'
import './styles.css'

export function Tasks() {
  return(
    <div className="ContainerTasks">
      <div className="Info">

        <p className="Created">Tarefas criadas
        <div  style={{color: "#F2F2F2"}} className="CreateCounter">7</div>
        </p>

        <p className="Done">Concluídas
        <div style={{color: "#F2F2F2"}} className="DoneCounter">0 de 7</div>
        </p>
      </div>

      <div className="ListTasks" >
        <TaskBox />
        <TaskBox />
        <TaskBox />
        <TaskBox />
        <TaskBox />
        <TaskBox />
        <TaskBox />
        
        
      </div>

      <div>

      </div>
      
    </div>
  )
}