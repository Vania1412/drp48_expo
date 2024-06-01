import React from 'react';
import { Text, StyleSheet, Image, TouchableOpacity, View, ScrollView } from 'react-native';
import { Colors } from '../config';

// Replace the following path with the actual path where you store your profile picture
const profilePic = require('../assets/flame.png');

export const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.header}>Trip To Italy</Text>
          <Text style={styles.subHeader}>23 users saving for this goal</Text>
          <Text style={styles.subHeader}>64 users achieved this goal</Text>
          <Text style={styles.subHeader}>Users expected to achieve within a similar timeframe as you:</Text>
        </View>

        <View style={styles.profileContainer}>
          <View style={styles.profile}>
            <Text style={styles.profileName}>George</Text>
            <Image source={profilePic} style={styles.profilePic} />
            <TouchableOpacity style={styles.followButton}>
              <Text style={styles.buttonText}>Follow</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.profile}>
            <Text style={styles.profileName}>Ivy</Text>
            <Image source={profilePic} style={styles.profilePic} />
            <TouchableOpacity style={styles.followButton}>
              <Text style={styles.buttonText}>Follow</Text>
            </TouchableOpacity>
          </View>
        </View>

        <Text style={styles.header}>Featured Stories & Tips</Text>
        <View style={styles.profileTip}>
          <Image source={profilePic} style={styles.profilePicTip} />
          <Text style={styles.profileNameTip}>Tim</Text>
        </View>
        <Text style={styles.subHeader}>
          Buy round-trip tickets as soon as you know the starting date of your trip. Always keep track of the ticket price!
        </Text>
        <View style={styles.profileTip}>
          <Image source={profilePic} style={styles.profilePicTip} />
          <Text style={styles.profileNameTip}>Olivia</Text>
        </View>
        <Text style={styles.subHeader}>
          If you are going to Firenze, try Trattoria Dall'oste!! It's so delicious, definitely worth the price.
        </Text>
        <Text style={styles.link}>Read More Stories & Tips</Text>

        <Text style={styles.header}>Memory Collection</Text>
        <View>
          <Text style={styles.subHeader}>John</Text>
          <Text style={styles.subHeader}>Freya</Text>
          <Text style={styles.subHeader}>Isabella</Text>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Expo Firebase Starter App</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingHorizontal: 12,
  },
  scrollViewContainer: {
    paddingVertical: 20,
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  subHeader: {
    fontSize: 16,
    marginVertical: 5,
  },
  profileContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  profile: {
    alignItems: 'center',
  },
  profileName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  profilePic: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginVertical: 5,
  },
  followButton: {
    backgroundColor: Colors.orange,
    padding: 5,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 16,
    color: Colors.white,
  },
  profileTip: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  profilePicTip: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  profileNameTip: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  link: {
    color: 'blue',
    textDecorationLine: 'underline',
    marginVertical: 5,
  },
  footer: {
    backgroundColor: Colors.white,
    paddingHorizontal: 12,
    paddingBottom: 48,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 14,
    fontWeight: '700',
    color: Colors.orange,
  },
});

export default LoginScreen;
