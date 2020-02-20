import React, { Component } from 'react'
import { View, Text,StyleSheet ,ImageBackground} from 'react-native'
import bdImage from '../imagenes/fondos-3d.jpg'
import {BuscarStyles} from './styles/BuscarStyles'

export default class Buscar extends Component {
//add state
    constructor(props) {
        super(props)
        this.state = {
                title:'',
                contenido:''
        }
    }
// fectch data from our url by id and add to data 
    
    componentDidMount() {
        //get id from list view
        const { itemId } = this.props.route.params;
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        const url = `https://codika.herokuapp.com/items/${itemId}`
        fetch(proxyurl+ url)
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    title:responseJson.message.title,
                    contenido:responseJson.message.content
                })
            }).catch((error) => {
                console.log(error)
            })
    }

    // show data
    render() {

        return (
           < ImageBackground source={bdImage} style={BuscarStyles.backgroundContainer}>

               <Text style={BuscarStyles.textLogin}>
                   {this.state.title}
               </Text>
               <Text style={BuscarStyles.textLogin}>
                   {this.state.contenido}
               </Text>

            </ImageBackground>

        )
    }
}


