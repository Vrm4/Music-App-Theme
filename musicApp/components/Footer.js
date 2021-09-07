import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHome , faSearch, faAlignCenter} from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-native";
import { Animated } from 'react-native';
export default function Footer() {

    

    return (
        <View style={FooterStyles.container}>
          
            <View style={FooterStyles.containerWrapper}>
            <Link to='/' underlayColor="#1a2639">
            <FontAwesomeIcon icon={ faHome } color={'#fff'} size={23} />
            </Link>
            <Link to='/search' underlayColor="#1a2639" >
            <FontAwesomeIcon icon={ faSearch} color={'#fff'} size={23} />
            </Link>

            <Link to='/library' underlayColor="#1a2639" >
            <FontAwesomeIcon icon={ faAlignCenter } color={'#fff'} size={23} />
            </Link>
            </View>
        </View>
    )
}



const FooterStyles = StyleSheet.create({
    container : { 
        position : 'absolute',
        bottom : 0,
        left : 0,
        right : 0,
        width : '100%',
        padding : 13,
        backgroundColor : '#1a2639',
        shadowRadius : 8,
        shadowOffset : {
          height : -20,
          width : 0
        },
        shadowOpacity : 0.20
    },
    containerWrapper : { 
        flexDirection : 'row',
        justifyContent : 'space-around',
    }
})
