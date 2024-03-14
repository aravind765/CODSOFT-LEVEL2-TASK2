import React, { useState } from 'react';

const EditProfileForm = ({ profileData, onCancelEdit, onSaveProfile }) => {
  const [updatedProfile, setUpdatedProfile] = useState({
    name: profileData.name,
    email: profileData.email,
    skills: profileData.skills.join(', '),  // Convertimos las habilidades en una cadena
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  const handleSave = () => {
    // Aquí podrías realizar validaciones y luego guardar el perfil actualizado
    const updatedSkills = updatedProfile.skills.split(',').map((skill) => skill.trim());

    const updatedProfileData = {
      ...updatedProfile,
      skills: updatedSkills,
    };

    onSaveProfile(updatedProfileData);
  };

  return (
    <div>
      <h3>Edit Profile</h3>
      <label>
        Name:
        <input type="text" name="name" value={updatedProfile.name} onChange={handleInputChange} />
      </label>
      <br />
      <label>
        Email:
        <input type="text" name="email" value={updatedProfile.email} onChange={handleInputChange} />
      </label>
      <br />
      <label>
        Skills:
        <input type="text" name="skills" value={updatedProfile.skills} onChange={handleInputChange} />
      </label>
      <br />
      <button onClick={handleSave}>Save</button>
      <button onClick={onCancelEdit}>Cancel</button>
    </div>
  );
};

export default EditProfileForm;
