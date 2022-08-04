import React from 'react';
import { Link } from 'react-router-dom';

const UserItem = (props) => {
  return (
      <div className='col-3 hover'>
        <div className='center brown-large'>{props.user.id}</div>
        <div className='center'><img src={props.user.image} alt="userImage" width="100" height="100" style={{borderRadius : '50%'}} className="img-responsive"/></div>
        <Link to={`/props.id/places`}>     <div className='center blue-x-large'>{props.user.name}</div></Link>
        <div className='center brown-large'>{props.user.placeCount}</div>
      </div>
  )
}

export default UserItem