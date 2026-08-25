import ResourceView from './ResourceView.jsx'

const columns = [
  { key: 'title', label: 'Workout' },
  { key: 'focus', label: 'Focus' },
  { key: 'difficulty', label: 'Difficulty' },
  { key: 'durationMinutes', label: 'Minutes' },
  { key: 'equipment', label: 'Equipment' },
  { key: 'recommendedForGoal', label: 'Best for' },
]

const codespaceApiEndpoint = `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/workouts/`
const endpointLabel = import.meta.env.VITE_CODESPACE_NAME
  ? codespaceApiEndpoint
  : 'http://localhost:8000/api/workouts/'

export default function Workouts() {
  return (
    <ResourceView
      title="Workouts"
      resource="workouts"
      description="Recommended sessions aligned to user fitness goals."
      columns={columns}
      endpointLabel={endpointLabel}
    />
  )
}
