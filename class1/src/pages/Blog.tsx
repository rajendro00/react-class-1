const users = [
  { id: 1, name: "Rahim", age: 20 },
  { id: 2, name: "Karim", age: 25 },
  { id: 3, name: "Hasan", age: 30 },
];

function Blog(){
    return(
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                </tr>
            </thead>
            <tbody>
                {users.map(user => (
                    <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.age}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default Blog;