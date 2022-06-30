import * as React from "react";
import { Text, Box, FlatList, Pressable } from "native-base";

// Add Props in Hello({navigation})
export default function Hello({ navigation }) {
  // Set Dummy Data with Array
  const socialMedia = ['Instagram', 'Facebook', 'Twitter']

  // Make Function handle press to get value per list
  const handlePress = (value) => {
    navigation.navigate("Detail Social", { value })
  }

  return (
    <Box
      safeArea
      bg="primary.400"
      flex={1}
      alignItems="center"
      justifyContent="center"
      p={10}
    >
      <FlatList
        data={socialMedia}
        renderItem={({item}) => (
          <Pressable onPress={() => handlePress(item)}>
            <Text 
              fontStyle="italic"
              fontSize={30}
              margin={5}
            >
              {item}
            </Text>
          </Pressable>
        )}
        keyExtractor={(item) => item}
      />
    </Box>
  );
}
