import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';

const Profile = ({ route }) => {
  const [profileData, setProfileData] = useState({
    username: '',
    email: '',
    birthdate: '',
    phone: '',
    // Add more fields as necessary
  });

  useEffect(() => {
    // Simulating fetching data
    const fetchedProfileData = {
      username: 'Berat',
      email: 'Berat@example.com',
      birthdate: '01/01/2002',
      phone: '123-456-7890',
      // Add more fields as necessary
    };

    setProfileData(fetchedProfileData);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Profil</Text>
        <ProfileDetail label="Kullanıcı Adı" value={profileData.username} />
        <ProfileDetail label="E-posta" value={profileData.email} />
        <ProfileDetail label="Doğum Tarihi" value={profileData.birthdate} />
        <ProfileDetail label="Telefon" value={profileData.phone} />
        {/* Add more ProfileDetail components for additional fields */}
      </ScrollView>
    </SafeAreaView>
  );
};

const ProfileDetail = ({ label, value }) => (
  <View style={styles.profileInfo}>
    <Text style={styles.label}>{label}:</Text>
    <Text style={styles.value}>{value}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  profileInfo: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 15,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  value: {
    fontSize: 16,
  },
});

export default Profile;
