import { StyleSheet } from "react-native";
import { colors } from "../../utlis/constants";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";

const styles = StyleSheet.create({
  container: { flex: 1 },
  subContainer: {
    width: "90%",
    alignSelf: "center",
  },
  mainView: { backgroundColor: colors.white, flex: 1 },
  txtStyle: {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: heightPercentageToDP("15%"),
  },
  headerView: { backgroundColor: colors.blue_1, flex: 0.19 },
  scan: {
    width: widthPercentageToDP("6%"),
    height: heightPercentageToDP("3.8%"),
    resizeMode: "contain",

    tintColor: colors.white,
  },
  mainContainer: { width: "90%", alignSelf: "center", flexDirection: "row" },
  oilcan: {
    width: widthPercentageToDP("25%"),
    height: heightPercentageToDP("20%"),
  },
  txtConatiner: { marginLeft: heightPercentageToDP("3%"), width: "45%" },
  title: {
    fontSize: heightPercentageToDP("2.5%"),
    fontWeight: "bold",
    color: colors.black,
  },
  pricetitle: {
    fontSize: heightPercentageToDP("2.5%"),
    fontWeight: "bold",
    color: colors.black,
    marginHorizontal: "5%",
  },
  priceValue: {
    fontSize: heightPercentageToDP("2%"),
    fontWeight: "bold",
    color: colors.gray,
    marginHorizontal: "5%",
  },
  priceMainView: { flexDirection: "row" },
  priceTxt: {
    fontSize: heightPercentageToDP("1.9%"),
    fontWeight: "bold",
    color: colors.black,
  },
  mrp: {
    marginLeft: "1%",
    fontSize: heightPercentageToDP("1.9%"),
    fontWeight: "bold",
  },
  discount: {
    textDecorationLine: "line-through",
    marginLeft: "1%",
    fontSize: heightPercentageToDP("1.9%"),
    fontWeight: "bold",
  },
  save: {
    fontSize: heightPercentageToDP("1.9%"),
    fontWeight: "bold",
    color: colors.green,
  },
  btn: {
    backgroundColor: colors.blueBackground,

    flexDirection: "row",
    alignItems: "center",
    borderRadius: heightPercentageToDP("0.5%"),
    paddingHorizontal: heightPercentageToDP("3%"),
    paddingVertical: heightPercentageToDP("0%"),
    marginLeft: heightPercentageToDP("5%"),
  },
  addTxt: {
    fontSize: heightPercentageToDP("2.2%"),
    fontWeight: "bold",
    color: colors.white,
  },
  plusImg: {
    marginLeft: heightPercentageToDP("5%"),
    backgroundColor: colors.blueBackground,
    borderRadius: heightPercentageToDP("6%"),

    borderColor: colors.blue1,
  },
  borders: {
    borderBottomColor: colors.gray,
    borderBottomWidth: heightPercentageToDP("0.1%"),
    width: "90%",
    alignSelf: "center",
  },
  cart: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: heightPercentageToDP("7%"),
  },
  cartImg: {
    backgroundColor: colors.blueBackground,
    borderRadius: heightPercentageToDP("6%"),
    padding: "1%",
  },
  btn: {
    backgroundColor: colors.blue1,
    marginTop: heightPercentageToDP("4%"),
    paddingHorizontal: heightPercentageToDP("4%"),

    borderRadius: heightPercentageToDP("0.5%"),
  },
  priceValueView: { flexDirection: "row" },
  priceContainer: {
    backgroundColor: colors.white1,
    flex: 0.15,
  },
  placeTxt: {
    textAlign: "center",
    marginTop: heightPercentageToDP("1%"),
    fontSize: heightPercentageToDP("2.3%"),
    fontWeight: "700",
    color: colors.white,
  },
});

export default styles;
