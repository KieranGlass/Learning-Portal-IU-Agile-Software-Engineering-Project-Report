import React from 'react';
import ProfileCard from './ProfileCard';

function ProfessorProfile() {
  const professorData = {
    image: 'path/to/professor.jpg',
    name: 'Jane Smith',
    role: 'Professor',
    bio: 'PhD in Computer Science with 10 years of teaching experience'
  };

  return (
    <ProfileCard {...professorData} />
  );
}

export default ProfessorProfile;