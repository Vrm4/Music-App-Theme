import React , {useContext} from 'react'
import { StyleSheet, Text, View , SafeAreaView, ScrollView , Image , TouchableHighlight} from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPlayCircle  ,faChevronLeft , faHeart } from '@fortawesome/free-solid-svg-icons';
import {Link } from "react-router-native";
import { ThemeContext } from './Context.js';
import MusicFooter from './MusicFooter.js';
export default function Singers() {
  const [musicFooter , musicFooterSet] = useContext(ThemeContext)
    const url = 'https://p4.wallpaperbetter.com/wallpaper/153/283/625/abstract-colorful-explosion-wallpaper-preview.jpg'
    return (
      <>
    <SafeAreaView  >
        <ScrollView >
            <Link to='/search' underlayColor="" style={SingersStyles.arrowleft}> 
            <FontAwesomeIcon icon={ faChevronLeft } color={'#fff'} size={23}  />
            </Link>
            <View style={{backgroundColor : '#000' , position : 'relative'}}>
            <Image opacity={0.3}  source={{uri : 'https://images.hdqwalls.com/wallpapers/2019-dua-lipa-c0.jpg'}} style={SingersStyles.bgImage} />
            <Text style={SingersStyles.singersImageText}>Dua Lipa</Text>
            </View>
            <View style={SingersStyles.singersMusicsDiv}>
            <FontAwesomeIcon icon={ faPlayCircle } color={'#43dde6'} size={50} style={SingersStyles.playIcon} /> 
            <View style={SingersStyles.songsWarpper}>
                <View style={SingersStyles.songsWarpper2}>
                <View style={SingersStyles.balloons}></View>
                <View style={SingersStyles.balloons2}></View>
                <View style={SingersStyles.balloons3}></View>
                <View style={SingersStyles.songs}>
              <View style={SingersStyles.musicPhotoAndName}>
              <Image style={SingersStyles.musicsImg} source={{uri : url}} />
              <View style={{paddingLeft : 8 }}>
              <Text style ={SingersStyles.musicsNameText} numberOfLines={1}>Broke My Heart</Text>
              <Text style ={SingersStyles.musicsSingerNameText} numberOfLines={1}>Dua Lipa</Text>
              </View>
              </View>
              <View style={SingersStyles.musicsIcons}>
              <TouchableHighlight  underlayColor={'#3e4a61'}>
                <FontAwesomeIcon icon={ faHeart } color={'#fff'} size={20} style={{marginRight : 14 }} />
              </TouchableHighlight>
              <TouchableHighlight  underlayColor={'#3e4a61'} onPress={() => {musicFooterSet(true)}}>
              <FontAwesomeIcon icon={ faPlayCircle } color={'white'} size={26} />
              </TouchableHighlight>
              </View>
                </View>
                <View style={SingersStyles.songs}>
              <View style={SingersStyles.musicPhotoAndName}>
              <Image style={SingersStyles.musicsImg} source={{uri : url}} />
              <View style={{paddingLeft : 8 }}>
              <Text style ={SingersStyles.musicsNameText} numberOfLines={1}>Broke My Heart</Text>
              <Text style ={SingersStyles.musicsSingerNameText} numberOfLines={1}>Dua Lipa</Text>
              </View>
              </View>
              <View style={SingersStyles.musicsIcons}>
              <TouchableHighlight  underlayColor={'#3e4a61'}>
                <FontAwesomeIcon icon={ faHeart } color={'#fff'} size={20} style={{marginRight : 14 }} />
              </TouchableHighlight>
              <TouchableHighlight  underlayColor={'#3e4a61'} onPress={() => {musicFooterSet(true)}}>
              <FontAwesomeIcon icon={ faPlayCircle } color={'white'} size={26} />
              </TouchableHighlight>
              </View>
                </View>
                <View style={SingersStyles.songs}>
              <View style={SingersStyles.musicPhotoAndName}>
              <Image style={SingersStyles.musicsImg} source={{uri : url}} />
              <View style={{paddingLeft : 8 }}>
              <Text style ={SingersStyles.musicsNameText} numberOfLines={1}>Broke My Heart</Text>
              <Text style ={SingersStyles.musicsSingerNameText} numberOfLines={1}>Dua Lipa</Text>
              </View>
              </View>
              <View style={SingersStyles.musicsIcons}>
              <TouchableHighlight  underlayColor={'#3e4a61'}>
                <FontAwesomeIcon icon={ faHeart } color={'#fff'} size={20} style={{marginRight : 14 }} />
              </TouchableHighlight>
              <TouchableHighlight  underlayColor={'#3e4a61'} onPress={() => {musicFooterSet(true)}}>
              <FontAwesomeIcon icon={ faPlayCircle } color={'white'} size={26} />
              </TouchableHighlight>
              </View>
                </View>
                <View style={SingersStyles.songs}>
              <View style={SingersStyles.musicPhotoAndName}>
              <Image style={SingersStyles.musicsImg} source={{uri : url}} />
              <View style={{paddingLeft : 8 }}>
              <Text style ={SingersStyles.musicsNameText} numberOfLines={1}>Broke My Heart</Text>
              <Text style ={SingersStyles.musicsSingerNameText} numberOfLines={1}>Dua Lipa</Text>
              </View>
              </View>
              <View style={SingersStyles.musicsIcons}>
              <TouchableHighlight  underlayColor={'#3e4a61'}>
                <FontAwesomeIcon icon={ faHeart } color={'#fff'} size={20} style={{marginRight : 14 }} />
              </TouchableHighlight>
              <TouchableHighlight  underlayColor={'#3e4a61'} onPress={() => {musicFooterSet(true)}}>
              <FontAwesomeIcon icon={ faPlayCircle } color={'white'} size={26} />
              </TouchableHighlight>
              </View>
                </View>
                <View style={SingersStyles.songs}>
              <View style={SingersStyles.musicPhotoAndName}>
              <Image style={SingersStyles.musicsImg} source={{uri : url}} />
              <View style={{paddingLeft : 8 }}>
              <Text style ={SingersStyles.musicsNameText} numberOfLines={1}>Broke My Heart</Text>
              <Text style ={SingersStyles.musicsSingerNameText} numberOfLines={1}>Dua Lipa</Text>
              </View>
              </View>
              <View style={SingersStyles.musicsIcons}>
              <TouchableHighlight  underlayColor={'#3e4a61'}>
                <FontAwesomeIcon icon={ faHeart } color={'#fff'} size={20} style={{marginRight : 14 }} />
              </TouchableHighlight>
              <TouchableHighlight  underlayColor={'#3e4a61'} onPress={() => {musicFooterSet(true)}}>
              <FontAwesomeIcon icon={ faPlayCircle } color={'white'} size={26} />
              </TouchableHighlight>
              </View>
                </View>
                <View style={SingersStyles.songs}>
              <View style={SingersStyles.musicPhotoAndName}>
              <Image style={SingersStyles.musicsImg} source={{uri : url}} />
              <View style={{paddingLeft : 8 }}>
              <Text style ={SingersStyles.musicsNameText} numberOfLines={1}>Broke My Heart</Text>
              <Text style ={SingersStyles.musicsSingerNameText} numberOfLines={1}>Dua Lipa</Text>
              </View>
              </View>
              <View style={SingersStyles.musicsIcons}>
              <TouchableHighlight  underlayColor={'#3e4a61'}>
                <FontAwesomeIcon icon={ faHeart } color={'#fff'} size={20} style={{marginRight : 14 }} />
              </TouchableHighlight>
              <TouchableHighlight  underlayColor={'#3e4a61'} onPress={() => {musicFooterSet(true)}}>
              <FontAwesomeIcon icon={ faPlayCircle } color={'white'} size={26} />
              </TouchableHighlight>
              </View>
                </View>
                <View style={SingersStyles.songs}>
              <View style={SingersStyles.musicPhotoAndName}>
              <Image style={SingersStyles.musicsImg} source={{uri : url}} />
              <View style={{paddingLeft : 8 }}>
              <Text style ={SingersStyles.musicsNameText} numberOfLines={1}>Broke My Heart</Text>
              <Text style ={SingersStyles.musicsSingerNameText} numberOfLines={1}>Dua Lipa</Text>
              </View>
              </View>
              <View style={SingersStyles.musicsIcons}>
              <TouchableHighlight  underlayColor={'#3e4a61'}>
                <FontAwesomeIcon icon={ faHeart } color={'#fff'} size={20} style={{marginRight : 14 }} />
              </TouchableHighlight>
              <TouchableHighlight  underlayColor={'#3e4a61'} onPress={() => {musicFooterSet(true)}}>
              <FontAwesomeIcon icon={ faPlayCircle } color={'white'} size={26} />
              </TouchableHighlight>
              </View>
                </View>
                <View style={SingersStyles.songs}>
              <View style={SingersStyles.musicPhotoAndName}>
              <Image style={SingersStyles.musicsImg} source={{uri : url}} />
              <View style={{paddingLeft : 8 }}>
              <Text style ={SingersStyles.musicsNameText} numberOfLines={1}>Broke My Heart</Text>
              <Text style ={SingersStyles.musicsSingerNameText} numberOfLines={1}>Dua Lipa</Text>
              </View>
              </View>
              <View style={SingersStyles.musicsIcons}>
              <TouchableHighlight  underlayColor={'#3e4a61'}>
                <FontAwesomeIcon icon={ faHeart } color={'#fff'} size={20} style={{marginRight : 14 }} />
              </TouchableHighlight>
              <TouchableHighlight  underlayColor={'#3e4a61'} onPress={() => {musicFooterSet(true)}}>
              <FontAwesomeIcon icon={ faPlayCircle } color={'white'} size={26} />
              </TouchableHighlight>
              </View>
                </View>
                </View>

            </View>      
         </View>
        </ScrollView>
    </SafeAreaView>
    {  musicFooter ?  <MusicFooter /> : null }
      </>
    )
}

const SingersStyles = StyleSheet.create({
    bgImage : { 
        width : '100%',
        height : 300
    },
    singersImageText : { 
        color : 'white',
        fontWeight : '700',
        fontSize : 29,
        position : 'absolute',
        bottom : 79,
        left : '35%'
    },
    singersMusicsDiv : { 
        width :"100%",
        borderTopLeftRadius : 70, 
        borderTopRightRadius : 70,
        backgroundColor : '#303a52',
        position : 'relative',
        top : -59
    },
    playIcon : { 
        position : 'absolute',
        right : 20,
        top : -20,
        shadowRadius : 3,
        shadowOffset : {
            height : 9,
            width : 11
        },
        shadowOpacity : 0.20
    },
    songsWarpper :  {
        padding : 25,
        flexDirection : 'row',
        justifyContent : "center",
        marginTop : 45,
    },
    songsWarpper2 :  {
        width : '90%',
        position : 'relative'
    },
    songs : { 
        padding : 10,
        backgroundColor : '#3e4a61',
        borderRadius : 10,
        flexDirection : 'row',
        flexWrap : 'wrap',
        justifyContent : 'space-between',
        marginBottom : 14,
        shadowRadius : 3,
        shadowOffset : {
            height : 9,
            width : 11
        },
        shadowOpacity : 0.20,
    },
    musicsImg : { 
        width : 50,
        height : 50,
        borderRadius : 5
      },
      musicsIcons : { 
        flexDirection : 'row',
        flexWrap : 'wrap',
        alignItems :'center',
        margin : 12
      },
      musicsNameText : { 
        color : 'white',
        fontWeight : '600',
        padding : 3,
        fontSize : 13
      },
      musicsSingerNameText : { 
        color : '#e2f3f5',
        padding : 4,
        fontSize : 12
      },
      musicPhotoAndName : {
        flexDirection : 'row',
        maxWidth : '55%'
      },
      balloons : { 
          width : 100,
          height : 100,
          position : 'absolute',
          top : 60,
          left : -40,
          borderRadius : 100,
          backgroundColor : '#f3f169',
      },
      balloons2 : { 
        width : 100,
        height : 100,
        position : 'absolute',
        top : 300,
        right : 10,
        borderRadius : 100,
        backgroundColor : '#fc5185',
    },
    balloons3 : { 
        width : 130,
        height : 130,
        position : 'absolute',
        top : 500,
        left : -80,
        borderRadius : 100,
        backgroundColor : '#43dde6',
    },
    arrowleft : { 
      position : 'absolute',
      top : 15,
      left : 14,
      zIndex : 2
    }
})
