import type {NextPage} from 'next'
import {useRouter} from 'next/router'
import React from 'react'
import {OrganizationsBanner} from '../../components/OrganizationsBanner'
import {RepositoryList} from '../../components/RepositoryList'

const Page: NextPage = () => {
  const router = useRouter()
  const login = router.query.login as string

  return (
    <div>
      <OrganizationsBanner active={login} />

      <main>
        <div>
          <div>
            <RepositoryList login={login} />
          </div>
        </div>
      </main>

      <footer></footer>
    </div>
  )
}

export default Page
