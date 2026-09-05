import Layout from '@/Layout/Layout'
import React, { Suspense } from 'react'

function Home() {
  return (
    <Suspense>
        <Layout></Layout>
    </Suspense>
  )
}

export default Home