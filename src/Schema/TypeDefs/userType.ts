import { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLInt } from 'graphql'

export const UserType = new GraphQLObjectType({
    name: "User",
    fields: () => ({
        user_id: {type: GraphQLID},
        name: {type: GraphQLString},
        surnames: {type: GraphQLString},
        user_rol: {type: GraphQLString},
        username: {type: GraphQLString},
        password: {type: GraphQLString},
        email: {type: GraphQLString},
        gender: {type: GraphQLString},
        imageurl: {type: GraphQLString},
        country: {type: GraphQLString},
        city: {type: GraphQLString},
        address: {type: GraphQLString},
        phone_number: {type: GraphQLString}
    })
}) 