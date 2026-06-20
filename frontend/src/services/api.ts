const defaultApiBaseUrl = 'http://localhost:8080'

export function getApiBaseUrl() {
  return import.meta.env.VITE_API_BASE_URL ?? defaultApiBaseUrl
}
