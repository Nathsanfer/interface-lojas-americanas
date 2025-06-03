import React from 'react';
import { ScrollView, View, Text, StyleSheet, Image } from 'react-native';

const banners = [
    { img: 'https://www.americanas.com.br/_next/image?url=https%3A%2F%2Famericanas.vtexassets.com%2Fassets%2Fvtex.file-manager-graphql%2Fimages%2Fd7840e44-9964-4dff-a079-375e099be2e5___efbf8889f6baa1a68e83ebe6ccf5fbe2.png&w=1280&q=90' },
    { img: 'https://www.americanas.com.br/_next/image?url=https%3A%2F%2Famericanas.vtexassets.com%2Fassets%2Fvtex.file-manager-graphql%2Fimages%2Fe247234b-b52d-46b1-a98b-a88a322b4abb___f4cfe51baf498d6bc72f3a0f51d69b95.png&w=1280&q=90' },
    { img: 'https://www.americanas.com.br/_next/image?url=https%3A%2F%2Famericanas.vtexassets.com%2Fassets%2Fvtex.file-manager-graphql%2Fimages%2Fc30f9acd-57f6-4a22-a8e6-a16619814293___c5e9a394910662463c81ac8ab52072cb.png&w=1280&q=90' },
    { img: 'https://www.americanas.com.br/_next/image?url=https%3A%2F%2Famericanas.vtexassets.com%2Fassets%2Fvtex.file-manager-graphql%2Fimages%2F5aac766f-52b5-4d62-8325-20e4118b8ebe___6ecbb200221f814053c1fe61f2ba1c1b.png&w=1280&q=90' },
];

const BannerCard = () => {
    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scroll}>
            {banners.map((banner, idx) => (
                <View key={idx} style={styles.banner}>
                    <Image source={{ uri: banner.img }} style={styles.image} />
                </View>
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scroll: {
        marginVertical: 16,
        paddingLeft: 8,
      },
      banner: {
        backgroundColor: '#fff',
        borderRadius: 18,
        width: 260,
        height: 340,
        marginRight: 16,
        overflow: 'hidden',
        elevation: 3,
        shadowColor: '#000',
        shadowOpacity: 0.08,
        shadowRadius: 6,
        shadowOffset: { width: 0, height: 2 },
      },
      image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
      },
});

export default BannerCard;