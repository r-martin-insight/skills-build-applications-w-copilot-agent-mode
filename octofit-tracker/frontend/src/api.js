const codespaceName = import.meta.env.VITE_CODESPACE_NAME
const apiBaseUrl = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev/api`
  : 'http://localhost:8000/api'

export function getApiUrl(resource) {
  return `${apiBaseUrl}/${resource}/`
}

export function normalizeCollection(payload, collectionName) {
  if (Array.isArray(payload)) {
    return payload
  }

  const candidates = [
    payload?.[collectionName],
    payload?.results,
    payload?.data,
    payload?.items,
    payload?.docs,
  ]

  return candidates.find(Array.isArray) ?? []
}

export async function fetchCollection(resource) {
  const response = await fetch(getApiUrl(resource))

  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`)
  }

  return normalizeCollection(await response.json(), resource)
}