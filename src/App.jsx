import { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Homepage from './pages/Homepage';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Profile from './pages/Profile';
import Scholarships from './pages/Scholarships';
import ScholarshipDetails from './pages/UniversitiesDetails';
import Universities from './pages/Universities';
import MyApplications from './pages/MyApplications';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {

const [user, setUser] = useState(null);

useEffect(() => {

const token = localStorage.getItem('token');

if (token) {

try {

const userInfo = JSON.parse(
  atob(token.split('.')[1])
).payload;

setUser(userInfo);
} catch (err) {

localStorage.removeItem('token');
setUser(null);

}

}

}, []);

return (
<div>

<Navbar user={user} setUser={setUser} />

<Routes>

<Route path='/' element={<Homepage />} />

<Route
path='/sign-up'
element={!user ? <SignUp /> : <Navigate to='/' />}
/>
<Route
path='/sign-in'
element={!user ? <SignIn setUser={setUser} /> : <Navigate to='/' />}
/>

<Route
path='/profile'
element={user ? <Profile user={user} /> : <Navigate to='/sign-in' />}
/>

<Route
path='/scholarships'
element={<Scholarships />}
/>

<Route
path='/scholarship/:id'
element={<ScholarshipDetails user={user} />}
/>

<Route
path='/universities'
element={<Universities />}
/>
<Route
path='/my-applications'
element={user ? <MyApplications user={user} /> : <Navigate to='/sign-in' />}
/>

</Routes>

</div>
);
}

export default App;