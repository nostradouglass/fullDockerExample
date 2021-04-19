import { useQuery } from '@apollo/client'
import { FETCH_USERS } from '../queries/fetch_users'


const ListUsers = ({showUsers}) => {
    

    const { loading, error, data } = useQuery(FETCH_USERS)

    if (showUsers) {
    
        if (loading) { 
            return <div>Loading</div>
        } else {
            return data.users.map((user: any) => {
                return <li key={user.user_id}>{user.firstname} {user.lastname}</li>
            })
        }


    } else {
        return <div></div>
    }
}

export default ListUsers