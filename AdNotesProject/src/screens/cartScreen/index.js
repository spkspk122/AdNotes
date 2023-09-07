import React, { useEffect, useState } from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";

import { KeyboardAwareScrollView } from "@codler/react-native-keyboard-aware-scroll-view";
import { heightPercentageToDP } from "react-native-responsive-screen";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/header";
import Spacer from "../../components/spacer";
import { iconpathurl } from "../../constant/iconpathurl";
import { loginStrings, strings } from "../../constant/strings";
import * as CartAction from "./../../redux/actions/cartAction";
import styles from "./styles";
import { colors } from "../../utlis/constants";
import CustomButton from "../../components/button";

const Cart = () => {
  //local States

  //useDispatch

  const dispatch = useDispatch();
  const cartData = useSelector((state) => state.cartReducer.products);

  //filterState

  const [filterData, setFilterData] = useState(cartData);
  const [duplicatefilterData, setDuplicateFilterData] = useState(cartData);

  //useEffect

  useEffect(() => {
    setFilterData(cartData);
    setDuplicateFilterData(cartData);
  }, [cartData]);

  //cartFilter

  const handleSearch = (query) => {
    if (query) {
      const filterCartList = filterData.filter((item) =>
        item.name.toLowerCase().includes(query.toLowerCase())
      );

      setDuplicateFilterData(filterCartList);
    } else {
      setDuplicateFilterData(cartData);
    }
  };

  //renderProduct

  const renderProduct = ({ item, index }) => {
    return (
      <View>
        <View style={styles.mainContainer}>
          <Image
            resizeMode="contain"
            source={item?.img}
            style={styles.oilcan}
          />
          <View style={styles.txtConatiner}>
            <Text style={styles.title}>{item?.name}</Text>

            <View style={styles.priceMainView}>
              <Text style={styles.priceTxt}>{`₹ ${item?.price} `}</Text>
              <Text style={styles.mrp}>{strings.mrp}</Text>

              <Text style={styles.discount}>{`₹ ${item?.original}`}</Text>
            </View>
            <Text style={styles.save}>
              {` ${strings.save} ₹ ${item?.save}`}
            </Text>
            <Spacer height={heightPercentageToDP("3%")} />

            <View style={styles.cart}>
              <TouchableOpacity
                style={styles.cartImg}
                onPress={() => dispatch(CartAction.cartQuantity(item, "minus"))}
              >
                <Image source={iconpathurl.minus} style={styles.scan} />
              </TouchableOpacity>
              <View>
                <Text style={styles.title}>{item?.count}</Text>
              </View>
              <TouchableOpacity
                style={styles.cartImg}
                onPress={() => dispatch(CartAction.cartQuantity(item, "add"))}
              >
                <Image source={iconpathurl.plus} style={styles.scan} />
              </TouchableOpacity>
            </View>
          </View>
          <Spacer height={heightPercentageToDP("3%")} />
        </View>
        <Spacer height={heightPercentageToDP("3%")} />
        <View style={styles.borders} />
        <Spacer height={heightPercentageToDP("2%")} />
      </View>
    );
  };

  return (
    <>
      <View style={styles.container}>
        <FlatList
          data={[1]}
          renderItem={() => {
            return (
              <View style={styles.mainView}>
                <View style={styles.headerView}>
                  <Header onChangeText={handleSearch} />
                </View>
                <Spacer height={heightPercentageToDP("2%")} />

                <FlatList
                  data={duplicatefilterData}
                  renderItem={renderProduct}
                  key={(item) => item.id}
                  ListEmptyComponent={() => {
                    return (
                      <>
                        <Text style={styles.title}>{strings.noData}</Text>
                      </>
                    );
                  }}
                />
              </View>
            );
          }}
        />
      </View>
      <Spacer height={heightPercentageToDP("2%")} />
      <Spacer height={heightPercentageToDP("1%")} />
      {cartData?.length >= 1 ? (
        <View style={styles.priceContainer}>
          <View style={styles.priceValueView}>
            <View>
              <Text style={styles.pricetitle}>{strings.product}</Text>
              <Text style={styles.priceValue}>{strings.product}</Text>
              <Text style={styles.pricetitle}>{"₹ 10000"}</Text>
            </View>

            <View style={styles.btn}>
              <TouchableOpacity onPress={() => alert("hi")}>
                <Text style={styles.placeTxt}>{strings.place}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      ) : (
        <View style={styles.priceContainer}>
          <View style={styles.priceValueView}>
            <View>
              <Text style={styles.pricetitle}>{strings.product}</Text>
              <Text style={styles.priceValue}>{strings.product}</Text>
              <Text style={styles.pricetitle}>{"₹ 0"}</Text>
            </View>
            <View style={styles.btn}>
              <TouchableOpacity onPress={() => alert("hi")}>
                <Text style={styles.placeTxt}>{strings.place}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
    </>
  );
};

export default Cart;
