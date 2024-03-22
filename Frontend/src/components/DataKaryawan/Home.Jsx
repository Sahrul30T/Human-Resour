import react from "react";
import { useSelector } from 'react-redux'
import {Link, useNavigate} from 'react-router-dom'
import { deleteUser } from "./UserRedux";


function Home() {
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();

    const hadleDelete = (id) =>{
            dispatch(deleteUser({id: id}))
    }
  return (
    <div className="container">
        <h2>CRUT App whit JSON Server</h2>
        <link to="/create" className="" >Create</link>
        <table>
            <thead>
                <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {user.map((user, index) => (
                    <tr key={index}>
                        <td>{user.id}</td>
                        <td>{user.Name}</td>
                        <td>{user.Email}</td>
                        <td>
                            <link to={`/edit/${user.id}`} className="">Edit</link>
                            <button onClick={() => hadleDelete(user.id)} className="">Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>

    </div>
  )
}
export default Home