import {gql, useQuery} from '@apollo/client'
import React from 'react'
import {GetRepository, GetRepositoryVariables} from '../graph/types'
import {useToggleStar} from '../hooks/useToggleStar'
import {Spinner} from './Spinner'

const GET_REPOSITORY_QUERY = gql`
  query GetRepository($login: String!, $name: String!) {
    repository(name: $name, owner: $login) {
      id
      name
      homepageUrl
      stargazerCount
      description
      viewerHasStarred
      primaryLanguage {
        id
        name
      }
      licenseInfo {
        name
      }
      repositoryTopics(first: 10) {
        nodes {
          topic {
            name
          }
        }
      }
    }
  }
`

export function RepositoryInfo({name, login}: {name: string; login: string}) {
  const {data, loading, error} = useQuery<GetRepository, GetRepositoryVariables>(GET_REPOSITORY_QUERY, {
    variables: {login, name}
  })

  const toggle = useToggleStar()

  if (loading)
    return (
      <div className="repository">
        <Spinner />
      </div>
    )
  if (error || !data) return <div>Error</div>

  const repository = data.repository!

  return (
    <div className="repository">
      <button onClick={() => toggle({id: repository.id, starred: !repository.viewerHasStarred})}>
        {repository.viewerHasStarred ? 'Unstar' : 'Star'}
      </button>
      <h1>{repository.name}</h1>
      <div className="description">{repository.description}</div>
      {repository.repositoryTopics!.nodes!.length === 0 ? null : (
        <ul className="topics">
          {repository.repositoryTopics!.nodes!.map(node => (
            <li key={node?.topic.name}>{node?.topic.name}</li>
          ))}
        </ul>
      )}

      <p>
        Homepage: <a href={repository.homepageUrl}>{repository.homepageUrl}</a>
      </p>
      <p>License: {repository.licenseInfo?.name ?? 'Unspecified'}</p>
      <p>Stars: {repository.stargazerCount}</p>
    </div>
  )
}
