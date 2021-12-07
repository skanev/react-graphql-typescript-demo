import type {NextPage} from 'next'
import React from 'react'
import {OrganizationsBanner} from '../components/OrganizationsBanner'

const Home: NextPage = () => {
  return (
    <div>
      <OrganizationsBanner />
    </div>
  )
}

export default Home
