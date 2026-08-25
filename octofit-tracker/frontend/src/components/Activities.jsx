import ResourceView from './ResourceView.jsx'

const columns = [
  { key: 'username', label: 'Athlete' },
  { key: 'activityType', label: 'Activity' },
  { key: 'durationMinutes', label: 'Minutes' },
  { key: 'caloriesBurned', label: 'Calories' },
  { key: 'activityDate', label: 'Date' },
  { key: 'notes', label: 'Notes' },
]

export default function Activities() {
  return (
    <ResourceView
      title="Activities"
      resource="activities"
      description="Recent logged workouts from the OctoFit community."
      columns={columns}
    />
  )
}
