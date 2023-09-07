import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {colors} from '../utlis/constants';
import {HeightDimension, WidthDimension} from '../utlis/HelperStyle';

const sizes = {
  // global sizes
  bigFont: hp('3%'),
  mediumFont: hp('2%'),
  smallFont: hp('1%'),
  iconBigSize: hp('3%'),
  iconMediumSize: hp('2%'),
  iconSmallSize: hp('1%'),
  mediumFontText: hp('1.5%'),

  // font sizes
};
const fontfamily = {
  fontInter: 'Inter-Medium',
  fontInterRegular: 'Inter-Regular',
  outfitRegular: 'Outfit-Regular',
  fontPoppinsMedium: 'Poppins-Medium',
  fontPoppinsBold: 'Poppins-Bold',
  // font sizes
};

const baseStyle = {
  txtStyleOutPoppinMedium: (fontSize, fontColor) => ({
    fontFamily: 'Poppins-Medium',
    fontSize: fontSize,
    color: fontColor,
  }),
  txtStyleOutInterRegular: (fontSize, fontColor) => ({
    fontFamily: 'Inter-Regular',
    fontSize: fontSize,
    color: fontColor,
  }),
  txtStyleOutOpenSans: (fontSize, fontColor) => ({
    fontFamily: 'OpenSans-Regular',
    fontSize: fontSize,
    color: fontColor,
  }),
  txtStyleOutPoppinBold: (fontSize, fontColor) => ({
    fontFamily: 'Poppins-Bold',
    fontSize: fontSize,
    color: fontColor,
  }),
  txtStyleOutLatoRegular: (fontSize, fontColor) => ({
    fontFamily: 'Lato-Regular',
    fontSize: fontSize,
    color: fontColor,
  }),
  txtStyleOutLatoBold: (fontSize, fontColor) => ({
    fontFamily: 'Lato-Bold',
    fontSize: fontSize,
    color: fontColor,
  }),
  txtStyleOutInterBold: (fontSize, fontColor) => ({
    fontFamily: 'Inter-Bold',
    fontSize: fontSize,
    color: fontColor,
  }),
  txtStyleOutRobotoReg: (fontSize, fontColor) => ({
    fontFamily: 'Roboto-Regular',
    fontSize: fontSize,
    color: fontColor,
  }),

  commonContainer: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: WidthDimension(0.03),
    position: 'relative',
  },
  commonImgWidth: {
    width: '100%',
    height: '100%',
  },
  width100: {
    width: '100%',
  },
  dflex: {
    display: 'flex',
  },

  //alignments
  alignSelfFS: {
    alignSelf: 'flex-start',
  },
  alignSelfCenter: {
    alignSelf: 'center',
  },
  alignSelfFE: {
    alignSelf: 'flex-end',
  },
  alignSelfStetch: {
    alignSelf: 'stretch',
  },

  alignItemsFS: {
    alignItems: 'flex-start',
  },
  alignItemsCenter: {
    alignItems: 'center',
  },
  alignItemsFE: {
    alignItems: 'flex-end',
  },

  justifyContentFS: {
    justifyContent: 'flex-start',
  },
  justifyContentCenter: {
    justifyContent: 'center',
  },
  justifyContentFE: {
    justifyContent: 'flex-end',
  },
  justifyContentSA: {
    justifyContent: 'space-around',
  },
  justifyContentSB: {
    justifyContent: 'space-between',
  },
  justifyContentSE: {
    justifyContent: 'space-evenly',
  },
  textUnderline: {
    textDecorationLine: 'underline',
  },
  textAlignCenter: {
    textAlign: 'center',
  },
  textAlignLeft: {
    textAlign: 'left',
  },
  textAlignRight: {
    textAlign: 'right',
  },
  textAlignJustify: {
    textAlign: 'justify',
  },
  flexDirectionRow: {
    flexDirection: 'row',
  },
  flex1: {
    flex: 1,
  },

  //margin
  marginTop1px: {
    marginTop: WidthDimension(0.5),
  },
  marginTop2px: {
    marginTop: WidthDimension(0.01),
  },
  marginBottom2px: {
    marginBottom: WidthDimension(0.01),
  },
  marginLeft2px: {
    marginLeft: WidthDimension(0.01),
  },
  marginRight2px: {
    marginRight: WidthDimension(0.01),
  },
  margin2px: {
    margin: WidthDimension(0.01),
  },
  marginHorizontal2px: {
    marginHorizontal: WidthDimension(0.01),
  },
  marginVertical2px: {
    marginVertical: WidthDimension(0.01),
  },

  marginTop3px: {
    marginTop: WidthDimension(0.014),
  },
  marginBottom3px: {
    marginBottom: WidthDimension(0.014),
  },
  marginTop4px: {
    marginTop: WidthDimension(0.017),
  },
  marginBottom4px: {
    marginBottom: WidthDimension(0.017),
  },
  marginTop5px: {
    marginTop: WidthDimension(0.02),
  },
  marginBottom5px: {
    marginBottom: WidthDimension(0.02),
  },
  marginLeft5px: {
    marginLeft: WidthDimension(0.02),
  },
  marginRight5px: {
    marginRight: WidthDimension(0.02),
  },
  margin5px: {
    margin: WidthDimension(0.02),
  },
  marginHorizontal5px: {
    marginHorizontal: WidthDimension(0.02),
  },
  marginVertical5px: {
    marginVertical: WidthDimension(0.02),
  },

  marginTop8px: {
    marginTop: WidthDimension(0.03),
  },

  marginTop10px: {
    marginTop: WidthDimension(0.04),
  },
  marginBottom10px: {
    marginBottom: WidthDimension(0.04),
  },
  marginLeft10px: {
    marginLeft: WidthDimension(0.04),
  },
  marginRight10px: {
    marginRight: WidthDimension(0.04),
  },
  margin10px: {
    margin: WidthDimension(0.04),
  },
  marginHorizontal10px: {
    marginHorizontal: WidthDimension(0.04),
  },
  marginVertical10px: {
    marginVertical: WidthDimension(0.04),
  },

  marginTop15px: {
    marginTop: WidthDimension(0.06),
  },
  marginBottom15px: {
    marginBottom: WidthDimension(0.06),
  },
  marginLeft15px: {
    marginLeft: WidthDimension(0.06),
  },
  marginRight15px: {
    marginRight: WidthDimension(0.06),
  },
  margin15px: {
    margin: WidthDimension(0.06),
  },
  marginHorizontal15px: {
    marginHorizontal: WidthDimension(0.06),
  },
  marginVertical15px: {
    marginVertical: WidthDimension(0.06),
  },

  marginTop20px: {
    marginTop: WidthDimension(0.08),
  },
  marginBottom20px: {
    marginBottom: WidthDimension(0.08),
  },
  marginLeft20px: {
    marginLeft: WidthDimension(0.08),
  },
  marginRight20px: {
    marginRight: WidthDimension(0.08),
  },
  margin20px: {
    margin: WidthDimension(0.08),
  },
  marginHorizontal20px: {
    marginHorizontal: WidthDimension(0.08),
  },
  marginVertical20px: {
    marginVertical: WidthDimension(0.08),
  },

  marginTop25px: {
    marginTop: WidthDimension(0.1),
  },
  marginBottom25px: {
    marginBottom: WidthDimension(0.1),
  },
  marginLeft25px: {
    marginLeft: WidthDimension(0.1),
  },
  marginRight25px: {
    marginRight: WidthDimension(0.1),
  },
  margin25px: {
    margin: WidthDimension(0.1),
  },
  marginHorizontal25px: {
    marginHorizontal: WidthDimension(0.1),
  },
  marginVertical25px: {
    marginVertical: WidthDimension(0.1),
  },

  marginTop30px: {
    marginTop: WidthDimension(0.12),
  },

  //======================================//
  //padding
  paddingTop2px: {
    paddingTop: WidthDimension(0.01),
  },
  paddingBottom2px: {
    paddingBottom: WidthDimension(0.01),
  },

  paddingLeft2px: {
    paddingLeft: WidthDimension(0.01),
  },
  paddingRight2px: {
    paddingRight: WidthDimension(0.01),
  },
  padding2px: {
    padding: WidthDimension(0.01),
  },
  paddingHorizontal2px: {
    marginHorizontal: WidthDimension(0.01),
  },
  paddingVertical2px: {
    marginVertical: WidthDimension(0.01),
  },

  paddingTop5px: {
    paddingTop: WidthDimension(0.02),
  },
  paddingBottom5px: {
    paddingBottom: WidthDimension(0.02),
  },
  paddingLeft5px: {
    paddingLeft: WidthDimension(0.02),
  },
  paddingRight5px: {
    paddingRight: WidthDimension(0.02),
  },
  padding5px: {
    padding: WidthDimension(0.02),
  },
  paddingHorizontal5px: {
    marginHorizontal: WidthDimension(0.02),
  },
  paddingVertical5px: {
    marginVertical: WidthDimension(0.02),
  },

  paddingLeft6px: {
    paddingLeft: WidthDimension(0.022),
  },
  paddingRight6px: {
    paddingRight: WidthDimension(0.022),
  },

  paddingTop10px: {
    paddingTop: WidthDimension(0.04),
  },
  paddingBottom10px: {
    paddingBottom: WidthDimension(0.04),
  },
  paddingLeft10px: {
    paddingLeft: WidthDimension(0.04),
  },
  paddingRight10px: {
    paddingRight: WidthDimension(0.04),
  },
  padding8px: {
    padding: WidthDimension(0.03),
  },
  padding10px: {
    padding: WidthDimension(0.04),
  },

  paddingTop12px: {
    paddingTop: WidthDimension(0.05),
  },

  paddingTop15px: {
    paddingTop: WidthDimension(0.06),
  },
  paddingBottom15px: {
    paddingBottom: WidthDimension(0.06),
  },
  paddingLeft15px: {
    paddingLeft: WidthDimension(0.06),
  },
  paddingRight15px: {
    paddingRight: WidthDimension(0.06),
  },
  padding15px: {
    padding: WidthDimension(0.06),
  },

  paddingTop20px: {
    paddingTop: WidthDimension(0.08),
  },
  paddingBottom20px: {
    paddingBottom: WidthDimension(0.08),
  },
  paddingLeft20px: {
    paddingLeft: WidthDimension(0.08),
  },
  paddingRight20px: {
    paddingRight: WidthDimension(0.08),
  },
  padding20px: {
    padding: WidthDimension(0.08),
  },

  paddingBottom30px: {
    paddingBottom: WidthDimension(0.1),
  },
  paddingBottom40px: {
    paddingBottom: WidthDimension(0.12),
  },
};

export {sizes, fontfamily, baseStyle};
