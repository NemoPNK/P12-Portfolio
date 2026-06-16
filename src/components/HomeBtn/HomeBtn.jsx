import { Link } from 'react-router-dom'
import './HomeBtn.css'

function HomeBtn({ label, to, color, viewBox, path }) {
  return (
    <Link
      to={to}
      className="home-btn"
      style={{ color }}
    >
      <svg
        viewBox={viewBox}
        className="home-btn__svg"
        aria-hidden="true"
      >
        <path
          d={path}
          fill="currentColor"
        />
      </svg>

      <span className="home-btn__label">
        {label}
      </span>
    </Link>
  )
}

export default HomeBtn
