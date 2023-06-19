import React, { useEffect, useMemo, useState } from 'react';
import { ActivityIndicator, FlatList, Keyboard, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Configstyle from "../config/styles";
import { ultraPositionHelper } from '../utils/ultraPositionHelper';
import { Joueur, ListeJoueursScreenProps } from '../interfaces/joueurs.interfaces';
import JoueurComponent from '../components/JoueurComponent';

const colors = Configstyle.PaletteColors;
const dim = Configstyle.dimension;
const CARD_HEIGHT = 120

const ListeJoueursScreen: React.FC<ListeJoueursScreenProps> = (props) => {
    const [listeJoeurs, setListeJoeurs] = useState<Joueur[]>([])
    const [search, setSearch] = useState("")
    const [isLoading, setIsLoading] = useState<boolean>(true)
    useEffect(() => {
        setIsLoading(true)

        fetch('https://api.mpg.football/api/data/championship-players-pool/1')
            .then(res => res.json())
            .then(result => {

                setListeJoeurs(result.poolPlayers);
                setIsLoading(false)

            })
            .catch(err => {
                console.log("catch err", err);
                setIsLoading(false);
            })
    }, [])
    const filteredData = useMemo(() => {
        return listeJoeurs?.filter(e => {
            const referenceString = ultraPositionHelper(e.ultraPosition);
            return e.lastName.toLowerCase().includes(search.toLowerCase()) || referenceString.toLowerCase().includes(search.toLowerCase())
        })
    }, [search, listeJoeurs])

    const ListHeaderComponent = () => {
        return (<View style={styles.listHeaderStyleView}>
            <Text style={styles.title}>{"Trouver votre joueur préféré"}</Text>
            <TextInput onChangeText={text => setSearch(text)}
                placeholder='Filtrer sur le nom et la position d’un joueur'
                style={styles.input}
                onSubmitEditing={Keyboard.dismiss}
                value={search}
            />
        </View>)
    }
    const ListEmptyComponent = () => (
        <View style={styles.emptyListStyle}>
            <Text style={styles.title}> Ce joueur ne fait pas parti de notre liste  </Text>
        </View>
    )
    return (
        <SafeAreaView style={styles.screen}>
            {isLoading === true ? <ActivityIndicator size={"large"} /> : <View >

                <FlatList
                    data={filteredData}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item, index }) => <JoueurComponent item={item} index={index} navigation={props.navigation} />}
                    initialNumToRender={20}
                    maxToRenderPerBatch={100}
                    ItemSeparatorComponent={() => <View style={{ marginVertical: dim.MS8 }} />}
                    getItemLayout={(item, index) => {
                        return { index, length: CARD_HEIGHT, offset: CARD_HEIGHT * index }
                    }}
                    ListHeaderComponent={ListHeaderComponent()}
                    ListHeaderComponentStyle={styles.headerFlatlist}
                    stickyHeaderIndices={[0]}
                    style={{ paddingHorizontal: dim.MS30 }}
                    ListEmptyComponent={() => ListEmptyComponent()}

                    />
            </View>}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: "#FFFFFF"
    },
    headerFlatlist: {
        backgroundColor: "#FFFFFF"
    },
    input: {
        height: dim.MS50,
        width: "100%",
        padding: dim.MS10,
        backgroundColor: `${colors.primary}10`,
        borderColor: `${colors.primary}80`,
        borderRadius: dim.MS50,
        borderWidth: dim.MS2

    },
    listHeaderStyleView: {
        paddingVertical: 20
    },
    title: {
        fontSize: dim.MS20,
        fontWeight: "600",
        color: colors.primary,
        paddingBottom: dim.MS10,
        textAlign: "center"

    },
    emptyListStyle: {
        flexGrow: 1,
        padding: dim.MS30
    }
});
export default ListeJoueursScreen