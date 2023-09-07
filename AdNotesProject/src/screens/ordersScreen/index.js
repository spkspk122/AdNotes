import React, { useState } from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";

import { KeyboardAwareScrollView } from "@codler/react-native-keyboard-aware-scroll-view";
import { heightPercentageToDP } from "react-native-responsive-screen";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/header";
import Spacer from "../../components/spacer";
import { iconpathurl } from "../../constant/iconpathurl";
import { product } from "../../constant/staticData";
import { strings } from "../../constant/strings";
import * as CartAction from "./../../redux/actions/cartAction";
import styles from "./styles";

const Order = () => {
  //local States

  const [filterData, setFilterData] = useState(product);

  //useDispatch

  const dispatch = useDispatch();

  //useSelector

  const cartData = useSelector((state) => state.cartReducer.products);

  //filter

  const handleSearch = (query) => {
    if (query) {
      const filterData = product.filter((item) =>
        item.name.toLowerCase().includes(query.toLowerCase())
      );

      setFilterData(filterData);
    } else {
      setFilterData(product);
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

            {!cartData.find((data) => data.id === item.id) ? (
              <TouchableOpacity
                style={styles.btn}
                onPress={() => dispatch(CartAction.addToCart(item))}
              >
                <Text style={styles.addTxt}>{strings.add}</Text>
                <View style={styles.plusImg}>
                  <Image source={iconpathurl.plus} style={styles.scan} />
                </View>
              </TouchableOpacity>
            ) : (
              <View style={styles.cart}>
                <TouchableOpacity
                  style={styles.cartImg}
                  onPress={() =>
                    dispatch(CartAction.cartQuantity(item, "minus"))
                  }
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
            )}
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
                data={filterData}
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
  );
};

export default Order;
