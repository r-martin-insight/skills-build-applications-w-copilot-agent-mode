import ResourceView from './ResourceView.jsx'

const columns = [
  { key: 'name', label: 'Name' },
  { key: 'username', label: 'Username' },
  { key: 'email', label: 'Email' },
  { key: 'fitnessGoal', label: 'Fitness goal' },
  { key: 'preferredWorkout', label: 'Preferred workout' },
]

export default function Users() {
  return (
    <ResourceView
      title="Users"
      resource="users"
      description="Member profiles and personal fitness goals."
      columns={columns}
    />
  )
}
