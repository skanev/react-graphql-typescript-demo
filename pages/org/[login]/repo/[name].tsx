import {NextPage} from 'next'
import {useRouter} from 'next/router'
import React from 'react'
import {OrganizationsBanner} from '../../../../components/OrganizationsBanner'
import {RepositoryInfo} from '../../../../components/RepositoryInfo'
import {RepositoryList} from '../../../../components/RepositoryList'

const Page: NextPage = () => {
  const router = useRouter()
  const login = router.query.login as string
  const name = router.query.name as string

  return (
    <div>
      <OrganizationsBanner active={login} />

      <main>
        <div>
          <div>
            <RepositoryList login={login} active={name} />
          </div>

          <RepositoryInfo login={login} name={name} />
        </div>
      </main>

      <footer></footer>
    </div>
  )
}

export default Page
