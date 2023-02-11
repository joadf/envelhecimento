export async function LongTimeout() {
  await new Promise((resolve) => setTimeout(resolve, 5000))

  const response = await fetch('http://localhost:3000/api/hello', {
    cache: 'no-store',
  })

  const repos = await response.json()

  return (
    <div>
      <h1>Long Timeout</h1>
      <pre>{JSON.stringify(repos, null, 2)}</pre>
    </div>
  )
}
