import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <section className="page">
      <h1>404</h1>
      <p>Page not found.</p>
      <Link className="back-link" to="/">
        Back to Home
      </Link>
    </section>
  )
}

export default NotFound
