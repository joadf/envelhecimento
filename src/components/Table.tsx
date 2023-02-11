export async function Table() {
    const response = await fetch('/api/listagem', {
      cache: 'no-store',
    })
  
    const leads = await response.json()
  
    return (
      <div>
        <pre>{JSON.stringify(leads, null, 2)}</pre>
      </div>
    )
  }
  