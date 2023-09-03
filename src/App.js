import React from 'react';
import './App.css';
import ProfileCard from './ProfileCard';

export default function App() {
  return (
    <>
      <ProfileCard person={{
        imageId: 'lrWQx8l',
        name: 'Subrahmanyan Chandrasekhar',
      }} />
      <ProfileCard person={{
        imageId: 'MK3eW3A',
        name: 'Creola Katherine Johnson',
      }} />
    </>
  )
}
