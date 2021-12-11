import React from 'react'
import { View, Text, FlatList, Image, StyleSheet, useWindowDimensions } from 'react-native'

const ImageCarousel = ({images} : {images: string[]}) => {
    const windowWidth = useWindowDimensions().width;
    return (
        <View style={styles.root}>
            <FlatList
                data={images}
                renderItem={({item}) => (
                    <Image 
                        style={[styles.image, { width: windowWidth - 40}]} 
                        source={{ uri: item }} 
                    />
                )}
                // horizontal
                showsVerticalScrollIndicator={false}
                snapToInterval={windowWidth - 20}
                snapToAlignment={'center'}
                decelerationRate={'fast'}
            />
            <View style={styles.dots}>
                {images.map((image, index) => (
                <View
                    style={[
                    styles.dot,
                    {
                        
                    },
                    ]}
                />
                ))}
      </View>
        </View>
    )
}
const styles = StyleSheet.create({
    root: {

    },
    image: {
        margin: 10,
        height: 250,
        resizeMode: 'contain',
    },
    dots: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    dot: {
        width: 25,
        height: 25,
        borderRadius: 25,
        borderWidth: 1,
        backgroundColor: '#ededed',
        borderColor: '#c9c9c9',
        margin: 5,
    }
})

export default ImageCarousel
