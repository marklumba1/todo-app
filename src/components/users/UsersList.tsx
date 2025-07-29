import { useQuery } from "@tanstack/react-query";
import { fetchUsers } from "../../features/users/api";
import type { User } from "../../features/users/interface";
import UserCard from "./UserCard";

const UserList: React.FC = () => {
  const { data, isLoading, isError, error } = useQuery<User[]>({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>{error.message}</p>;
  if (!data) return <p>No data found.</p>;
  return (
    <div>
      {data.map((data) => (
        <UserCard user={data} key={data.id} />
      ))}
    </div>
  );
};

export default UserList;
