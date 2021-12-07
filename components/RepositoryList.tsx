import {gql, useMutation, useQuery} from '@apollo/client'
import Link from 'next/link'
import {
  GetOrganizationQuery,
  GetOrganizationQueryVariables,
  StarRepositoryMutation,
  StarRepositoryMutationVariables,
  UnstarRepositoryMutation,
  UnstarRepositoryMutationVariables
} from '../graph/types'
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

const STAR_REPOSITORY_MUTATION = gql`
  mutation StarRepositoryMutation($id: ID!) {
    addStar(input: {starrableId: $id}) {
      starrable {
        id
        viewerHasStarred
      }
    }
  }
`

const UNSTAR_REPOSITORY_MUTATION = gql`
  mutation UnstarRepositoryMutation($id: ID!) {
    removeStar(input: {starrableId: $id}) {
      starrable {
        id
        viewerHasStarred
      }
    }
  }
`

export function RepositoryList({login}: {login: string}) {
  const {data, loading, error} = useQuery<GetOrganizationQuery, GetOrganizationQueryVariables>(GET_ORGANIZATION_QUERY, {
    ssr: false,
    variables: {login}
  })

  const [star] = useMutation<StarRepositoryMutation, StarRepositoryMutationVariables>(STAR_REPOSITORY_MUTATION)
  const [unstar] = useMutation<UnstarRepositoryMutation, UnstarRepositoryMutationVariables>(UNSTAR_REPOSITORY_MUTATION)

  function toggle({id, starred}: {id: string; starred: boolean}) {
    if (starred) {
      return star({variables: {id}})
    } else {
      return unstar({variables: {id}})
    }
  }

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
            <Link href={`/org/${login}/repo/${repository.name}`}>
              <a>{repository.name}</a>
            </Link>
            <button onClick={() => toggle({id: repository.id, starred: !repository.viewerHasStarred})}>
              <span>{repository.stargazerCount}</span> {repository.viewerHasStarred ? '★' : '☆'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
