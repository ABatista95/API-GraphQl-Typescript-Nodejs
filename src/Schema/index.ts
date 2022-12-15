import { GraphQLSchema, GraphQLObjectType } from 'graphql'

/* Import Querys */
import { GET_ALL_USERS, GET_USER_ID } from './Queries/userQuery'

/* Import Mutations */
import { CREATE_USER, UPDATE_USER, DELETE_USER } from './Mutations/userMutation'

const RootQuery = new GraphQLObjectType({
    name: 'RootQuery',
    fields: {
        getAllUsers: GET_ALL_USERS,
        getUserId: GET_USER_ID
    }
})

const Mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        createUser: CREATE_USER,
        deleteUser: DELETE_USER,
        updateUser: UPDATE_USER
    },
});

/* Export Schema */
export const schema = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation,
})
