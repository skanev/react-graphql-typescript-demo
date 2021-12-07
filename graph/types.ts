

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetRepository
// ====================================================

export interface GetRepository_repository_primaryLanguage {
  __typename: "Language";
  id: string;
  name: string;  // The name of the current language.
}

export interface GetRepository_repository_licenseInfo {
  __typename: "License";
  name: string;  // The license full name specified by <https:
}

export interface GetRepository_repository_repositoryTopics_nodes_topic {
  __typename: "Topic";
  name: string;  // The topic's name.
}

export interface GetRepository_repository_repositoryTopics_nodes {
  __typename: "RepositoryTopic";
  topic: GetRepository_repository_repositoryTopics_nodes_topic;  // The topic.
}

export interface GetRepository_repository_repositoryTopics {
  __typename: "RepositoryTopicConnection";
  nodes: (GetRepository_repository_repositoryTopics_nodes)[];  // A list of nodes.
}

export interface GetRepository_repository {
  __typename: "Repository";
  id: string;
  name: string;                                                      // The name of the repository.
  homepageUrl: any | null;                                           // The repository's URL.
  stargazerCount: number;                                            // Returns a count of how many stargazers there are on this object
  description: string | null;                                        // The description of the repository.
  viewerHasStarred: boolean;                                         // Returns a boolean indicating whether the viewing user has starred this starrable.
  primaryLanguage: GetRepository_repository_primaryLanguage | null;  // The primary language of the repository's code.
  licenseInfo: GetRepository_repository_licenseInfo | null;          // The license associated with the repository
  repositoryTopics: GetRepository_repository_repositoryTopics;       // A list of applied repository-topic associations for this repository.
}

export interface GetRepository {
  repository: GetRepository_repository;  // Lookup a given repository by the owner and repository name.
}

export interface GetRepositoryVariables {
  login: string;
  name: string;
}


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