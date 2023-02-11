import { Suspense } from 'react'

import { Cookies } from '@/components/Cookies'
import { Repo } from '@/components/Repo'
import { Timeout } from '@/components/Timeout'
import { User } from '@/components/User'
import { LongTimeout } from '@/components/LongTimeout'
import Link from 'next/link'
import { Counter } from '@/components/Counter'

export const metadata = {
  title: 'Dashboard...',
}

export default async function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>

      <Link href="/">Home</Link>

      <Counter />

      <Suspense fallback={<p>Carregando todo...</p>}>
        {/* @ts-expect-error Async Server Component */}
        <Timeout />
      </Suspense>

      <Suspense fallback={<p>Carregando todos...</p>}>
        {/* @ts-expect-error Async Server Component */}
        <LongTimeout />
      </Suspense>

      {/* @ts-expect-error Async Server Component */}
      <User />

      {/* @ts-expect-error Async Server Component */}
      <Repo />

      {/* @ts-expect-error Async Server Component */}
      <Cookies />
    </div>
  )
}
