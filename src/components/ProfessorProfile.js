import React from 'react';
import ProfileCard from './ProfileCard';

function ProfessorProfile() {
  const professorData = {
    image: '/snape.jpg',
    name: 'Severus Snape',
    role: 'Professor, Head of House',
    bio: 'Potions Master',
    house: 'Slytherin'
  };

  return (
    <ProfileCard {...professorData} />
  );
}

export default ProfessorProfile;