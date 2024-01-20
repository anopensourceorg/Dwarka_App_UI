// Card.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

const Card = ({ iconName, text, screenName,fullWidth=false }) => {
  const navigation = useNavigation();

  const handleCardClick = () => {
    navigation.navigate(screenName);
  };

  return (
    <TouchableOpacity onPress={handleCardClick} style={{...styles.cardContainer,width:fullWidth?"95%":"45%"}}>
      <Icon name={iconName} size={60} color="#000000" />
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
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#AAAAAA',
    borderBottomWidth: 6,
    width: '45%', 
  },
  cardText: {
    marginTop: 8,
    fontSize: 16,
    color: 'black',
    textAlign: 'center',
    fontFamily: "Poppins"
  },
});

export default Card;
