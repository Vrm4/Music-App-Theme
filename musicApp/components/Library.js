import React , {useContext} from 'react';
import { StyleSheet, Text, View , Image , TouchableHighlight,SafeAreaView, ScrollView } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faSearch , faPlayCircle , faEllipsisV , faFire , faEye , faArrowRight} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-native';
import { ThemeContext } from './Context.js';
import MusicFooter from './MusicFooter.js';
export default function Library() {
  const url = 'https://p4.wallpaperbetter.com/wallpaper/153/283/625/abstract-colorful-explosion-wallpaper-preview.jpg'
  const [musicFooter , musicFooterSet] = useContext(ThemeContext)

  return (
    <> 
    <SafeAreaView style={{marginBottom : 50}} >
    <ScrollView  >
    <View >
        <View style={{backgroundColor : '#000'}}>
          <Text style={LibraryStyles.LibraryText}>My Library</Text>
          <Image opacity={0.5} style={LibraryStyles.Image1} source={{uri : url}}/>
        </View>
        <View style={LibraryStyles.musicsTextDiv}>
          <Text style={LibraryStyles.musicsText}>Music</Text>
          <FontAwesomeIcon icon={ faSearch } color={'white'} size={19} style={{marginRight : 12 , marginTop : 5}}/>
        </View>
        <View style={LibraryStyles.musicsDiv}>
         
          <View style={LibraryStyles.musics} >
              <View style={LibraryStyles.musicPhotoAndName}>
              <Image style={LibraryStyles.musicsImg} source={{uri : url}} />
              <View style={{paddingLeft : 8}}>
              <Text style ={LibraryStyles.musicsNameText} numberOfLines={1}>Broke My Heart</Text>
              <Text style ={LibraryStyles.musicsSingerNameText} numberOfLines={1}>Dua Lipa</Text>
              </View>
              </View>
              <View style={LibraryStyles.musicsIcons}>
              
              <TouchableHighlight onPress={() => {musicFooterSet(true)}} underlayColor={'#3e4a61'}>
                <FontAwesomeIcon icon={ faPlayCircle } color={'#cabbe9'} size={24} style={{marginRight : 12}} />
              </TouchableHighlight>
              

              <FontAwesomeIcon icon={ faEllipsisV } color={'white'} size={26} />
              </View>
          </View>
          <View style={LibraryStyles.musics}>
              <View style={LibraryStyles.musicPhotoAndName}>
              <Image style={LibraryStyles.musicsImg} source={{uri : url}} />
              <View style={{paddingLeft : 8}}>
              <Text style ={LibraryStyles.musicsNameText} numberOfLines={1} >Broke My Heart</Text>
              <Text style ={LibraryStyles.musicsSingerNameText} numberOfLines={1} >Dua Lipa</Text>
              </View>
              </View>
              <View style={LibraryStyles.musicsIcons}>
              <TouchableHighlight onPress={() => {musicFooterSet(true)}} underlayColor={'#3e4a61'}>
                <FontAwesomeIcon icon={ faPlayCircle } color={'#cabbe9'} size={24} style={{marginRight : 12}} />
              </TouchableHighlight>
              <FontAwesomeIcon icon={ faEllipsisV } color={'white'} size={26} />
              </View>
          </View>
          <View style={LibraryStyles.musics}>
              <View style={LibraryStyles.musicPhotoAndName}>
              <Image style={LibraryStyles.musicsImg} source={{uri : url}} />
              <View style={{paddingLeft : 8}}>
              <Text style ={LibraryStyles.musicsNameText} numberOfLines={1} >Broke My Heart</Text>
              <Text style ={LibraryStyles.musicsSingerNameText} numberOfLines={1} >Dua Lipa</Text>
              </View>
              </View>
              <View style={LibraryStyles.musicsIcons}>
              <TouchableHighlight onPress={() => {musicFooterSet(true)}} underlayColor={'#3e4a61'}>
                <FontAwesomeIcon icon={ faPlayCircle } color={'#cabbe9'} size={24} style={{marginRight : 12}} />
              </TouchableHighlight>
              <FontAwesomeIcon icon={ faEllipsisV } color={'white'} size={26} />
              </View>
          </View>
          <View style={LibraryStyles.musics}>
              <View style={LibraryStyles.musicPhotoAndName}>
              <Image style={LibraryStyles.musicsImg} source={{uri : url}} />
              <View style={{paddingLeft : 8}}>
              <Text style ={LibraryStyles.musicsNameText} numberOfLines={1} >Broke My Heart</Text>
              <Text style ={LibraryStyles.musicsSingerNameText} numberOfLines={1} >Dua Lipa</Text>
              </View>
              </View>
              <View style={LibraryStyles.musicsIcons}>
              <TouchableHighlight onPress={() => {musicFooterSet(true)}} underlayColor={'#3e4a61'}>
                <FontAwesomeIcon icon={ faPlayCircle } color={'#cabbe9'} size={24} style={{marginRight : 12}} />
              </TouchableHighlight>
              <FontAwesomeIcon icon={ faEllipsisV } color={'white'} size={26} />
              </View>
          </View>
          <View style={LibraryStyles.musics}>
              <View style={LibraryStyles.musicPhotoAndName}>
              <Image style={LibraryStyles.musicsImg} source={{uri : url}} />
              <View style={{paddingLeft : 8}}>
              <Text style ={LibraryStyles.musicsNameText} numberOfLines={1} >Broke My Heart</Text>
              <Text style ={LibraryStyles.musicsSingerNameText} numberOfLines={1} >Dua Lipa</Text>
              </View>
              </View>
              <View style={LibraryStyles.musicsIcons}>
              <TouchableHighlight onPress={() => {musicFooterSet(true)}} underlayColor={'#3e4a61'}>
                <FontAwesomeIcon icon={ faPlayCircle } color={'#cabbe9'} size={24} style={{marginRight : 12}} />
              </TouchableHighlight>
              <FontAwesomeIcon icon={ faEllipsisV } color={'white'} size={26} />
              </View>
          </View>
        </View>
        <View style={LibraryStyles.playListsDiv}>
          <Text style={LibraryStyles.playListsText} >Play Lists</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={LibraryStyles.playListsWrapper}>
          <Link to='/category' underlayColor="#1a2639">
            <View style={LibraryStyles.playLists}>
              <View style={{backgroundColor : '#000' , borderRadius : 15}}>
              <Image style={LibraryStyles.playListsImage} opacity={0.4} source={{ uri : 'data:image/jpeg;base64,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'}}/>
              </View>
              <FontAwesomeIcon icon={ faPlayCircle } color={'#cabbe9'} size={37} style={LibraryStyles.playListsIcon} />
              <Text style={LibraryStyles.kindPlayList} numberOfLines={1}>
              Hip Hop
              </Text>
            </View>
            </Link>
            <Link to='/category' underlayColor="#1a2639">
            <View style={LibraryStyles.playLists}>
              <View style={{backgroundColor : '#000' , borderRadius : 15}}>
              <Image style={LibraryStyles.playListsImage} opacity={0.4} source={{ uri : 'https://3.bp.blogspot.com/-7Kc3bI8wu6o/XGunuAJhEWI/AAAAAAAAGXs/5P0Gz1copNQbV8OVKPFi3rbN1iCj7JAoACHMYCw/s1600/wallpaper-music-background-triangle-color-paint-electronic.jpg'}}/>
              </View>
              <FontAwesomeIcon icon={ faPlayCircle } color={'#cabbe9'} size={37} style={LibraryStyles.playListsIcon} />
              <Text style={LibraryStyles.kindPlayList} numberOfLines={1}>
                Pop
              </Text>
            </View>
            </Link>
            <Link to='/category' underlayColor="#1a2639">
            <View style={LibraryStyles.playLists}>
              <View style={{backgroundColor : '#000' , borderRadius : 15}}>
              <Image style={LibraryStyles.playListsImage} opacity={0.4} source={{ uri : 'https://4.imimg.com/data4/DO/JC/MY-1978309/music-wallpaper-500x500.jpg'}}/>
              </View>
              <FontAwesomeIcon icon={ faPlayCircle } color={'#cabbe9'} size={37} style={LibraryStyles.playListsIcon} />
              <Text style={LibraryStyles.kindPlayList} numberOfLines={1}>
                Rocks
              </Text>
            </View>
            </Link>
          </View>
          </ScrollView>
        </View>
        <View style={LibraryStyles.singersDiv}>
          <View style={{flexDirection : 'row' , justifyContent : 'space-between'}}>
          <Text style={LibraryStyles.singersText}>Singers</Text>
          <Link to='/allsingers' underlayColor="#1a2639">
                <FontAwesomeIcon icon={ faArrowRight } color={'white'} size={24} />
          </Link>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={LibraryStyles.singersWrapper}>
          <Link to='/singers' underlayColor="#1a2639">
            <View style={LibraryStyles.singers}>
              <View style={{backgroundColor : '#000' , borderRadius : 100}}>
                <Image style={LibraryStyles.singersImage} opacity={0.6} source={{uri :'https://coolwallpapers.me/picsup/2617516-dua-lipa-wallpaper-download-hd.jpg'}} />
              </View>
              <View style={LibraryStyles.singerIconDiv} >
               <FontAwesomeIcon icon={ faFire } color={'#f85959'} size={24} />
              </View>
            </View>
            </Link>
            <Link to='/singers' underlayColor="#1a2639">
            <View style={LibraryStyles.singers}>
              <View style={{backgroundColor : '#000' , borderRadius : 100}}>
                <Image style={LibraryStyles.singersImage} opacity={0.6} source={{uri :'https://w0.peakpx.com/wallpaper/262/800/HD-wallpaper-cem-adrian-art-fantasy-luminos-yasar-vurdem-rose-black-white-man.jpg'}} />
              </View>
              <View style={LibraryStyles.singerIconDiv} >
               <FontAwesomeIcon icon={ faEye } color={'#17b978'} size={24} />
              </View>
            </View>
            </Link>
            <Link to='/singers' underlayColor="#1a2639">
            <View style={LibraryStyles.singers}>
              <View style={{backgroundColor : '#000' , borderRadius : 100}}>
                <Image style={LibraryStyles.singersImage} opacity={0.6} source={{uri :'https://i.pinimg.com/originals/6b/18/b9/6b18b96ea039df86bcfcadf84f172887.jpg'}} />
              </View>
              <View style={LibraryStyles.singerIconDiv} >
               <FontAwesomeIcon icon={ faEye } color={'#17b978'} size={24} />
              </View>
            </View>
            </Link>
          </View>
          </ScrollView>

        </View>
    </View>

    </ScrollView>
  </SafeAreaView>
  {  musicFooter ?  <MusicFooter /> : null }

  </>
  );
}
const LibraryStyles = StyleSheet.create({
    Image1 : {
        height : 70, 
        width : '100%',
        position : 'relative',
        zIndex : 2,
    },
    LibraryText : { 
      color : 'white',
      fontSize : 22,
      position : 'absolute',
      top : 12,
      left : '34%',
      zIndex : 4,
      fontWeight : '700'
    },
    musicsTextDiv : { 
      padding : 25,
      flexDirection : 'row',
      flexWrap : 'wrap',
      justifyContent : 'space-between'
    },
    musicsText : { 
      color : 'white',
      fontWeight : '600',
      fontSize : 25,
    },
    musicsDiv : {
      paddingLeft : 24,
      paddingRight :24,
    },
    musics : {
      width : '100%',
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
      shadowOpacity : 0.20
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
      padding : 3
    },
    musicsSingerNameText : { 
      color : '#e2f3f5',
      padding : 4,
      fontSize : 12
    },
    musicPhotoAndName : {
      flexDirection : 'row',
      flexWrap : 'wrap',
    },
    playListsDiv :{
      padding : 26,
    },
    playListsText : { 
      color : 'white',
      fontWeight : '600',
      fontSize : 25
    },
    playListsWrapper : { 
      flexDirection : 'row',
      marginTop : 20,
      paddingBottom : 20,
    },
    playLists : {
      position : 'relative',
      width : 150 , 
      height : 150 , 
      padding : 8,
      borderRadius : 15,
      backgroundColor : '#3e4a61',
      marginRight : 20, 
      shadowRadius : 3,
      shadowOffset : {
        height : 11,
        width : 11
      },
      shadowOpacity : 0.25
    },
    playListsImage : { 
      width : '100%',
      height : '100%',
      borderRadius : 15
    },
    playListsIcon : { 
      position : 'absolute',
      top : -10,
      right : -10,
    },
    kindPlayList : { 
      color : 'white',
      fontWeight : '600',
      position : 'absolute',
      bottom : 17,
      left : 14,
      fontSize : 19
    },
    singersDiv : { 
      padding : 26,
    },
    singersText : { 
      fontWeight : '600',
      color :'white',
      fontSize : 25
    },
    singersWrapper : { 
      flexDirection :'row',
      marginTop : 20,
      padding : 10,
      overflow : 'scroll'
    },
    singers : { 
      width: 140,
      height : 140,
      backgroundColor : '#3e4a61',
      borderRadius : 100,
      padding : 10,
      position : 'relative',
      marginRight : 20,
      shadowRadius : 3, 
      shadowOffset : {
        height : 9,
        width : 11
      },
      shadowOpacity : 0.30
    },
    singersImage : { 
      width : '100%',
      height : '100%',
      borderRadius : 100
    },
    singerIconDiv : { 
      position : 'absolute',
      top : -2,
      right : 0,
      backgroundColor : '#3e4a61',
      padding : 4,
      borderRadius : 100
    }
});
  