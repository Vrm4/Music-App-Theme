import React , {useContext} from 'react'
import { ImageBackground, StyleSheet, Text, View , ScrollView ,SafeAreaView , Image , TouchableHighlight} from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import {faPlayCircle , faEllipsisV , faChevronLeft} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-native';
import { ThemeContext } from './Context.js';
import MusicFooter from './MusicFooter.js';
export default function Category() {
    const [musicFooter , musicFooterSet] = useContext(ThemeContext)
    return (
        <>
        <ImageBackground resizeMode="cover" blurRadius={20} style={styles.bgImage} source={{uri : "https://i.pinimg.com/originals/b9/6a/8f/b96a8fae9bb7bcd78c3e48c6375f1317.jpg"}} >
            <SafeAreaView>
                <ScrollView style={{marginBottom :30}}>
                <Link to='/' underlayColor="" style={{zIndex : 1 , position : 'absolute' , top : 15 , left : 14,}} >
                            <FontAwesomeIcon icon={faChevronLeft} size={23} color={'#fff'} />
                </Link>
                <View style={{marginTop : 55}}>
                    <Text style={styles.CategoryText}>Category & PlayLists</Text>
                </View>
                <View style={styles.categoryView}>
                    <View style={styles.balloons}></View>
                    <View style={styles.balloons2}></View>
                    <View style={styles.balloons3}></View>
                    <Text style={styles.songText}>Songs</Text>
                    <View style={{padding : 10}}>
                    <View style={styles.musics} >
                        <View style={styles.musicPhotoAndName}>
                        <Image style={styles.musicsImg} source={{uri : 'https://i.pinimg.com/originals/64/84/ec/6484ecbd852f580850c550fc1aa75713.jpg'}} />
                        <View style={{paddingLeft : 8}}>
                        <Text style ={styles.musicsNameText} numberOfLines={1}>Broke My Heart</Text>
                        <Text style ={styles.musicsSingerNameText} numberOfLines={1}>Dua Lipa</Text>
                        </View>
                        </View>
                        <View style={styles.musicsIcons}>
                        <TouchableHighlight  underlayColor={'#3e4a61'} onPress={() => {musicFooterSet(true)}}>
                        <FontAwesomeIcon icon={ faPlayCircle } color={'#cabbe9'} size={24} style={{marginRight : 12}} />
                        </TouchableHighlight>
                        <FontAwesomeIcon icon={ faEllipsisV } color={'white'} size={26} />
                        </View>
                        <View style={styles.musicCategoryStatus}>
                            <Text style={styles.musicCategoryStatusText}>Pop</Text>
                        </View>
                    </View>
                    <View style={styles.musics} >
                        <View style={styles.musicPhotoAndName}>
                        <Image style={styles.musicsImg} source={{uri : 'https://i.pinimg.com/originals/64/84/ec/6484ecbd852f580850c550fc1aa75713.jpg'}} />
                        <View style={{paddingLeft : 8}}>
                        <Text style ={styles.musicsNameText} numberOfLines={1}>Broke My Heart</Text>
                        <Text style ={styles.musicsSingerNameText} numberOfLines={1}>Dua Lipa</Text>
                        </View>
                        </View>
                        <View style={styles.musicsIcons}>
                        <TouchableHighlight  underlayColor={'#3e4a61'} onPress={() => {musicFooterSet(true)}}>
                        <FontAwesomeIcon icon={ faPlayCircle } color={'#cabbe9'} size={24} style={{marginRight : 12}} />
                        </TouchableHighlight>
                        <FontAwesomeIcon icon={ faEllipsisV } color={'white'} size={26} />
                        </View>
                        <View style={styles.musicCategoryStatus}>
                            <Text style={styles.musicCategoryStatusText}>Pop</Text>
                        </View>
                    </View>
                    <View style={styles.musics} >
                        <View style={styles.musicPhotoAndName}>
                        <Image style={styles.musicsImg} source={{uri : 'https://i.pinimg.com/originals/64/84/ec/6484ecbd852f580850c550fc1aa75713.jpg'}} />
                        <View style={{paddingLeft : 8}}>
                        <Text style ={styles.musicsNameText} numberOfLines={1}>Broke My Heart</Text>
                        <Text style ={styles.musicsSingerNameText} numberOfLines={1}>Dua Lipa</Text>
                        </View>
                        </View>
                        <View style={styles.musicsIcons}>
                        <TouchableHighlight  underlayColor={'#3e4a61'} onPress={() => {musicFooterSet(true)}}>
                        <FontAwesomeIcon icon={ faPlayCircle } color={'#cabbe9'} size={24} style={{marginRight : 12}} />
                        </TouchableHighlight>
                        <FontAwesomeIcon icon={ faEllipsisV } color={'white'} size={26} />
                        </View>
                        <View style={styles.musicCategoryStatus}>
                            <Text style={styles.musicCategoryStatusText}>Pop</Text>
                        </View>
                    </View>
                    <View style={styles.musics} >
                        <View style={styles.musicPhotoAndName}>
                        <Image style={styles.musicsImg} source={{uri : 'https://i.pinimg.com/originals/64/84/ec/6484ecbd852f580850c550fc1aa75713.jpg'}} />
                        <View style={{paddingLeft : 8}}>
                        <Text style ={styles.musicsNameText} numberOfLines={1}>Broke My Heart</Text>
                        <Text style ={styles.musicsSingerNameText} numberOfLines={1}>Dua Lipa</Text>
                        </View>
                        </View>
                        <View style={styles.musicsIcons}>
                        <TouchableHighlight  underlayColor={'#3e4a61'} onPress={() => {musicFooterSet(true)}}>
                        <FontAwesomeIcon icon={ faPlayCircle } color={'#cabbe9'} size={24} style={{marginRight : 12}} />
                        </TouchableHighlight>
                        <FontAwesomeIcon icon={ faEllipsisV } color={'white'} size={26} />
                        </View>
                        <View style={styles.musicCategoryStatus}>
                            <Text style={styles.musicCategoryStatusText}>Pop</Text>
                        </View>
                    </View>
                    <View style={styles.musics} >
                        <View style={styles.musicPhotoAndName}>
                        <Image style={styles.musicsImg} source={{uri : 'https://i.pinimg.com/originals/64/84/ec/6484ecbd852f580850c550fc1aa75713.jpg'}} />
                        <View style={{paddingLeft : 8}}>
                        <Text style ={styles.musicsNameText} numberOfLines={1}>Broke My Heart</Text>
                        <Text style ={styles.musicsSingerNameText} numberOfLines={1}>Dua Lipa</Text>
                        </View>
                        </View>
                        <View style={styles.musicsIcons}>
                        <TouchableHighlight  underlayColor={'#3e4a61'} onPress={() => {musicFooterSet(true)}}>
                        <FontAwesomeIcon icon={ faPlayCircle } color={'#cabbe9'} size={24} style={{marginRight : 12}} />
                        </TouchableHighlight>
                        <FontAwesomeIcon icon={ faEllipsisV } color={'white'} size={26} />
                        </View>
                        <View style={styles.musicCategoryStatus}>
                            <Text style={styles.musicCategoryStatusText}>Pop</Text>
                        </View>
                    </View>
                    </View>
                </View>
                </ScrollView>
            </SafeAreaView>

        </ImageBackground>
        {musicFooter ?  <MusicFooter /> : null }
        </>
    )
}

const styles = StyleSheet.create({
    bgImage : { 
        flex : 1
    },
    CategoryText : { 
        textAlign : 'center',
        color : 'white',
        fontSize : 25,
        fontWeight : '600',
        marginBottom : 50
    },
    categoryView :{ 
        minHeight : 500,
        width : '100%',
        borderTopLeftRadius : 40,
        borderTopRightRadius : 40,
        backgroundColor : '#303a52',
        padding : 30,
        position :'relative',
        overflow : 'hidden',
    },
    songText : { 
        fontSize : 23,
        color : 'white',
        fontWeight : '600',
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
        marginBottom : 25,
        shadowRadius : 3,
        shadowOffset : {
          height : 9,
          width : 11
        },
        shadowOpacity : 0.20,
        position : 'relative'
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
      musicCategoryStatus : { 
          position : 'absolute',
          top : -15,
          left : -5,
          padding : 4 ,
          backgroundColor : '#fc5185' ,
          borderRadius : 40
      },
      musicCategoryStatusText :{ 
          color : 'white',
          textAlign : 'center',
          fontWeight : '600',
          fontSize :12
      },
      balloons : { 
          position : 'absolute',
          left : -40,
          top : -40,
          width : 150,
          height : 150,
          backgroundColor : '#f3f169',
          borderRadius : 100
      },
      balloons2 : { 
        position : 'absolute',
        right : -40,
        top : '45%',
        width : 110,
        height : 110,
        backgroundColor : '#46c3db',
        borderRadius : 100
    },
    balloons3 : { 
        position : 'absolute',
        left : '21%',
        bottom : -30,
        width : 140,
        height : 140,
        backgroundColor : '#fc5c9c',
        borderRadius : 100
    }
})
