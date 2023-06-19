export interface DimensionInterface {
    MS2: number;
    MS4: number;
    MS8: number;
    MS9: number;
    MS10: number;
    MS11: number;
    MS12: number;
    MS13: number;
    MS14: number;
    MS15: number;
    MS16: number;
    MS18: number;
    MS20: number;
    MS24: number;
    MS26: number;
    MS30: number;
    MS40: number;
    MS45: number;
    MS50: number;
    MS60: number;
    MS70: number;
    MS80: number;
    MS90: number;
    MS100: number;
    MS160: number;
    MS170: number;
}

export interface PaletteColorsInterface {
    primary: string;
    secondary: string;
}

export interface AppStylesInterface {
    PaletteColors: PaletteColorsInterface;
    dimension: DimensionInterface;
}