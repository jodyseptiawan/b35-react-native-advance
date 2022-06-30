import React, {useState, useEffect} from "react";
import { View, Text, Button, StyleSheet, FlatList } from "react-native";
import { ListItem, Avatar } from "react-native-elements";

// Import Axios
import axios from 'axios'

const Posts = ({navigation}) => {
  //Init State
  const [posts, setPosts] = useState([])
  const [isLoading, setIsLoading] = useState(false)


  // Create LifeCycle
  //Function Exception
  useEffect(() => {
    getPosts()
  },[])

  // Create Function to fetch
  const getPosts = () => {
    setIsLoading(true);
    axios
    .get('https://jsonplaceholder.typicode.com/posts')
    .then((res) => {
      setPosts(res.data)
      setIsLoading(false);
    })
    .catch(() => {
      alert('Error Fetch Data')
      setIsLoading(false);
    })
  }

  //   Create Component List
  const _renderItem = ({item}) => {
    return (
      <ListItem 
        onPress={() => navigation.navigate('DetailPost', item)}
        key={item.id.toString()} 
        bottomDivider>
        <Avatar 
          rounded 
          title={item.title.slice(0,2)} 
          containerStyle={{backgroundColor: 'black'}} />
        <ListItem.Content>
          <ListItem.Title h4 numberOfLines={1}>{item.title}</ListItem.Title>
          <ListItem.Subtitle numberOfLines={2}>{item.body}</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    )
  }


  return (
    <View style={style.container}>
      <View>
        <FlatList 
          data={posts}
          renderItem={_renderItem}
          keyExtractor={(item) => item.id.toString()}
          refreshing={isLoading}
          onRefresh={getPosts}
        />
      </View>
    </View>
  );
};

export default Posts;

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
});
