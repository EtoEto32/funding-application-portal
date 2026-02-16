import { useEffect, useState } from 'react'

function App() {
  const [health, setHealth] = useState<{ status?: string; service?: string } | null>(null)

  useEffect(() => {
    fetch('/api/health')
      .then(res => res.json())
      .then(data => setHealth(data))
      .catch(err => console.error('Health check failed:', err))
  }, [])

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          研究費申請システム
        </h1>
        <p className="text-gray-600 mb-4">
          Funding Application Portal
        </p>
        {health && (
          <div className="mt-4 p-4 bg-green-50 rounded">
            <p className="text-sm text-green-800">
              Backend Status: {health.status} ({health.service})
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default App
