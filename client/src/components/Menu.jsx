import './Menu.css'
import { Link } from 'react-router-dom'

function Menu() {
  return (
    <article className="directory">
      <h1>Menu</h1>
      <div className="button-container">
        <button className="directory-buttons">
          <Link to="/feed" >Journal Feed</Link>
        </button>
        <button className="directory-buttons">
          <Link to="/new">New Entry</Link>
        </button>
      </div>
    </article>
  )
}

export default Menu