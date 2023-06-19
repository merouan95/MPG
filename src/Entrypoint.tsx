import React from "react";
import Navigation from "./navigation/indexNavigation"
import { ListClubProvider } from "./reactContext/ListClubContext";

const EntryPoint: React.FC = () => {
    return (
        <ListClubProvider>
            <Navigation />
        </ListClubProvider>

    )
}

export default EntryPoint