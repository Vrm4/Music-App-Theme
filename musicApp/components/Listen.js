import React from 'react'
import { StyleSheet, Text, View ,SafeAreaView, ScrollView , Image , ImageBackground } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPause , faAngleDoubleLeft , faAngleDoubleRight} from '@fortawesome/free-solid-svg-icons';
export default function Listen() {
    return (
    
    
        <View>
             <View style={ListenStyles.header}>
                   
                   <View style={ListenStyles.ImageDiv} >
                       <Image source={{ uri : 'https://i.ytimg.com/vi/-Cjo3UrzB2c/maxresdefault.jpg'}} style={ListenStyles.image} />
                   </View>
                 
               </View>
               <View style={ListenStyles.musicInformation}>
                   <Text style={ListenStyles.musicName}>
                       Şifa İstemem Balından
                   </Text>
                   <Text style ={ ListenStyles.singerName}>
                       Cem Adrian
                   </Text>
                   <Text style ={ ListenStyles.musicTime}>
                       1.30 / <Text style ={ ListenStyles.musicTime2}>4.20</Text>
                   </Text>
                   <View style={ListenStyles.musicStatus}>
                    <View style={ListenStyles.leftArrow}>
                    <FontAwesomeIcon icon={faAngleDoubleLeft} size={30} color={'#fff'} />  
                    </View>
                       <View style={ListenStyles.musicStatusWrapper}>
                        <FontAwesomeIcon icon={faPause} size={'55%'} color={'#fff'} />
                       </View>
                    <View style={ListenStyles.rightArrow}>
                    <FontAwesomeIcon icon={faAngleDoubleRight} size={30} color={'#fff'} />  
                    </View>
                   </View>
               </View>
   
        </View>

    )
}

const ListenStyles = StyleSheet.create({
    header : { 
        width : '100%',
        paddingTop : 50,
        padding : 25,
        flexDirection : 'row',
        justifyContent : 'center',
        
    },
    ImageDiv : { 
        width : 150 ,
        height :150,
        borderRadius : 100,
        backgroundColor : '#3e4a61',
        padding : 7
    },
    image : { 
        width : '100%',
        height : '100%',
        borderRadius : 100
    },
    musicInformation : { 
        marginTop : 20,
    },
    musicName : { 
        color : 'white',
        fontWeight : '600',
        fontSize : 20,
         textAlign : 'center'
    },
    singerName : { 
        color : 'gray',
        marginTop : 10,
        fontWeight : '700',
        textAlign : 'center',
    },
    musicTime : { 
        fontWeight : '500',
        color : 'white',
        marginTop : 30,
        textAlign : 'center',
        fontSize : 20
    },
    musicTime2 : {
        color : 'gray',
        fontSize : 16
    },
    musicStatus : { 
        width : 190,
        height : 190,
        borderRadius : 100,
        backgroundColor : '#303a52',
        padding : 20,
        marginTop : 60,
        marginLeft : '24%',
        position : 'relative'
    },
    musicStatusWrapper : { 
        width : '100%',
        height : '100%',
        borderRadius : 100,
        backgroundColor : '#1a2639',
        padding : 10,
        alignItems : 'center',
        flexDirection : 'row', 
        justifyContent : 'center'
    },
    leftArrow :{ 
        padding : 10,
        borderRadius : 100,
        backgroundColor : '#303a52',
        position : 'absolute',
        left : -27,
        top: '47%'
    },
    rightArrow :{ 
        padding : 10,
        borderRadius : 100,
        backgroundColor : '#303a52',
        position : 'absolute',
        right : -29,
        top: '47%'
    }
})
