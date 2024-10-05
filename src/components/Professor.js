import React from 'react';
import ProfessorProfile from './ProfessorProfile'; // Create this component similar to StudentProfile

function Professor({ setShowProfile, setSelectedRole }) {
  React.useEffect(() => {
    setShowProfile(true);
    setSelectedRole('Professor');
  }, []);

  return (
    <div>
      <ProfessorProfile />
    </div>
  );
}

export default Professor;