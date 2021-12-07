source .env.local
yarn run apollo-codegen introspect-schema --header="Authorization: Bearer $NEXT_PUBLIC_GRAPHQL_KEY" --output schema.json https://api.github.com/graphql
