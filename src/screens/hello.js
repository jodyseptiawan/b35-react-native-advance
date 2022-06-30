import * as React from "react";
import { Text, Box, Pressable } from "native-base";

// Add Props in Hello({navigation})
export default function Hello({ navigation }) {
  return (
    <Box bg="primary.400" flex={1} alignItems="center" justifyContent="center">
      <Text fontFamily="body" fontWeight={400} fontStyle="italic" fontSize={30}>
        Life's too short
      </Text>

      <Pressable 
        onPress={() => navigation.navigate('IncDec')}
        bg="primary.600" 
        p={4} 
        borderRadius={5} 
        mt={5}>
        <Text fontFamily="body" fontSize={17}>
          To Increment Decrement
        </Text>
      </Pressable>
    </Box>
  );
}
