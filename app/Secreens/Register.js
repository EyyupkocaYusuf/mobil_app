import React, { useState } from 'react';
import { Alert, Button, Image, Pressable, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { FIREBASE_APP } from '../../firebaseConfig';

const logo = require("../../assets/logo.png");

// contact me :)
// instagram: must_ait6
// email : mustapha.aitigunaoun@gmail.com

const RegisterScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    // Firebase Auth'ı başlatma
    const auth = getAuth(FIREBASE_APP);

    // E-posta ve şifre ile kayıt işlemi
    const handleRegister = async () => {
        if (password !== confirmPassword) {
            alert('Şifreler eşleşmiyor!');
            return;
        }

        try {
            // Firebase Auth ile kullanıcı kaydı
            await createUserWithEmailAndPassword(auth, email, password);
            // Başarılı kayıt sonrası login ekranına yönlendirin
            navigation.navigate('Login');
        } catch (error) {
            console.error('Kayıt başarısız:', error);
            alert('Kayıt başarısız oldu. Lütfen e-posta ve şifrenizi kontrol edin.');
        }
    };

    // Giriş ekranına yönlendirme işlemi
    const handleNavigateToLogin = () => {
        navigation.navigate('Login'); // `LoginScreen`'e yönlendirin
    };

    return (
        <SafeAreaView style={styles.container}>
            <Image source={logo} style={styles.image} resizeMode='contain' />
            <Text style={styles.title}>Register</Text>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.input}
                    placeholder='EMAIL'
                    value={email}
                    onChangeText={setEmail}
                    autoCorrect={false}
                    autoCapitalize='none'
                />
                <TextInput
                    style={styles.input}
                    placeholder='PASSWORD'
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                    autoCorrect={false}
                    autoCapitalize='none'
                />
                <TextInput
                    style={styles.input}
                    placeholder='CONFIRM PASSWORD'
                    secureTextEntry
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                    autoCorrect={false}
                    autoCapitalize='none'
                />
            </View>
            <View style={styles.buttonView}>
                <Pressable style={styles.button} onPress={handleRegister}>
                    <Text style={styles.buttonText}>REGISTER</Text>
                </Pressable>
            </View>
            <Text style={styles.footerText}>
                Already have an account?<Text style={styles.login} onPress={handleNavigateToLogin}>  Login</Text>
            </Text>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        paddingTop: 70,
    },
    image: {
        height: 160,
        width: 170
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
        textTransform: "uppercase",
        textAlign: "center",
        paddingVertical: 40,
        color: "red"
    },
    inputView: {
        gap: 15,
        width: "100%",
        paddingHorizontal: 40,
        marginBottom: 5
    },
    input: {
        height: 50,
        paddingHorizontal: 20,
        borderColor: "red",
        borderWidth: 1,
        borderRadius: 7
    },
    buttonView: {
        width: "100%",
        paddingHorizontal: 50,
        marginTop: 20
    },
    button: {
        backgroundColor: "red",
        height: 45,
        borderColor: "gray",
        borderWidth: 1,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center"
    },
    buttonText: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold"
    },
    footerText: {
        textAlign: "center",
        color: "gray",
        marginTop: 20
    },
    login: {
        color: "red",
        fontSize: 13
    }
});

export default RegisterScreen;
