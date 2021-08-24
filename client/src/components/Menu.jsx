import { Link } from 'react-router-dom'

function Menu(props) {
  return (
    <div>
      <h1>Menu</h1>
      <Link to="/feed">Journal Feed</Link>
      <br />
      <Link to="/new">New Entry</Link>
    </div>
  )
}

export default Menu