import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getUsers, removeUsersLocal } from '../store/postMiddleware';

function UsersList() {
    const dispatch = useDispatch()
const {user} = useSelector((store) => store)
console.log(user);

function addUserHandler () {
  dispatch(getUsers())
}

useEffect(()=> {

},[])

function removeHandler (itemId) {
dispatch(removeUsersLocal(itemId))
}
  return (
    <div>
        <button onClick={addUserHandler}>ADD USER</button>
        {user.map((item) => <div key={item.id} style={{color: 'red'}}>
           <div style={{bacgrounColor:'white'}}>
           <li>{item.name}</li><br />
            <li>{item.username}</li>
           </div>
            <button onClick={() => removeHandler(item.id)}>DELETE USER</button>
        </div>)}
    </div>
  )
}

export default UsersList