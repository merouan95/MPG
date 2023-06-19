import { createContext, useEffect, useState } from 'react';
import { Club, ClubContextInterface, ListClubProviderProps } from '../interfaces/clubs.interfaces';

export const ClubsContext = createContext<ClubContextInterface>({ clubs: {}, setClubs: () => { } })

export const ListClubProvider: React.FC<ListClubProviderProps> = (props) => {
    const [clubs, setClubs] = useState<Record<string, Club>>({})
    useEffect(() => {
        fetch(`https://api.mpg.football/api/data/championship-clubs`)
            .then(res => res.json())
            .then(result => {
                // console.log("clubs conext", result.championshipClubs);
                setClubs(result.championshipClubs);
            }).catch(err => console.log("catch err fetch player stats", err))
    }, [])
    return (
        <ClubsContext.Provider value={{ clubs: clubs, setClubs: setClubs }}>
            {props.children}
        </ClubsContext.Provider>
    )
}