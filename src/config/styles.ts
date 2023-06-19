/*
    Global Config (colors/scalling ...)
 */
import { moderateScale } from "./scalling";
import { AppStylesInterface } from "../interfaces/scalling.interface";
const AppStyles: AppStylesInterface = {
    PaletteColors: {
        primary: "#4054CC",
        secondary: "#45C945"
    },

    dimension: {

        MS2: moderateScale(2, 0.3),
        MS4: moderateScale(4, 0.3),
        MS8: moderateScale(8, 0.5),
        MS9: moderateScale(9, 0.5),
        MS10: moderateScale(10, 0.3),
        MS11: moderateScale(11, 0.3),
        MS12: moderateScale(12, 0.3),
        MS13: moderateScale(13, 0.3),
        MS14: moderateScale(14, 0.3),
        MS15: moderateScale(15, 0.3),
        MS16: moderateScale(16, 0.3),
        MS18: moderateScale(18, 0.3),
        MS20: moderateScale(20, 0.3),
        MS24: moderateScale(24, 0.3),
        MS26: moderateScale(26, 0.3),
        MS30: moderateScale(30, 0.3),
        MS40: moderateScale(40, 0.3),
        MS45: moderateScale(45, 0.3),
        MS50: moderateScale(50, 0.3),
        MS60: moderateScale(60, 0.3),
        MS70: moderateScale(70, 0.3),
        MS80: moderateScale(80, 0.4),
        MS90: moderateScale(90, 0.4),
        MS100: moderateScale(100, 0.4),
        MS160: moderateScale(160, 0.4),
        MS170: moderateScale(170, 0.4),

    }
};
export default AppStyles;