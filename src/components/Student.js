import React from 'react';
import StudentProfile from './StudentProfile';

function Student({ setShowProfile, setSelectedRole }) {
  React.useEffect(() => {
    setShowProfile(true);
    setSelectedRole('Student');
  }, []);

  return (
    <div>
      <StudentProfile />
    </div>
  );
}

export default Student;