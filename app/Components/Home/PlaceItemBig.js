import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Colors from '../../Shared/Colors';

const PlaceItemBig = ({ place }) => {
    const [userRating, setUserRating] = useState(null);

    const handleStarPress = (rating) => {
        setUserRating(rating);
    };

    const openImageLink = () => {
        if (place.imageUrl) {
            Linking.openURL(place.imageUrl).catch((err) =>
                console.error('Failed to open link:', err)
            );
        }
    };

    return (
        <View style={styles.itemContainer}>
            <TouchableOpacity onPress={openImageLink}>
                <Image
                    source={{ uri: place.imageUrl || 'https://via.placeholder.com/200' }}
                    style={styles.image}
                />
            </TouchableOpacity>
            <View style={styles.textContainer}>
                <Text style={styles.name}>{place.name}</Text>
                <Text style={styles.rating}>Rating: {place.rating || 'Unknown'}</Text>
                <View style={styles.userRatingContainer}>
                    {Array.from({ length: 5 }, (_, index) => (
                        <TouchableOpacity key={index} onPress={() => handleStarPress(index + 1)}>
                            <AntDesign 
                                name="star" 
                                size={20} 
                                color={index < userRating ? Colors.YELLOW : Colors.GRAY} 
                            />
                        </TouchableOpacity>
                    ))}
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: 'column',
        marginVertical: 8,
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 4,
        shadowOffset: { width: 0, height: 2 },
        elevation: 2,
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 8,
    },
    textContainer: {
        paddingTop: 10,
        justifyContent: 'center',
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    rating: {
        marginTop: 4,
        color: '#888',
    },
    userRatingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },
});

export default PlaceItemBig;
