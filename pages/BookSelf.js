import React, {useState} from 'react';
import {
    FlatList, RefreshControl,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity, View,
} from 'react-native';

const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item1',
    }, {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba1',
        title: 'First Item1',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f631',
        title: 'Second Item1',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d721',
        title: 'Third Item1',
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba2',
        title: 'First Item2',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f632',
        title: 'Second Item2',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d722',
        title: 'Third Item12',
    }, {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba12',
        title: 'First Item12',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f6312',
        title: 'Second Item12',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d7212',
        title: 'Third Item12',
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba23',
        title: 'First Item23',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f6323',
        title: 'Second Item23',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d7223',
        title: 'Third Item123',
    }, {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba123',
        title: 'First Item123',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63123',
        title: 'Second Item123',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72123',
        title: 'Third Item123',
    },
];

const tags = [
    {name: '全部', id: 0}, {name: '热血', id: 1}, {name: '冒险', id: 2},
    {name: '科幻', id: 4}, {name: '科幻', id: 5}, {name: '修真', id: 6}, {name: '穿越', id: 7},
    {name: '架空', id: 8}, {name: '竞技', id: 9}, {name: '历史', id: 10}, {name: '都市', id: 11}
]

const Header = () => (
    <View style={styles.tags}>
        {
            tags.map(e => <Text style={styles.tag} key={e.id} title={e.name}>{e.name}</Text>)
        }
    </View>
)
const Footer = () => (<Text style={styles.noData}>没有更多数据啦</Text>)

const Item = ({item, onPress, backgroundColor, textColor}) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
        <Text style={[styles.title, textColor]}>{item.title}</Text>
    </TouchableOpacity>
);

const BookSelf = () => {
    const [selectedId, setSelectedId] = useState(null);
    const [isRefreshing, setIsRefreshing] = useState(false)

    const [data,setData] = useState(DATA)
    const renderItem = ({item}) => {
        const backgroundColor = item.id === selectedId ? '#6e3b6e' : '#f9c2ff';
        const color = item.id === selectedId ? 'white' : 'black';

        return (
            <Item
                item={item}
                onPress={() => setSelectedId(item.id)}
                backgroundColor={{backgroundColor}}
                textColor={{color}}
            />
        );
    };
    const fetchData = () => {
        setTimeout(() => {
            setIsRefreshing(false)
            const res = [{
                id: '1',
                title: '这是我刷新的1',
            },{
                id: '2',
                title: '这是我刷新的2',
            },{
                id: '3',
                title: '这是我刷新的3',
            },{
                id: '4',
                title: '这是我刷新的4',
            },{
                id: '5',
                title: '这是我刷新的5',
            },{
                id: '6',
                title: '这是我刷新的6',
            }]
            setData(data.concat(res))
        }, 3000)
    }

    const handleRefresh = () => {
        setIsRefreshing(true)
        fetchData()
    }

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={data}
                numColumns={3}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                extraData={selectedId}
                ListHeaderComponent={() => <Header/>}
                ListFooterComponent={() => <Footer/>}
                //为刷新设置颜色
                refreshControl={
                    <RefreshControl
                        refreshing={isRefreshing}
                        onRefresh={handleRefresh}//因为涉及到this.state
                        colors={['#ff0000', '#00ff00', '#0000ff', '#3ad564']}
                        progressBackgroundColor="#ffffff"
                    />
                }
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'green',
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        height: 200,
        // width:'25%',
        flex: 1,
        padding: 20,
        marginVertical: 5,
        marginHorizontal: 5,
    },
    title: {
        fontSize: 22,
    },
    tags: {flexWrap: 'wrap', flexDirection: 'row', padding: 20},
    tag: {padding: 10, backgroundColor: '#eee', marginRight: 10, marginBottom: 10, fontSize: 14},
    scrollView: {flex: 1, backgroundColor: 'pink'},
    list: {flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'center', display: 'flex'},
    listItem: {flexGrow: 1.5},
    itemImage: {width: 80, height: 80, borderRadius: 10},
    itemTitle: {fontSize: 18, fontWeight: 'bold', textAlign: 'center'},
    itemDesc: {fontSize: 16, marginTop: 10, textAlign: 'center'},
    noData: {padding: 10, fontSize: 16, color: 'gray', textAlign: 'center'}
});

export default BookSelf;