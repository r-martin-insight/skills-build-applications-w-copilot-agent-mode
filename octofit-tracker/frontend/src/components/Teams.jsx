import ResourceView from './ResourceView.jsx'

const columns = [
  { key: 'name', label: 'Team' },
  { key: 'city', label: 'City' },
  { key: 'coach', label: 'Coach' },
  { key: 'memberUsernames', label: 'Members' },
  { key: 'weeklyGoalMinutes', label: 'Weekly goal' },
]

const codespaceApiEndpoint = `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/teams/`
const endpointLabel = import.meta.env.VITE_CODESPACE_NAME
  ? codespaceApiEndpoint
  : 'http://localhost:8000/api/teams/'

export default function Teams() {
  return (
    <ResourceView
      title="Teams"
      resource="teams"
      description="Training groups, coaches, and weekly activity goals."
      columns={columns}
      endpointLabel={endpointLabel}
    />
  )
}
