#!/usr/bin/env zsh
apollo-codegen generate '{pages,components,hooks}/**/*.{ts,tsx,graphql}' --schema schema.json --add-typename --target typescript --output graph/types.ts
cat graph/types.ts | perl -npe '/nodes|addStar:|removeStar:|repository:|organization:/ && s/ \| null//g' > graph/types2.ts
mv graph/types2.ts graph/types.ts
