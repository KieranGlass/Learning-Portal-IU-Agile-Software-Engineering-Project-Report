import React from 'react';
import ProfileCard from './ProfileCard';

function StudentProfile() {
  const studentData = {
    image: 'Ron.jpg',
    name: 'Ronald Weasley',
    role: 'Student',
    bio: 'Second Year Student',
    house: 'Gryffindor'
  };

  return (
    <ProfileCard {...studentData} />
  );
}

export default StudentProfile;