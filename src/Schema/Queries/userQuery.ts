import { GraphQLString, GraphQLList, GraphQLID } from 'graphql'
import { UserType } from '../TypeDefs/userType'
import { Users } from '../../Entities/userEntities'

const UserTypeList = new GraphQLList(UserType)

export const GET_ALL_USERS = {
    type: UserTypeList,
    async resolve() {
        try {
            const result = await Users.find()
            return result
        } catch(error) {
            console.log(error)
        }
    } 
}

export const GET_USER_ID = {
    type: UserType,
    args: {
        user_id: {type: GraphQLID}
    },
    async resolve(_parent: any, {userid}: any){
        try {
            const result = await Users.findBy({user_id: userid})
            console.log(result)
            return {...result[0]}
        } catch(error) {
            console.error('Server MySql:: ' +error)
        }
        
    }
}