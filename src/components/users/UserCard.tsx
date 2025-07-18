import type { User } from "../../features/users/interface"

interface UserCardProps{
    user: User
}
const UserCard: React.FC<UserCardProps> = ({user}) => {
return <div>{user.name}</div>
}

export default UserCard