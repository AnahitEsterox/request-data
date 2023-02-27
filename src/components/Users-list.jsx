import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

const UsersList = () => {
    const [users, setUsers] = useState()

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(function (response) {
                // handle success
                setUsers(response.data)
                // console.log(response);
            });
    }, [])

    useEffect(() => {
        console.log(users)
    }, [users])


    return (
        <div className="user-container">
            {users?.map(({id, name}) => (
                <div className="user-box" key={id}>
                    <div>
                        <p>{name}</p>
                    </div>
                    <Link to={`/users/${id}`} className="btn">
                        more
                    </Link>

                </div>
            ))}
        </div>
    );
}

export default UsersList