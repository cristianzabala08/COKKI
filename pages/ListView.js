import React, { Component } from 'react';
import { View, Text, FlatList, ImageBackground, ActivityIndicator, Alert } from 'react-native'
import bgImg from '../imagenes/Listview.jpg'
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons'
import {ListStyles} from './styles/ListStyles'

export default class ListView extends Component {
   // adding state and props
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            isLoading: true
        }
    }
  
    // show the item date on flatlist
    renderItem = ({ item }) => {
        return (
            <View style={ListStyles.List}
            >
                {/* Add Seach Button */}
                <Icon name={'ios-search'} size={28} color={'rgba(255, 255, 255, 0.7)'}
                    style={ListStyles.inputIcon}
                    onPress={() => this.props.navigation.navigate('Seach', {
                        itemId: item.id
                    })
                    }
                />
                <Text style={ListStyles.ListTex}>
                    {item.id}
                </Text>
                <Text style={ListStyles.ListTex1}>
                    {item.name}
                </Text>
                <Text style={ListStyles.ListTex}>
                    {item.description}
                </Text>
            </View>
        )
    }
    // show a litle line Between item
    renderSeparator = () => {
        return (

            <View
                style={{ height: 2, width: '100%', backgroundColor: 'white' }}
            >

            </View>
        )
    }

    // Sing out Button
    singout = () => {
        return (
            Alert.alert(
                'Sing out',
                'Seguro que quieres salir',
                [
                    { text: 'Ask me later', onPress: () => console.log('Ask me later pressed') },
                    {
                        text: 'Cancel',
                        onPress: () => console.log('Cancel Pressed'),
                        style: 'cancel',
                    },
                    { text: 'OK', onPress: () => this.props.navigation.navigate('Login') },
                ],
                { cancelable: false },
            )
        );
    }

    // fectch data from our url and add to data 

    componentDidMount() {
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        const url = 'https://codika.herokuapp.com/items'
        fetch(proxyurl + url)
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson)
                this.setState({
                    data: responseJson,
                    isLoading: false
                })
            })
            .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))
    }

    // show up the data 
    render() {
        return (
            this.state.isLoading
                ?
                <View style={ListStyles.isLoad}>
                    <ActivityIndicator size='large' color='blue' animating />
                </View>
                :
                <ImageBackground source={bgImg} style={ListStyles.Imagen}>

                    <FlatList
                        data={this.state.data}
                        renderItem={this.renderItem}
                        ItemSeparatorComponent={this.renderSeparator}
                    />
                         
                    <TouchableOpacity style={ListStyles.btnLogin}
                        onPress={this.singout}
                    >
                        <Text style={ListStyles.textLogin}> sing out</Text>
                    </TouchableOpacity>
                </ImageBackground>
        );
    }
}

