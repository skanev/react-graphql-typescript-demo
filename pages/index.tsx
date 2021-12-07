import type {NextPage} from 'next'
import Head from 'next/head'
import React from 'react'
import {OrganizationsBanner} from '../components/OrganizationsBanner'

const organizations: [string, string][] = [
  ['Facebook', 'facebook'],
  ['Microsoft', 'microsoft'],
  ['Apollo', 'apollographql']
]

const Home: NextPage = () => {
  return (
    <div>
      <OrganizationsBanner />
    </div>
  )
}

export default Home
