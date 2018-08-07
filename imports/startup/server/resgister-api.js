import { createApolloServer } from 'meteor/apollo';
import { makeExecutableSchema } from 'graphql-tools';

import ResolutionsSchema from '../../api/resolutions/Resolutions.graphql';

const testSchema = `
type Query {
    hi: String,
    resolutions: [Resolution]
}
`;

const typeDefs = [
    testSchema,
    ResolutionsSchema
];

const resolvers = {
    Query: {
        hi() {
            return 'Hello GraphQL';
        },
        resolutions() {
            return [
                {
                    _id: "adsfsfa",
                    name: "Get stuff done!"
                },
                {
                    _id: "aaaaa",
                    name: "Hello~~!"
                },
            ]
        }
    }
}

const schema = makeExecutableSchema({
    typeDefs,
    resolvers
})

createApolloServer({ schema });