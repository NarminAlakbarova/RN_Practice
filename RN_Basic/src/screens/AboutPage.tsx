import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Card from '../components/Card';

export default function AboutPage() {
  return (
    <ScrollView>
      <Card
        title={'Angular lessons'}
        image={require('../../assets/angular.png')}
        desc={'Angular dersleri'}
      />
      <Card
        title={'React lessons'}
        image={require('../../assets/react.png')}
        desc={'React dersleri'}
      />
      <Card
        title={'Bootstrap lessons'}
        image={require('../../assets/bootstrap.jpeg')}
        desc={'Bootstrap dersleri'}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
