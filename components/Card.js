// Card.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

const Card = ({ iconName, text, screenName }) => {
  const navigation = useNavigation();

  const handleCardClick = () => {
    // Navigate to the specified screen on card click
    navigation.navigate(screenName);
  };

  return (
    <TouchableOpacity onPress={handleCardClick} style={styles.cardContainer}>
      <Icon name={iconName} size={60} color="#007bff" />
      <Text style={styles.cardText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    margin: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#007bff',
    width: '45%', // Adjust the width based on your preference
  },
  cardText: {
    marginTop: 8,
    fontSize: 16,
    color: 'black',
    textAlign: 'center',
  },
});

export default Card;
