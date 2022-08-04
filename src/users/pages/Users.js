import {React, useState }from 'react';
import UsersList from '../components/UsersList';

const Users = () => {
    
  const [users, setUser] = useState([{ id: '11111', image:'https://picsum.photos/200/300?random=1', name: 'Harman Singh', placeCount: 3 },
  { id: '11112', image:'https://picsum.photos/200/300?random=2', name: 'Vishal Kumar', placeCount: 2  },
  { id: '11113', image:'https://picsum.photos/200/300?random=3', name: 'Sarthak Bansal', placeCount: 2  },
  { id: '11114', image:'https://picsum.photos/200/300?random=4', name: 'Sujay Das', placeCount: 3  }
  ]);
  return (
    <UsersList users={users}/>
  )
}

export default Users