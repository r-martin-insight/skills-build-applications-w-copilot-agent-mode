import ResourceView from './ResourceView.jsx'

const columns = [
  { key: 'rank', label: 'Rank' },
  { key: 'username', label: 'Athlete' },
  { key: 'points', label: 'Points' },
  { key: 'totalActiveMinutes', label: 'Active minutes' },
  { key: 'teamName', label: 'Team' },
]

const codespaceApiEndpoint = `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/leaderboard/`
const endpointLabel = import.meta.env.VITE_CODESPACE_NAME
  ? codespaceApiEndpoint
  : 'http://localhost:8000/api/leaderboard/'

export default function Leaderboard() {
  return (
    <ResourceView
      title="Leaderboard"
      resource="leaderboard"
      description="Competitive standings based on activity points and minutes."
      columns={columns}
      endpointLabel={endpointLabel}
    />
  )
}
