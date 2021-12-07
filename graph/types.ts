

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetOrganizationQuery
// ====================================================

export interface GetOrganizationQuery_organization_repositories_nodes {
  __typename: "Repository";
  id: string;
  name: string;               // The name of the repository.
  viewerHasStarred: boolean;  // Returns a boolean indicating whether the viewing user has starred this starrable.
  stargazerCount: number;     // Returns a count of how many stargazers there are on this object
}

export interface GetOrganizationQuery_organization_repositories {
  __typename: "RepositoryConnection";
  nodes: (GetOrganizationQuery_organization_repositories_nodes)[];  // A list of nodes.
}

export interface GetOrganizationQuery_organization {
  __typename: "Organization";
  repositories: GetOrganizationQuery_organization_repositories;  // A list of repositories that the user owns.
}

export interface GetOrganizationQuery {
  organization: GetOrganizationQuery_organization;  // Lookup a organization by login.
}

export interface GetOrganizationQueryVariables {
  login: string;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: StarRepositoryMutation
// ====================================================

export interface StarRepositoryMutation_addStar_starrable {
  __typename: "Repository" | "Topic" | "Gist";
  id: string;
  viewerHasStarred: boolean;  // Returns a boolean indicating whether the viewing user has starred this starrable.
  stargazerCount: number;     // Returns a count of how many stargazers there are on this object
}

export interface StarRepositoryMutation_addStar {
  __typename: "AddStarPayload";
  starrable: StarRepositoryMutation_addStar_starrable | null;  // The starrable.
}

export interface StarRepositoryMutation {
  addStar: StarRepositoryMutation_addStar;  // Adds a star to a Starrable.
}

export interface StarRepositoryMutationVariables {
  id: string;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UnstarRepositoryMutation
// ====================================================

export interface UnstarRepositoryMutation_removeStar_starrable {
  __typename: "Repository" | "Topic" | "Gist";
  id: string;
  viewerHasStarred: boolean;  // Returns a boolean indicating whether the viewing user has starred this starrable.
  stargazerCount: number;     // Returns a count of how many stargazers there are on this object
}

export interface UnstarRepositoryMutation_removeStar {
  __typename: "RemoveStarPayload";
  starrable: UnstarRepositoryMutation_removeStar_starrable | null;  // The starrable.
}

export interface UnstarRepositoryMutation {
  removeStar: UnstarRepositoryMutation_removeStar;  // Removes a star from a Starrable.
}

export interface UnstarRepositoryMutationVariables {
  id: string;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

//==============================================================
// END Enums and Input Objects
//==============================================================