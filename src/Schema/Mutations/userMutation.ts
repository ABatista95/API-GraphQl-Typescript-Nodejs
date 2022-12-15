import { GraphQLID, GraphQLString, GraphQLBoolean  } from 'graphql'
import { Users } from '../../Entities/userEntities'
import { UserType } from '../TypeDefs/userType'
import { ResolveMessage } from '../TypeDefs/ResolveMessage'
import bcrypt from 'bcryptjs'

export const CREATE_USER = {
    type: UserType,
    args: {
        userid: {type: GraphQLID},
        name: {type: GraphQLString},
        surnames: {type: GraphQLString},
        userrol: {type: GraphQLString},
        username: {type: GraphQLString},
        password: {type: GraphQLString},
        email: {type: GraphQLString},
        gender: {type: GraphQLString},
        imageurl: {type: GraphQLString},
        country: {type: GraphQLString},
        city: {type: GraphQLString},
        address: {type: GraphQLString},
        phonenumber: {type: GraphQLString}
    },
    async resolve(_parent: any, args: any) {
        try {
            const { userid, name, surnames, userrol, username, password, email, gender, imageurl, country, city, address, phonenumber } = args

            const encryptPassword = await bcrypt.hash(password, 10)

            console.log('Dato encrip: ', encryptPassword)

            const result = await Users.insert({
                user_id: userid,
                name: name,
                surnames: surnames,
                user_rol: userrol,
                username: username,
                password: encryptPassword,
                email: email,
                gender: gender,
                image_url: imageurl,
                country: country,
                city: city,
                address: address,
                phone_number: phonenumber
            })

            console.log(result, result.identifiers[0].user_id)

            return { ...args, user_id: result.identifiers[0].user_id, password: encryptPassword }

        } catch(error) {
            console.error(error);            
        }
    }
}

export const UPDATE_USER = {
    type: ResolveMessage,
    args: {
        userid: {type: GraphQLID},
        name: {type: GraphQLString},
        surnames: {type: GraphQLString},
        userrol: {type: GraphQLString},
        email: {type: GraphQLString},
        gender: {type: GraphQLString},
        imageurl: {type: GraphQLString},
        country: {type: GraphQLString},
        city: {type: GraphQLString},
        address: {type: GraphQLString},
        phonenumber: {type: GraphQLString},
        oldpassword: {type: GraphQLString}
    },
    async resolve(_parent: any, args: any){
        const { userid, name, surnames, userrol, email, gender, imageurl, country, city, address, phonenumber, oldpassword } = args

        try {
            
            const validateUser = await Users.findOneBy({user_id: userid})

            const isMatch = await bcrypt.compare(oldpassword, validateUser?.password || "")
            
            if(!isMatch) return {
                code: 401,
                error: 'User update failed.',
                message: "Olda Password invalid."
            } //Valida datos de password de User 

            return {
                code: 200,
                data: validateUser,
                message: "User update successfully"
            }

        } catch(error) {
            console.log(error);
        }
    }
}

export const UPDATE_USER_PASSWORD = {
    type: UserType,
    args: {
        userid: {type: GraphQLID},
        username: {type: GraphQLString},
        oldpassword: {type: GraphQLString},
        newpassword: {type: GraphQLString}
    },
    async resolve(_parent: any, args: any){
        const {user_id, username, oldpassword, newpassword } = args
    }
}

export const DELETE_USER = {
    type: GraphQLBoolean,
    args: {
        userid: {type: GraphQLID}
    },
    async resolve(_parent: any, {userid}: any){
        try {
            const result = await Users.delete(userid)
           
            if(result.affected === 1) return true
            
            return false //{user_id: 'User delete: '+ userid}

        } catch(error){
            console.error(error)
        }
    }
}
