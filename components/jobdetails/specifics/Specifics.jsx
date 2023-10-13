import React from "react";
import { View, Text } from "react-native";

import styles from "./specifics.style";

const Specifics = ({ title, points }) => {
  // console.log(points.);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}:</Text>
      <View style={styles.pointsContainer}>
        {points.map((item, idx) => (
          <View style={styles.pointWrapper} key={item + idx}>
            <View style={styles.pointDot} />
            <Text style={styles.pointText}>{item}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default Specifics;
