const { gql } = require('apollo-server');

module.exports = gql`
    type Validate {
        email: String
        password: String
    }

    input graphInput {
        email: String
        password: String
    }

    type Query {
        graph(ID: ID!):Validate !
        getGraph(count: Int): [Validate]
    }

    type Mutation {
        createGraph(graphInput: graphInput): Validate!
    }
`