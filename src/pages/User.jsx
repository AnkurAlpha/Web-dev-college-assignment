import { useParams } from 'react-router-dom'

function User() {
  const { username } = useParams()

  return (
    <section className="page">
      <h1>User</h1>
      <p>Viewing profile for: {username}</p>
    </section>
  )
}

export default User
