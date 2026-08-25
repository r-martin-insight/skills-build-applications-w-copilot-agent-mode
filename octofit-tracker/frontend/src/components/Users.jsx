import ResourceView from './ResourceView.jsx'

const columns = [
  { key: 'name', label: 'Name' },
  { key: 'username', label: 'Username' },
  { key: 'email', label: 'Email' },
  { key: 'fitnessGoal', label: 'Fitness goal' },
  { key: 'preferredWorkout', label: 'Preferred workout' },
]

const codespaceApiEndpoint = `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/users/`
const endpointLabel = import.meta.env.VITE_CODESPACE_NAME
  ? codespaceApiEndpoint
  : 'http://localhost:8000/api/users/'

export default function Users() {
  return (
    <ResourceView
      title="Users"
      resource="users"
      description="Member profiles and personal fitness goals."
      columns={columns}
      endpointLabel={endpointLabel}
    />
  )
}
