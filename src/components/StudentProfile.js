import React from 'react';
import ProfileCard from './ProfileCard';

function StudentProfile() {
  const studentData = {
    image: 'public/logo192.png',
    name: 'John Doe',
    role: 'Student',
    bio: 'First year computer science major'
  };

  return (
    <ProfileCard {...studentData} />
  );
}

export default StudentProfile;