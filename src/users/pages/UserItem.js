import React from 'react'

const UserItem = (props) => {
  return (
    <div className='container-fluid'>
            
      <div className='row'>
        <div className='col-3'>{props.user.id}</div>
        <div className='col-3'><img src={props.user.image} alt="userImage" width="50" height="50" className="img-responsive"/></div>
        <div className='col-2'>{props.user.name}</div>
        <div className='col-3'>{props.user.placeCount}</div>
      </div>
    </div>
  )
}

export default UserItem