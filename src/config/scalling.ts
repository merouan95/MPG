import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;


const scale = (size:number):number => width / guidelineBaseWidth * size;
const moderateScale = (size:number, factor:number = 0.5):number => size + ( scale(size) - size ) * factor;

export {scale, moderateScale, height, width};
