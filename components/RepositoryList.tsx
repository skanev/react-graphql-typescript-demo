import {gql, useQuery} from '@apollo/client'
import {GetOrganizationQuery, GetOrganizationQueryVariables} from '../graph/types'
import {useToggleStar} from '../hooks/useToggleStar'
import {Spinner} from './Spinner'

const GET_ORGANIZATION_QUERY = gql`
  query GetOrganizationQuery($login: String!) {
    organization(login: $login) {
      repositories(first: 50, isFork: false, isLocked: false, orderBy: {field: STARGAZERS, direction: DESC}) {
        nodes {
          id
          name
          viewerHasStarred
          stargazerCount
        }
      }
    }
  }
`

export function RepositoryList({login}: {login: string}) {
  const {data, loading, error} = useQuery<GetOrganizationQuery, GetOrganizationQueryVariables>(GET_ORGANIZATION_QUERY, {
    ssr: false,
    variables: {login}
  })

  const toggle = useToggleStar()

  if (loading)
    return (
      <div className="repositories">
        <Spinner />
      </div>
    )
  if (!data || error) return <div>Error!</div>

  return (
    <div className="repositories">
      <ul>
        {data.organization.repositories.nodes.map(repository => (
          <li key={repository.id}>
            <a>{repository.name}</a>
            <button onClick={() => toggle({id: repository.id, starred: !repository.viewerHasStarred})}>
              <span>{repository.stargazerCount}</span> {repository.viewerHasStarred ? '★' : '☆'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
