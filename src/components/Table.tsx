export async function Table() {
    const response = await fetch('https://lp.joandrade.com/api/listagem', {
      cache: 'no-store',
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'GET'
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
  