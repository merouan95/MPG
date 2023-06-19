import React, { memo } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import InfoDisplay from './InfoDisplay';
import { ultraPositionHelper } from '../utils/ultraPositionHelper';
import Configstyle from "../config/styles";
import { JoeurComponentProps } from '../interfaces/joueurs.interfaces';
const colors = Configstyle.PaletteColors;
const dim = Configstyle.dimension;
const CARD_HEIGHT = 120

const JoueurComponent: React.FC<JoeurComponentProps> = ({ item, index, navigation }) => {
    console.log("render index", index)
    return (
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate("DetailJoueurScreen", { joueur: item })}>
            <InfoDisplay libelle="FullName" content={item.lastName + " " + item.firstName} />
            <InfoDisplay libelle="position" content={ultraPositionHelper(item.ultraPosition)} />
            <InfoDisplay libelle="totalGoals" content={item.stats.totalGoals} />
            <InfoDisplay libelle="totalMatches" content={item.stats.totalMatches} />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        height: CARD_HEIGHT,
        paddingVertical: dim.MS10,
        paddingHorizontal: dim.MS30,
        borderColor: colors.primary,
        borderWidth: dim.MS2,
        borderRadius: dim.MS20
    },
});

export default memo(JoueurComponent)