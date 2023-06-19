import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
interface StatsInfoProps {
    libelle: string;
    content: string | number;
  }
const StatsInfo: React.FC<StatsInfoProps> = ({ libelle, content }) => {
    return (
        <View style={styles.statsInfoContainer}>
            <Text style={styles.libelle}>{libelle}  </Text>
            <Text style={styles.text}>{content}  </Text>

        </View>
    );
};

const styles = StyleSheet.create({
    statsInfoContainer: {
        flex: 1,
        borderWidth: 2,
        borderColor: "white",
        borderRadius: 20,
        paddingHorizontal: 5,
        justifyContent: "space-between",
        height: 80,
        paddingVertical: 10,
        marginHorizontal: 4
    },
    libelle: {
        fontWeight: "600",
        color: "white",
        fontSize: 16,
        paddingBottom: 10
    },
    text: {
        color: "white",
        fontSize: 14
    },
});
export default StatsInfo;