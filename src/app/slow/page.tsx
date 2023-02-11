import { Cookies } from '@/components/Cookies'
import { Repo } from '@/components/Repo'
import { Timeout } from '@/components/Timeout'
import { User } from '@/components/User'

export default async function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>

      {/* @ts-expect-error Async Server Component */}
      <Timeout />

      {/* @ts-expect-error Async Server Component */}
      <User />

      {/* @ts-expect-error Async Server Component */}
      <Repo />

      {/* @ts-expect-error Async Server Component */}
      <Cookies />
    </div>
  )
}
