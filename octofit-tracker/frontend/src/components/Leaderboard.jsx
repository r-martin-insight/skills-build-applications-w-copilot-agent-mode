import ResourceView from './ResourceView.jsx'

const columns = [
  { key: 'rank', label: 'Rank' },
  { key: 'username', label: 'Athlete' },
  { key: 'points', label: 'Points' },
  { key: 'totalActiveMinutes', label: 'Active minutes' },
  { key: 'teamName', label: 'Team' },
]

export default function Leaderboard() {
  return (
    <ResourceView
      title="Leaderboard"
      resource="leaderboard"
      description="Competitive standings based on activity points and minutes."
      columns={columns}
    />
  )
}
