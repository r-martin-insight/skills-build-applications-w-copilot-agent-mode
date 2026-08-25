import { useEffect, useState } from 'react'
import { fetchCollection, getApiUrl } from '../api.js'

function formatValue(value) {
  if (Array.isArray(value)) {
    return value.join(', ')
  }

  if (typeof value === 'string' && /^\d{4}-\d{2}-\d{2}T/.test(value)) {
    return new Intl.DateTimeFormat(undefined, {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    }).format(new Date(value))
  }

  if (value === null || value === undefined || value === '') {
    return '—'
  }

  if (typeof value === 'object') {
    return JSON.stringify(value)
  }

  return value
}

function getItemKey(item, index) {
  return item._id ?? item.id ?? item.username ?? item.name ?? `${index}`
}

export default function ResourceView({ title, resource, description, columns }) {
  const [items, setItems] = useState([])
  const [status, setStatus] = useState('loading')
  const [error, setError] = useState('')

  useEffect(() => {
    let isMounted = true

    async function loadItems() {
      try {
        setStatus('loading')
        const collection = await fetchCollection(resource)

        if (isMounted) {
          setItems(collection)
          setStatus('ready')
        }
      } catch (requestError) {
        if (isMounted) {
          setError(requestError.message)
          setStatus('error')
        }
      }
    }

    loadItems()

    return () => {
      isMounted = false
    }
  }, [resource])

  return (
    <section className="resource-view">
      <div className="resource-heading">
        <div>
          <p className="eyebrow">{getApiUrl(resource)}</p>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <span className="record-count">{items.length} records</span>
      </div>

      {status === 'loading' && <div className="state-line">Loading {title.toLowerCase()}...</div>}

      {status === 'error' && (
        <div className="alert alert-danger" role="alert">
          Unable to load {title.toLowerCase()}: {error}
        </div>
      )}

      {status === 'ready' && items.length === 0 && (
        <div className="state-line">No {title.toLowerCase()} found.</div>
      )}

      {status === 'ready' && items.length > 0 && (
        <div className="table-responsive">
          <table className="table table-hover align-middle resource-table">
            <thead>
              <tr>
                {columns.map((column) => (
                  <th scope="col" key={column.key}>
                    {column.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {items.map((item, index) => (
                <tr key={getItemKey(item, index)}>
                  {columns.map((column) => (
                    <td key={column.key}>{formatValue(item[column.key])}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  )
}
