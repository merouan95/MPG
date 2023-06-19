import { ReactNode } from 'react';

export interface ListClubProviderProps {
    children: ReactNode;
}

export interface Club {
    championships: Championships;
    id: string;
    name: Name;
    shortName: string;
    defaultJerseyUrl: string;
    defaultAssets: null | Record<string, unknown>;
}

export interface Name {
    "fr-FR": string;
    "en-GB": string;
    "es-ES": string;
}

export interface Championships {
    [key: string]: Championship;
}

export interface Championship {
    jerseys: JerseyYear;
    active: boolean;
}

export interface JerseyYear {
    [year: string]: string;
}

export interface ClubContextInterface {
    clubs: Record<string, Club>;
    setClubs: React.Dispatch<React.SetStateAction<Record<string, Club>>>;
  }