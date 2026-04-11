import UserCard from "./userCard"

export default function UserList(){
    const users = [
        {name: "Nguyễn Dương Hoàng Nghi", email: "john.doe@example.com", avatar: "", phone: "123-456-7890"},
        {name: "Jane Smith", email: "jane.smith@example.com", avatar: "", phone: "098-765-4321"},
        {name: "John Doe", email: "john.doe@example.com", avatar: "", phone: "123-456-7890"},
        {name: "Jane Smith", email: "jane.smith@example.com", avatar: "", phone: "098-765-4321"},
        {name: "John Doe", email: "john.doe@example.com", avatar: "", phone: "123-456-7890"},
        {name: "Jane Smith", email: "jane.smith@example.com", avatar: "", phone: "098-765-4321"},
        {name: "John Doe", email: "john.doe@example.com", avatar: "", phone: "123-456-7890"},
        {name: "Jane Smith", email: "jane.smith@example.com", avatar: "", phone: "098-765-4321"}
    ]

    return (
        <div className="w-full px-4 py-16 sm:px-24 gap-4 flex flex-wrap">
            {users.map((user, index) => (
                <UserCard key={index} user={user} />
            ))}
        </div>
    )
}