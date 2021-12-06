import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import styles from './styles';
import product from '../../data/product';
import QuantitySelector from '../../components/QuantitySelector';


const ProductScreen = () => {
  const [selectedOption, setSelectedOption] = useState(product.options ? product.options[0] : null);
  const [quantity, setQuantity] = useState(1);

  console.log(selectedOption);
    return (
        <View>
          {/* { Title } */}
          <Text style={styles.title}>{product.title}</Text>
          {/* { Image caroursel } */}
          {/* { Option selector } */}
          {/* <Picker
            selectedValue={selectedOption}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedOption(itemValue)
            }
          >
            {product.options.map(option => (<Picker.Item label={option} value={option}/>))}
          </Picker> */}
          {/* { Price } */}
          <Text style={styles.price}>{product.price}</Text>
          {/* { Description } */}
          <Text style={styles.description}>{product.description}</Text>
          {/* { Quantity Selector } */}
          <QuantitySelector quantity={quantity} setQuantity={setQuantity}/>
          {/* { Buttons } */}
          
        </View>
    );
};
export default ProductScreen;
