import React from 'react'
import UserItem from './UserItem'

const UsersList = (props) => {
  if (props.users.length === 0) {
    return (<div className='center'>UsersList</div>)
  }

  return (<>
    <div className='row'>
      <div className='col-3'><h3>Id</h3></div>
      <div className='col-3'><h3>Photo</h3></div>
      <div className='col-3'><h3>Name</h3></div>
      <div className='col-3'><h3>Companies Switched</h3></div>
    </div>
    <ul>{props.users.map(user => <UserItem key={user.name} user={user}></UserItem>)}</ul>
  </>)

}

export default UsersList