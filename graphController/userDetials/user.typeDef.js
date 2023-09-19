const { gql } = require('apollo-server');

module.exports = gql`
    type Validate {
        firstName: String
        lastName: String
        email: String
        password: String
        phoneNumber:String
        countryCode:String
        country:String
        weightInKg:Int
        heightInfeet:Int
        heightInInches:Int
    }

    input graphInput {
        firstName: String
        lastName: String
        email: String
        password: String
        phoneNumber:String
        countryCode:String
        country:String
        weightInKg:Int
        heightInfeet:Int
        heightInInches:Int
    }

    type Query {
        graph(ID: ID!):Validate !
        getGraph(count: Int): [Validate]
    }

    type Mutation {
        createGraph(graphInput: graphInput): Validate!
        deleteGraph(ID: ID!): Boolean
        editGraph(ID: ID!, editInput: graphInput): Boolean
    }
`