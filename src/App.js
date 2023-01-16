import React from 'react';
import UserCard from './components/UserCard';
import { useState } from 'react';
import axios from 'axios';

const user = {
  gender: 'male',
  name: {
    first: 'Charlie',
    last: 'Thompson',
  },
  location: {
    street: {
      number: 761,
      name: 'Tay Street',
    },
    city: 'Timaru',
    postcode: 76111,
  },
  email: 'charlie.thompson@example.com',
  picture: {
    medium: 'https://randomuser.me/api/portraits/med/men/40.jpg',
  },
};

function App() {
  const [rUser, setUser] = useState(user);
  const getUser = () => {
    axios
      .get('https://randomuser.me/api?nat=en')
      .then((response) => response.data)
      .then((data) => {
        console.log(data);
        console.log(data.results[0].name.first);
        setUser(data.results[0]);
      });
  };
  return (
    <div className="App">
      <UserCard
        firstname={rUser.name.first}
        lastname={rUser.lastname}
        image={rUser.picture.medium}
        email={rUser.email}
      />
      <button type="button" onClick={getUser}>
        Get User
      </button>
    </div>
  );
}
export default App;
