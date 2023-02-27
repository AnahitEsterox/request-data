import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link, useParams} from "react-router-dom";

const User = () => {
    const [user, setUser] = useState(null)
    let { id } = useParams();

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(function (response) {
                // handle success
                setUser(response.data)
                // console.log(response);
            });
    }, [])
    console.log(user)

    return(
        <div className="user-data">
            <Link to={`/`} className="gg-arrow-left-r ">

            </Link>
            {user && (
                <>
                    <p className="user-name">{user.name}</p>
                    <p className="user-info-item"><strong className="field-item">Username:</strong> {user.username}</p>
                    <p className="user-info-item"><strong className="field-item">E-mail:</strong> {user.email}</p>
                    <p className="user-info-item"><strong className="field-item">Phone number:</strong> {user.phone}</p>
                    <p className="user-info-item"><strong className="field-item">Website:</strong> {user.website}</p>


                </>)
            }
        </div>
    )
}

export default User