import { GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLBoolean } from "graphql"
import { UserType } from './userType'

export const ResolveMessage = new GraphQLObjectType({
    name: "ResolveMessage",
    fields: {
        code: {type: GraphQLInt},
        data: {type: UserType},
        error: {type: GraphQLString},
        message: {type: GraphQLString}
    }
})