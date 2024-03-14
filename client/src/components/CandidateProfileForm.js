import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EditProfileForm from './EditProfileForm';
import Header from './Header';


const CandidateProfileForm = () => {
  const [profileData, setProfileData] = useState({
    name: '',
    email: '',
    skills: [],
  });
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);

  const candidateId = 1;

  useEffect(() => {
    const fetchCandidateProfile = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/api/candidates/${candidateId}`);
        setProfileData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching candidate profile:', error);
        setLoading(false);
      }
    };

    fetchCandidateProfile();
  }, [candidateId]);

  const handleEditProfile = () => {
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
  };

  const handleSaveProfile = async (updatedProfile) => {
    // Lógica para guardar el perfil actualizado en el servidor
    console.log('Saving updated profile:', updatedProfile);

    // Luego, puedes actualizar el estado y finalizar la edición
    setProfileData(updatedProfile);
    setIsEditing(false);
  };

  return (
    <div>
            <Header/>
      <h2>Candidate Profile</h2>
      {loading ? (
        <p>Loading profile...</p>
      ) : (
        <>
          {isEditing ? (
            <EditProfileForm
              profileData={profileData}
              onCancelEdit={handleCancelEdit}
              onSaveProfile={handleSaveProfile}
            />
          ) : (
            <>
              <p>Name: {profileData.name}</p>
              <p>Email: {profileData.email}</p>
              <p>Skills: {profileData.skills.join(', ')}</p>
              <button onClick={handleEditProfile}>Edit Profile</button>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default CandidateProfileForm;
