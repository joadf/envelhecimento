import { Suspense } from 'react'

import { Table } from '@/components/Table'

export default async function Listagem() {
  return (
    <div>
      <h1>Listagem de leads</h1>

      <Suspense fallback={<p>Carregando todo...</p>}>
        {/* @ts-expect-error Async Server Component */}
        <Table />
      </Suspense>

    </div>
  )
}
