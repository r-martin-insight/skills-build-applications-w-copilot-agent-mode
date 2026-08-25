import ResourceView from './ResourceView.jsx'

const columns = [
  { key: 'title', label: 'Workout' },
  { key: 'focus', label: 'Focus' },
  { key: 'difficulty', label: 'Difficulty' },
  { key: 'durationMinutes', label: 'Minutes' },
  { key: 'equipment', label: 'Equipment' },
  { key: 'recommendedForGoal', label: 'Best for' },
]

export default function Workouts() {
  return (
    <ResourceView
      title="Workouts"
      resource="workouts"
      description="Recommended sessions aligned to user fitness goals."
      columns={columns}
    />
  )
}
