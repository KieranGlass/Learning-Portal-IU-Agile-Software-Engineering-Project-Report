import React from 'react';

function ProfileCard({ image, name, role, bio, house }) {
  return (
    <div className="profile-card">
      <img src={image} alt={name} className="profile-image" />
      <h2>{name}</h2>
      <p>{role}</p>
      <p>{bio}</p>
      <p>{house}</p>
    </div>
  );
}

export default ProfileCard;