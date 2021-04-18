import graphql, {GraphQLBoolean, GraphQLInt, GraphQLObjectType, GraphQLString, GraphQLID, GraphQLList} from 'graphql'


const userType: GraphQLObjectType<any, () => object> = new GraphQLObjectType(
{
    name: "UserType",
    fields: () => ({
        user_id: { type: GraphQLID },
        firstname: {type: GraphQLString },
        lastname: { type: GraphQLString },
        is_admin: { type: GraphQLBoolean },
    })
}
)

export default userType
