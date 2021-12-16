import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import CartProductItem from '../../components/CartProductItem';

import products from '../../data/cart';

const HomeScreen = () => {
  return (
    <View style={styles.page}>
      {/* Render Product Componet */}
      <FlatList
        data={products}
        renderItem={({item}) => <CartProductItem cartItem={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    padding: 10,
  },
});

export default HomeScreen;