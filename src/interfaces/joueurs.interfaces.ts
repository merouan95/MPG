import { RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../navigation/indexNavigation";

export interface Joueur {
    firstName: string | null;
    lastName: string;
    ultraPosition: number;
    stats: {
        totalGoals: number;
        totalMatches: number;
        averageRating: number;
    };
    id: string;
    clubId: string;
}
export interface JoeurComponentProps {
    item: Joueur;
    index: number;
    navigation: any;
}
export interface ListeJoueursScreenProps {
    navigation: any;
}
export interface PlayerStats {
    championships: {
        [key: string]: {
            keySeasonStats: {
                quotation: number;
                averageRating: number;
                ratioGoalsConceded: number;
            }
        }
    }
}
export interface DetailJoueurScreenProps {
    route: RouteProp<RootStackParamList, 'DetailJoueurScreen'>;

}