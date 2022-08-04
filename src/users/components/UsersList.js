import React from 'react'
import UserItem from './UserItem'

const UsersList = (props) => {
  if (props.users.length === 0) {
    return (<div className='center'>UsersList</div>)
  }

  return (<div className='row'>
    {props.users.map(user => <UserItem key={user.name} user={user}></UserItem>)}
  </div>)

}

export default UsersList