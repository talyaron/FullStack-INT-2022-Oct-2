import { View, Text, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native'
import React, { useState } from 'react'
import { Button, IconButton } from 'react-native-paper'
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';



export default function TodoScreen() {

    const [todoList, setTodoList] = useState([])
    const [todo, setTodo] = useState("")
    const [editTodo, setEditTodo] = useState(null)


    const handleUpdateTodo = () => {
        const updatedTodo = todoList.map((item) => {
            if(item.id === editTodo.id){
                return {...item, title:todo}
            }
            return item
        })
        setTodoList(updatedTodo)
        setEditTodo(null)
        setTodo("")
    }

    const handleAddTodo = () => {
        if(todo === ""){
            return 
        }
        
        setTodoList([...todoList, {id: Date.now().toString(),title: todo}])
        setTodo("")
    }

    const handleEditTodo = (todo) => {
        setEditTodo(todo);
		setTodo(todo.title);
    }

    const handleDeleteTodo = (id) => {
        Alert.alert(
            "Are your sure?",
            "Are you sure you want to remove this beautiful box?",
            [
                // The "Yes" button
                {
                text: "Yes",
                onPress: () => {
                    const updatedTodoList = todoList.filter((todo) => todo.id !== id)
                    setTodoList(updatedTodoList);
                },
                },
                // The "No" button
                // Does nothing but dismiss the dialog when tapped
                {
                text: "No",
                },
            ]
        )
    }

    const renderTodo = ({ item, index }) => {
        return (
            <View
                style={{
                    backgroundColor: "#1e90ff",
                    borderRadius: 6,
                    paddingHorizontal: 6,
                    paddingVertical: 8,
                    marginBottom: 12,
                    flexDirection: "row",
                    alignItems: "center",
                    shadowColor: "#000",
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.8,
                    shadowRadius: 3
                }}
            >
                <Text style={{ color: "#fff", fontSize: 20, fontWeight: "800", flex: 1 }}>
                    {item.title}
                </Text>
                <IconButton
                    icon="pencil"
                    iconColor='#fff'
                    onPress={() => handleEditTodo(item)}
                ></IconButton>
                <IconButton
                    icon="trash-can"
                    iconColor='#fff'
                    onPress={() => handleDeleteTodo(item.id)}
                ></IconButton>
                {/* <Ionicons name="md-checkmark-circle" size={40} color="green" /> */}
            </View>
        )
    }

    const navigation: any = useNavigation()

    return (
        <View style={{ marginHorizontal: 16, marginTop: 60 }}>
            <TextInput
                style={{
                    borderColor: "#000",
                    borderRadius: 6,
                    paddingVertical: 8,
                    paddingHorizontal: 16,
                }}
                placeholder='Add a task'
                onChangeText={(userText) => setTodo(userText)}
            ></TextInput>
            {/* <FontAwesome.Button name="facebook" backgroundColor="#3b5998">
                Login with Facebook
            </FontAwesome.Button> */}
            {editTodo ? (
				<TouchableOpacity
					style={{
						backgroundColor: "#000",
						borderRadius: 6,
						paddingVertical: 12,
						marginVertical: 34,
						alignItems: "center",
						shadowColor: "#000",
						shadowOffset: { width: 0, height: 2 },
						shadowOpacity: 0.8,
						shadowRadius: 3,
					}}
					onPress={() => handleUpdateTodo()}
				>
					<Text style={{ color: "#fff", fontWeight: "bold", fontSize: 20 }}>
						Save
					</Text>
				</TouchableOpacity>
			) : (
				<TouchableOpacity
					style={{
						backgroundColor: "#000",
						borderRadius: 6,
						paddingVertical: 12,
						marginVertical: 34,
						alignItems: "center",
						shadowColor: "#000",
						shadowOffset: { width: 0, height: 2 },
						shadowOpacity: 0.8,
						shadowRadius: 3,
					}}
					onPress={() => handleAddTodo()}
				>
					<Text style={{ color: "#fff", fontWeight: "bold", fontSize: 20 }}>
						Add
					</Text>
				</TouchableOpacity>
			)}
            <FlatList data={todoList} renderItem={renderTodo} />

            {/* {todoList.length <= 0 && <Fallback />} */}
        </View>
    )
}

