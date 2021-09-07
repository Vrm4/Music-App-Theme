import React , {useContext} from 'react'
import { StyleSheet, Text, View , ImageBackground , SafeAreaView, ScrollView , Image , TouchableHighlight} from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPlayCircle , faEllipsisV , faChevronLeft} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-native';
import { ThemeContext } from './Context.js';
import MusicFooter from './MusicFooter.js';
export default function Albums() {
    const [musicFooter , musicFooterSet] = useContext(ThemeContext)
    return (
        <>
        <ImageBackground blurRadius={20} resizeMode="cover" style={styles.image} source={{uri : 'https://i.pinimg.com/originals/cb/77/01/cb77013085372740ac085cc07fe1aef8.jpg'}}>
            <SafeAreaView>
                <ScrollView style={{width : '100%'}}>
                    <Link to='/' underlayColor="" style={{zIndex : 1 , position : 'absolute' , top : 15 , left : 14,}} >
                            <FontAwesomeIcon icon={faChevronLeft} size={23} color={'#fff'} />
                    </Link>
                    <View style={styles.header}>
                        <Image  style={styles.albumPhoto} source={{uri : 'https://upload.wikimedia.org/wikipedia/en/9/90/Scorpion_by_Drake.jpg'}} />
                        <View >
                            <Text style={styles.Texts}><Text style={styles.boldTexts}>Album Name:</Text> Scorpion</Text>
                            <Text style={styles.Texts}><Text style={styles.boldTexts}>Singer Name:</Text> Drake</Text>
                            <Text style={styles.Texts}><Text style={styles.boldTexts}>Year:</Text> 2018</Text>
                        </View>
                    </View>
                    <View style={styles.body}>
                        <Text style={styles.bodyText}>Songs</Text>
                            <View style={styles.musics} >
                                  <View style={styles.musicPhotoAndName}>
                                  <Image style={styles.musicsImg} source={{uri : 'https://upload.wikimedia.org/wikipedia/en/9/90/Scorpion_by_Drake.jpg'}} />
                                  <View style={{paddingLeft : 8}}>
                                  <Text style ={styles.musicsNameText} numberOfLines={1}>Scorpion</Text>
                                  <Text style ={styles.musicsSingerNameText} numberOfLines={1}>Drake</Text>
                                  </View>
                                  </View>
                                  <View style={styles.musicsIcons}>
                                  <TouchableHighlight  underlayColor={'#3e4a61'} onPress={() => {musicFooterSet(true)}}>
                                  <FontAwesomeIcon icon={ faPlayCircle } color={'#cabbe9'} size={24} style={{marginRight : 12}} />
                                  </TouchableHighlight>
                                  <FontAwesomeIcon icon={ faEllipsisV } color={'white'} size={26} />
                                  </View>
                            </View>
                            <View style={styles.musics} >
                                  <View style={styles.musicPhotoAndName}>
                                  <Image style={styles.musicsImg} source={{uri : 'https://upload.wikimedia.org/wikipedia/en/9/90/Scorpion_by_Drake.jpg'}} />
                                  <View style={{paddingLeft : 8}}>
                                  <Text style ={styles.musicsNameText} numberOfLines={1}>Scorpion</Text>
                                  <Text style ={styles.musicsSingerNameText} numberOfLines={1}>Drake</Text>
                                  </View>
                                  </View>
                                  <View style={styles.musicsIcons}>
                                  <TouchableHighlight  underlayColor={'#3e4a61'} onPress={() => {musicFooterSet(true)}}>
                                  <FontAwesomeIcon icon={ faPlayCircle } color={'#cabbe9'} size={24} style={{marginRight : 12}} />
                                  </TouchableHighlight>
                                  <FontAwesomeIcon icon={ faEllipsisV } color={'white'} size={26} />
                                  </View>
                            </View>
                            <View style={styles.musics} >
                                  <View style={styles.musicPhotoAndName}>
                                  <Image style={styles.musicsImg} source={{uri : 'https://upload.wikimedia.org/wikipedia/en/9/90/Scorpion_by_Drake.jpg'}} />
                                  <View style={{paddingLeft : 8}}>
                                  <Text style ={styles.musicsNameText} numberOfLines={1}>Scorpion</Text>
                                  <Text style ={styles.musicsSingerNameText} numberOfLines={1}>Drake</Text>
                                  </View>
                                  </View>
                                  <View style={styles.musicsIcons}>
                                  <TouchableHighlight  underlayColor={'#3e4a61'} onPress={() => {musicFooterSet(true)}}>
                                  <FontAwesomeIcon icon={ faPlayCircle } color={'#cabbe9'} size={24} style={{marginRight : 12}} />
                                  </TouchableHighlight>
                                  <FontAwesomeIcon icon={ faEllipsisV } color={'white'} size={26} />
                                  </View>
                            </View>
                            <View style={styles.musics} >
                                  <View style={styles.musicPhotoAndName}>
                                  <Image style={styles.musicsImg} source={{uri : 'https://upload.wikimedia.org/wikipedia/en/9/90/Scorpion_by_Drake.jpg'}} />
                                  <View style={{paddingLeft : 8}}>
                                  <Text style ={styles.musicsNameText} numberOfLines={1}>Scorpion</Text>
                                  <Text style ={styles.musicsSingerNameText} numberOfLines={1}>Drake</Text>
                                  </View>
                                  </View>
                                  <View style={styles.musicsIcons}>
                                  <TouchableHighlight  underlayColor={'#3e4a61'} onPress={() => {musicFooterSet(true)}}>
                                  <FontAwesomeIcon icon={ faPlayCircle } color={'#cabbe9'} size={24} style={{marginRight : 12}} />
                                  </TouchableHighlight>
                                  <FontAwesomeIcon icon={ faEllipsisV } color={'white'} size={26} />
                                  </View>
                            </View>
                            <View style={styles.musics} >
                                  <View style={styles.musicPhotoAndName}>
                                  <Image style={styles.musicsImg} source={{uri : 'https://upload.wikimedia.org/wikipedia/en/9/90/Scorpion_by_Drake.jpg'}} />
                                  <View style={{paddingLeft : 8}}>
                                  <Text style ={styles.musicsNameText} numberOfLines={1}>Scorpion</Text>
                                  <Text style ={styles.musicsSingerNameText} numberOfLines={1}>Drake</Text>
                                  </View>
                                  </View>
                                  <View style={styles.musicsIcons}>
                                  <TouchableHighlight  underlayColor={'#3e4a61'} onPress={() => {musicFooterSet(true)}}>
                                  <FontAwesomeIcon icon={ faPlayCircle } color={'#cabbe9'} size={24} style={{marginRight : 12}} />
                                  </TouchableHighlight>
                                  <FontAwesomeIcon icon={ faEllipsisV } color={'white'} size={26} />
                                  </View>
                            </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </ImageBackground>
        {  musicFooter ?  <MusicFooter /> : null }
        </>
    )
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
      },
    header : { 
        width : '100%',
        flexDirection : 'row',
        justifyContent : 'space-around',
        padding : 10,
        marginTop : 50
    },
    albumPhoto : { 
        width : 140 ,
        height : 140,
        borderRadius : 15
    },
    boldTexts : { 
        fontWeight : '900',
        color : '#88bef5'
    },
    Texts : { 
        color : 'white',
        paddingBottom : 35,
        fontWeight : '500'
    },
    body : { 
        width : '100%',
        minHeight : 450,
        borderTopLeftRadius : 50,
        borderTopRightRadius : 50,
        backgroundColor : '#303a52',
        padding : 30
    },
    bodyText : { 
        color : 'white',
        fontWeight : '600',
        fontSize : 29,
        marginBottom : 20
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
})
