import ResourceView from './ResourceView.jsx'

const columns = [
  { key: 'name', label: 'Team' },
  { key: 'city', label: 'City' },
  { key: 'coach', label: 'Coach' },
  { key: 'memberUsernames', label: 'Members' },
  { key: 'weeklyGoalMinutes', label: 'Weekly goal' },
]

export default function Teams() {
  return (
    <ResourceView
      title="Teams"
      resource="teams"
      description="Training groups, coaches, and weekly activity goals."
      columns={columns}
    />
  )
}
