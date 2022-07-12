import './styles.css'

export function TaskBox() {
  return(
    <div className="TaskBox">

      <button className="Check" type="submit">
      <img src="src/assets/check.svg" alt="check" />
      </button>

      <h1>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</h1>
      
      <button className="Trash" type="submit">
        <img src="src/assets/trash.svg" alt="trash" />
      </button>
      
     </div>
  )
}