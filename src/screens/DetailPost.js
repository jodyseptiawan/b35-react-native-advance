import React, {useState, useEffect} from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  FlatList,
  RefreshControl,
} from "react-native";
import { ListItem, Avatar } from "react-native-elements";

// Import Axios
import axios from 'axios'


const PostDetail = (props) => {
  //init Props
  const title = props.route.params.title;
  const body = props.route.params.body;
  const id = props.route.params.id;

  //Init State
  const [comments, setComments] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    getComments()
  },[])

  // Create Function to fetch
  const getComments = () => {
    setIsLoading(true);
    axios
    .get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
    .then((res) => {
      setComments(res.data)
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
        key={item.id.toString()} 
        bottomDivider>
        <ListItem.Content>
          <ListItem.Title h4 numberOfLines={1}>{item.email}</ListItem.Title>
          <ListItem.Subtitle numberOfLines={2}>{item.name}-{item.body}</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    )
  }

  return (
    <View style={style.container}>
      <Text h2 style={{fontWeight: 'bold'}}>{title}</Text>
      <Text style={{marginTop: 20}}>{body}</Text>
      <Text style={{marginTop: 20, color: 'gray'}}>Comments</Text>
      <FlatList 
          data={comments}
          renderItem={_renderItem}
          keyExtractor={(item) => item.id.toString()}
          refreshing={isLoading}
          onRefresh={getComments}
        />
    </View>
  );
};

export default PostDetail;

const style = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    padding: 16,
    flex: 1,
  },
});
