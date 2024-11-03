import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator, StyleSheet } from 'react-native';
import PlaceItem from './PlaceItem';
import PlaceItemBig from './PlaceItemBig';
import { useNavigation } from '@react-navigation/native';
import api from '../../Services/GlobalApi';

export default function PlaceList() {
    const [placeList, setPlaceList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const navigation = useNavigation();

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await api.nearByPlace(40.7128, -74.0060, 'restaurant');
            setPlaceList(response.data.results);
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const onPlaceClick = (item) => {
        navigation.navigate('place-detail', { place: item });
    };

    const keyExtractor = (item) => item.place_id.toString();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                {isLoading ? 'Loading...' : `${placeList.length} places found`}
            </Text>

            {isLoading ? (
                <ActivityIndicator size="large" color="#0000ff" />
            ) : (
                <FlatList
                    data={placeList}
                    keyExtractor={keyExtractor}
                    renderItem={({ item, index }) => (
                        <TouchableOpacity onPress={() => onPlaceClick(item)} style={styles.touchable}>
                            {index % 4 === 0 ? (
                                <PlaceItemBig place={item} />
                            ) : (
                                <PlaceItem place={item} />
                            )}
                        </TouchableOpacity>
                    )}
                />
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#f5f5f5',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 16,
        textAlign: 'center',
    },
    touchable: {
        marginBottom: 16,
    },
});
