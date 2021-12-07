import {gql, useMutation} from '@apollo/client'
import {
  StarRepositoryMutation,
  StarRepositoryMutationVariables,
  UnstarRepositoryMutation,
  UnstarRepositoryMutationVariables
} from '../graph/types'

const STAR_REPOSITORY_MUTATION = gql`
  mutation StarRepositoryMutation($id: ID!) {
    addStar(input: {starrableId: $id}) {
      starrable {
        id
        viewerHasStarred
        stargazerCount
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
        stargazerCount
      }
    }
  }
`

export function useToggleStar() {
  const [star] = useMutation<StarRepositoryMutation, StarRepositoryMutationVariables>(STAR_REPOSITORY_MUTATION)
  const [unstar] = useMutation<UnstarRepositoryMutation, UnstarRepositoryMutationVariables>(UNSTAR_REPOSITORY_MUTATION)

  function toggle({id, starred}: {id: string; starred: boolean}) {
    if (starred) {
      return star({variables: {id}})
    } else {
      return unstar({variables: {id}})
    }
  }

  return toggle
}
