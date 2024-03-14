import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CandidateProfileForm from './CandidateProfileForm';
import Header from './Header';


const CandidateDashboard = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCandidateProfile = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:3001/api/candidates/:id', {
          headers: {
            Authorization: token,
          },
        });

        setProfile(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching candidate profile:', error);
        setProfile(null);
        setLoading(false);
      }
    };

    fetchCandidateProfile();
  }, []);

  const handleUpdateProfile = async (updatedProfile) => {
    try {
      const token = localStorage.getItem('token');
      await axios.put('http://localhost:3001/api/candidates/:id', updatedProfile, {
        headers: {
          Authorization: token,
        },
      });

      // Actualizar el estado local con el nuevo perfil
      setProfile(updatedProfile);
    } catch (error) {
      console.error('Error updating candidate profile:', error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!profile) {
    return <div>Candidate profile not found</div>;
  }

  return (
    <div>
      <Header/>
      <h1>Candidate Dashboard</h1>
      <h2>Your Profile</h2>
      <p>Name: {profile.name}</p>
      <p>Email: {profile.email}</p>
      {/* Agrega más detalles según la estructura de tu perfil de candidato */}

      <h2>Edit Profile</h2>
      {/* Componente o formulario para editar el perfil */}
      {/* Puedes utilizar un formulario, modal, o cualquier otro componente según tus necesidades */}
      <CandidateProfileForm profile={profile} onUpdateProfile={handleUpdateProfile} />
    </div>
  );
};

export default CandidateDashboard;
