import { Link } from 'react-router-dom'

function Menu(props) {
  return (
    <div className="directory">
      <h1>Menu</h1>
      <Link to="/feed" className="directory-links">Journal Feed</Link>
      <br />
      <Link to="/new" className="directory-links">New Entry</Link>
    </div>
  )
}

export default Menu