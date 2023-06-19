import React, { useContext, useEffect, useState } from 'react';
import { ActivityIndicator, Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Configstyle from "../config/styles";
import { ClubsContext } from '../reactContext/ListClubContext';
import StatsInfo from '../components/StatsInfo';
import { ultraPositionHelper } from '../utils/ultraPositionHelper';
import { ClubContextInterface } from '../interfaces/clubs.interfaces';
import { DetailJoueurScreenProps, Joueur, PlayerStats } from '../interfaces/joueurs.interfaces';

const colors = Configstyle.PaletteColors;
const dim = Configstyle.dimension;


const defaultPlayerStats: PlayerStats = { championships: {} };
const defaultJoueur: Joueur = {
    firstName: "",
    lastName: "",
    ultraPosition: 0,
    stats: {
        totalGoals: 0,
        totalMatches: 0,
        averageRating: 0
    },
    id: "",
    clubId: "",
};
const DetailJoueurScreen: React.FC<DetailJoueurScreenProps> = (props) => {
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [joeurStats, setJoueurStats] = useState<PlayerStats>(defaultPlayerStats)
    const [joeurDetails, setJoueurDetails] = useState<Joueur>(defaultJoueur)
    const { clubs, setClubs } = useContext<ClubContextInterface>(ClubsContext);

    useEffect(() => {
        console.log("fetch liste des joueurs", props.route.params.joueur.id)
        setIsLoading(true)
        setJoueurDetails(props.route.params.joueur)
        fetch(`https://api.mpg.football/api/data/championship-player-stats/${props.route.params.joueur.id}/2022`)
            .then(res => res.json())
            .then(result => {
                setJoueurStats(result);
                setIsLoading(false)

            }).catch(err => {
                console.log("catch err fetch player stats", err)
                setIsLoading(false)
            })
    }, [props.route.params.joueur])


    return (
        <SafeAreaView style={styles.screen}>

            {isLoading === true ? <ActivityIndicator size={"large"} /> : <View style={styles.container}>
                <View style={styles.imageContainer}>

                    <Image source={require('../assets/joueur.jpg')} resizeMode={'contain'} style={styles.image} />
                </View>

                <View style={styles.JoueurStats}>
                    <View style={{ paddingBottom: dim.MS20 }}>

                        <Text style={styles.libelle}>{joeurDetails.firstName + " " + joeurDetails.lastName} - {clubs[joeurDetails.clubId]?.name["fr-FR"]}  </Text>
                        <Text style={styles.text}>{ultraPositionHelper(joeurDetails.ultraPosition)}  </Text>

                    </View>
                    <View style={styles.row}>

                        <StatsInfo libelle={"T.Goals: "} content={joeurDetails?.stats?.totalGoals} />
                        <StatsInfo libelle={"T.Matches: "} content={joeurDetails?.stats?.totalMatches} />
                        <StatsInfo libelle={"Rating: "} content={joeurDetails?.stats?.averageRating?.toFixed(2)} />

                    </View>
                    <Text style={styles.libelle}>{"Data From détail d’un joueur API "}  </Text>

                    <View style={styles.row}>

                        <StatsInfo libelle={"quotation: "} content={joeurStats?.championships["1"]?.keySeasonStats?.quotation} />
                        <StatsInfo libelle={"avgRating: "} content={joeurStats?.championships["1"]?.keySeasonStats?.averageRating?.toFixed(2)} />
                        <StatsInfo libelle={"ratioGoals: "} content={joeurStats?.championships["1"]?.keySeasonStats?.ratioGoalsConceded} />

                    </View>

                </View>
            </View>}
        </SafeAreaView>
    );
};

export default DetailJoueurScreen
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: "#FFFFFF"
    },
    container: {
        flex: 1,
        // paddingHorizontal: 30
    },
    JoueurStats: {
        // height: 100,
        backgroundColor: `${colors.primary}`,
        flex: 1.5,
        paddingVertical: dim.MS10,
        paddingHorizontal: dim.MS20,
        borderColor: colors.primary,
        borderWidth: dim.MS2,
        borderRadius: dim.MS40,
        borderBottomWidth: 0,
        borderBottomEndRadius: 0,
        borderBottomLeftRadius: 0

    },
    row: {
        flexDirection: "row",
        paddingBottom: dim.MS30,
        justifyContent: "space-between"
    },
    libelle: {
        fontWeight: "600",
        color: "white",
        fontSize: dim.MS16,
        paddingBottom: dim.MS10
    },
    text: {
        color: "white",
        fontSize: 14
    },
    imageContainer: {
        flex: 1,
        marginBottom: dim.MS10
    },
    image: {
        flex: 1,
        width: '100%'
    }
});