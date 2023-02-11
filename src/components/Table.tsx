export async function Table() {
    const response = await fetch('/api/listagem', {
      cache: 'no-store',
    })

    if (response.status === 200) {
      
      const leads = await response.json()
  
      return (
        <div>
          <pre>{JSON.stringify(leads, null, 2)}</pre>
        </div>
      );

    }
  
    return (
      <div>
        <pre>{JSON.stringify(response.statusText, null, 2)}</pre>
      </div>
    );
    
  }
  