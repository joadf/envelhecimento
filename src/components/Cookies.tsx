import { cookies, headers } from 'next/headers'

export async function Cookies() {
  const userCookies = cookies()
  const userHeaders = headers()

  return (
    <div>
      <h1>Cookies e Headers</h1>
      <pre>{JSON.stringify(userCookies.getAll(), null, 2)}</pre>
      <pre>{JSON.stringify(userHeaders.entries, null, 2)}</pre>
    </div>
  )
}
