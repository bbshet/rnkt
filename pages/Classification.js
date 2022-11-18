import React from 'react';
import {SafeAreaView, View, VirtualizedList, StyleSheet, Text, StatusBar, Image} from 'react-native';

const DATA = [];
const tags = [
    {name: '全部', id: 0}, {name: '热血', id: 1}, {name: '冒险', id: 2},
    {name: '科幻', id: 4}, {name: '科幻', id: 5}, {name: '修真', id: 6}, {name: '穿越', id: 7},
    {name: '架空', id: 8}, {name: '竞技', id: 9}, {name: '历史', id: 10}, {name: '都市', id: 11}
]
const getItem = (data, index) => ({
    id: Math.random().toString(12).substring(0),
    title: `Item ${index + 1}`,
});

const getItemCount = () => 50;

const Item = ({ title }) => (
    <View style={styles.item}>
        <Image style={styles.itemImage} source={require('../assets/favicon.png')} />
        <Text style={styles.title}>{title}</Text>
    </View>
);
const Header = () => (
    <View style={styles.tags}>
        {
            tags.map(e => <Text style={styles.tag} key={e.id} title={e.name}>{e.name}</Text>)
        }
    </View>
)
const Footer = ()=>(<Text style={styles.noData}>没有更多数据啦</Text>)

const onRefresh = ()=>{
    return true;
}

const Classification = () => {
    return (
        <SafeAreaView style={styles.container}>
            <VirtualizedList
                data={DATA}
                initialNumToRender={4}
                numColumns
                renderItem={({ item }) => <Item title={item.title} />}
                keyExtractor={item => item.id}
                ListHeaderComponent={()=> <Header />}
                ListFooterComponent={()=> <Footer />}
                getItemCount={getItemCount}
                getItem={getItem}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight,
        // flexWrap:'wrap',
        // flexDirection:'row'
    },
    item: {
        backgroundColor: '#f9c2ff',
        height: 150,
        justifyContent: 'center',
        marginVertical: 8,
        marginHorizontal: 16,
        padding: 20,
        width:150
    },
    title: {
        fontSize: 32,
    },
    tags: {flexWrap: 'wrap', flexDirection: 'row'},
    tag: {padding: 10, backgroundColor: '#eee', marginRight: 10, marginBottom: 10, fontSize: 14},
    scrollView: {flex: 1, backgroundColor: 'pink'},
    list: {flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'center', display: 'flex'},
    listItem: {flexGrow: 1.5},
    itemImage: {width: 80, height: 80, borderRadius: 10},
    itemTitle: {fontSize: 18, fontWeight: 'bold', textAlign: 'center'},
    itemDesc: {fontSize: 16, marginTop: 10, textAlign: 'center'},
    noData:{padding:10,fontSize:16,color :'gray',textAlign:'center'}
});

export default Classification;