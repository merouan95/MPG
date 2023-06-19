import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Configstyle from "../config/styles";

const dim = Configstyle.dimension;
interface InfoDisplayProps {
    libelle: string;
    content: string | number;
  }
const InfoDisplay: React.FC<InfoDisplayProps> = ({ libelle, content }) => {
    return (
        <View style={styles.row}>
            <Text style={styles.libelle}>{libelle}: </Text>
            <Text>{content}</Text>
        </View>
    );
};
const styles = StyleSheet.create({
    row: {
        flexDirection: "row",
        paddingBottom: dim.MS4
    },
    libelle: {
        fontWeight: '600'
    },

});
export default InfoDisplay