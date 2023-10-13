import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import { useRouter } from "expo-router";

import styles from "./welcome.style";
import { icons, SIZES } from "../../../constants";

const JobTabs = ["Full-time", "Part-time", "Contractor"];
// const JobTabs = ["משרה מלאה", "חצי משרה", "מתמחה", "היברידי"];

const Welcome = ({ searchTerm, setSearchTerm, handleClick }) => {
  const router = useRouter();

  const [activeJobTypes, setActiveJobTypes] = useState("Full-time");
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Avi</Text>
        <Text style={styles.welcomeMessage}>Find Your Next Job</Text>
        {/* <Text style={styles.userName}>שלום אבי</Text>
        <Text style={styles.welcomeMessage}>מצא את העבודה הבאה שלך"</Text> */}
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value={searchTerm}
            onChangeText={(text) => {
              setSearchTerm(text);
            }}
            // placeholder="איזו עבודה אתה מחפש?"
            placeholder="What are you looking for?"
          />
        </View>

        <TouchableOpacity
          style={styles.searchBtn}
          onPress={() => {
            handleClick;
          }}
        >
          <Image
            source={icons.search}
            resizeMode="contain"
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.tabsContainer}>
        <FlatList
          data={JobTabs}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.tab(activeJobTypes, item)}
              onPress={() => {
                setActiveJobTypes(item);
                router.push(`/search/${item}`);
              }}
            >
              <Text style={styles.tabText(activeJobTypes, item)}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item}
          contentContainerStyle={{ columnGap: SIZES.small }}
          horizontal
        />
      </View>
    </View>
  );
};

export default Welcome;
