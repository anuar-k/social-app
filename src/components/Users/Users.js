import React from "react";

const Users = ({users, follow, unfollow, setUsers}) => {
    if (users.length === 0) {
        setUsers([
            {
                id: 1,
                followed: false,
                fullName: 'Dmitriy',
                status: 'I am a boss',
                location: {city: 'Minsk', country: 'Belarus'}
            },
            {
                id: 2,
                followed: true,
                fullName: 'Sasha',
                status: 'I am a boss too',
                location: {city: 'Astana', country: 'Kazakhstan'}
            },
            {
                id: 3,
                followed: false,
                fullName: 'Sergei',
                status: 'I am a boss',
                location: {city: 'Kiev', country: 'Ukraine'}
            }
        ])
    }
    const usersList = users.map((user, index) => {
        return (
            <div key={index + Math.random() + 10}>
                <span>
                     <div>
                            <img
                                style={{"width": 40}}
                                src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUhbcBoGQfshS-wrsGVe8egbkz1Ba_aNyHCQ&usqp=CAU"}/>
                     </div>
                    <div>
                        {user.followed ? <button onClick={() => unfollow(user.id)}>unFollow</button> :
                            <button onClick={() => follow(user.id)}>follow</button>}
                    </div>
                </span>
                <span>
                                <div>{user.fullName}</div>
                                <div>{user.status}</div>
                        </span>

                <span>
                            <div>{user.location.city}</div>
                            <div>{user.location.country}</div>
                        </span>

            </div>
        )
    });
    return (
        <>
            {usersList}
        </>
    )
}

export default Users;