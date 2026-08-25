import ResourceView from './ResourceView.jsx'

const columns = [
  { key: 'username', label: 'Athlete' },
  { key: 'activityType', label: 'Activity' },
  { key: 'durationMinutes', label: 'Minutes' },
  { key: 'caloriesBurned', label: 'Calories' },
  { key: 'activityDate', label: 'Date' },
  { key: 'notes', label: 'Notes' },
]

const codespaceApiEndpoint = `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/activities/`
const endpointLabel = import.meta.env.VITE_CODESPACE_NAME
  ? codespaceApiEndpoint
  : 'http://localhost:8000/api/activities/'

export default function Activities() {
  return (
    <ResourceView
      title="Activities"
      resource="activities"
      description="Recent logged workouts from the OctoFit community."
      columns={columns}
      endpointLabel={endpointLabel}
    />
  )
}
