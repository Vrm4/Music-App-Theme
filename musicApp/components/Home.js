import React , {useContext} from 'react'
import { View, Text , StyleSheet , SafeAreaView, ScrollView , Image , TouchableHighlight } from 'react-native'
import Swiper from 'react-native-swiper'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPlayCircle , faHeart , faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-native';
import { ThemeContext } from './Context.js';
import MusicFooter from './MusicFooter.js';
export default function Home(props) {
    const [musicFooter , musicFooterSet] = useContext(ThemeContext)
    const url = 'https://p4.wallpaperbetter.com/wallpaper/153/283/625/abstract-colorful-explosion-wallpaper-preview.jpg'

    return (
        <>
        <SafeAreaView style={{marginBottom : 50}}>
            <ScrollView> 
            <Image style={HomeStyles.waveImage} source={require('../assets/images/wave.png')} />
            <Text style={HomeStyles.homePageText}>Home Page</Text>
            <View style={HomeStyles.homePageWrapper}>
            <Swiper style={HomeStyles.slideWrapper} showsButtons={true} autoplay={true} showsPagination={false} showsButtons={false}>
                <Link to='/albums' underlayColor="#1a2639">
                    <View style={HomeStyles.slide}>
                    <View style={{backgroundColor : '#000', borderRadius : 15 }}>
                    <Image opacity={0.4} source={{uri : "https://i.ytimg.com/vi/zlODqyy8Qjc/maxresdefault.jpg"}} style={HomeStyles.slideImage} />
                    </View>
                    <View style={HomeStyles.musicText}>
                        <Text style={HomeStyles.musicAlbumName} numberOfLines={1}>Papers 2</Text>
                        <Text style={HomeStyles.musicSingerName} numberOfLines={1}>Wiz Khalifa</Text>
                    </View>
                </View>
                </Link>
                <Link to='/albums' underlayColor="#1a2639">
                <View style={HomeStyles.slide}>
                    <View style={{backgroundColor : '#000', borderRadius : 15}}>
                    <Image opacity={0.4} source={{uri : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG53XG9X_HAeqlEZFVFMCovTineVEW543oJA&usqp=CAU"}} style={HomeStyles.slideImage} />
                    </View>
                    <View style={HomeStyles.musicText}>
                        <Text style={HomeStyles.musicAlbumName} numberOfLines={1}>Complete Edition</Text>
                        <Text style={HomeStyles.musicSingerName} numberOfLines={1}>Dua Lipa</Text>
                    </View>
                </View>
                </Link>
                <Link to='/albums' underlayColor="#1a2639">
                <View style={HomeStyles.slide}>
                    <View style={{backgroundColor : '#000', borderRadius : 15}}>
                    <Image opacity={0.4} source={{uri : "https://i.ytimg.com/vi/dLcuFA0Tvls/maxresdefault.jpg"}} style={HomeStyles.slideImage} />
                    </View>
                    <View style={HomeStyles.musicText}>
                        <Text style={HomeStyles.musicAlbumName} numberOfLines={1}>Şeker Prens ve Tuz Kral</Text>
                        <Text style={HomeStyles.musicSingerName} numberOfLines={1}>Cem Adrian</Text>
                    </View>
                </View>
                </Link>
            </Swiper>
            <View style={HomeStyles.albumsView}>
                <Text style={HomeStyles.albumsText}>
                    Albums
                </Text>
                <View style={HomeStyles.albumsWrapper}>
                    <Link to='/albums' underlayColor="#1a2639" >           
                    <View style={HomeStyles.albums}>
                        <Image opacity={0.5} source={{uri : 'https://upload.wikimedia.org/wikipedia/en/9/90/Scorpion_by_Drake.jpg'}}  style={HomeStyles.albumsImage} />
                        <View style={{flexDirection : 'row', justifyContent : 'center'}}>
                        <View style={HomeStyles.albumsTexts}>
                        <View style={{maxWidth : '70%'}}>
                            <Text style={HomeStyles.albumsName} numberOfLines={1}>Scorpion</Text>
                            <Text style={HomeStyles.albumsSingers} numberOfLines={1}>Drake</Text>
                        </View >
                            <FontAwesomeIcon icon={faPlayCircle} color={'#fff'} size={22} />
                        </View>
                        </View>
                    </View>
                    </Link>
                    <Link to='/albums' underlayColor="#1a2639" >
                    <View style={HomeStyles.albums}>
                        <Image opacity={0.5} source={{uri : 'https://upload.wikimedia.org/wikipedia/en/9/90/Scorpion_by_Drake.jpg'}}  style={HomeStyles.albumsImage} />
                        <View style={{flexDirection : 'row', justifyContent : 'center'}}>
                        <View style={HomeStyles.albumsTexts}>
                        <View style={{maxWidth : '70%'}}>
                            <Text style={HomeStyles.albumsName} numberOfLines={1}>Scorpion</Text>
                            <Text style={HomeStyles.albumsSingers} numberOfLines={1}>Drake</Text>
                        </View >
                            <FontAwesomeIcon icon={faPlayCircle} color={'#fff'} size={22} />
                        </View>
                        </View>
                    </View>
                    </Link>
                    <Link to='/albums' underlayColor="#1a2639" >
                    <View style={HomeStyles.albums}>
                        <Image opacity={0.5} source={{uri : 'https://upload.wikimedia.org/wikipedia/en/9/90/Scorpion_by_Drake.jpg'}}  style={HomeStyles.albumsImage} />
                        <View style={{flexDirection : 'row', justifyContent : 'center'}}>
                        <View style={HomeStyles.albumsTexts}>
                        <View style={{maxWidth : '70%'}}>
                            <Text style={HomeStyles.albumsName} numberOfLines={1}>Scorpion</Text>
                            <Text style={HomeStyles.albumsSingers} numberOfLines={1}>Drake</Text>
                        </View >
                            <FontAwesomeIcon icon={faPlayCircle} color={'#fff'} size={22} />
                        </View>
                        </View>
                    </View>
                    </Link>
                    <Link to='/albums' underlayColor="#1a2639" >
                    <View style={HomeStyles.albums}>
                        <Image opacity={0.5} source={{uri : 'https://upload.wikimedia.org/wikipedia/en/9/90/Scorpion_by_Drake.jpg'}}  style={HomeStyles.albumsImage} />
                        <View style={{flexDirection : 'row', justifyContent : 'center'}}>
                        <View style={HomeStyles.albumsTexts}>
                        <View style={{maxWidth : '70%'}}>
                            <Text style={HomeStyles.albumsName} numberOfLines={1}>Scorpion</Text>
                            <Text style={HomeStyles.albumsSingers} numberOfLines={1}>Drake</Text>
                        </View >
                            <FontAwesomeIcon icon={faPlayCircle} color={'#fff'} size={22} />
                        </View>
                        </View>
                    </View>
                    </Link>
                </View>
            </View>
            <View style={HomeStyles.mostViewedDiv}>
                <Text style={HomeStyles.mostViewedText}>Most Viewed</Text>
                <View style ={{padding : 9 , marginTop : 15}}>
                <View style={HomeStyles.songs}>
              <View style={HomeStyles.musicPhotoAndName}>
              <Image style={HomeStyles.musicsImg} source={{uri : url}} />
              <View style={{paddingLeft : 8 }}>
              <Text style ={HomeStyles.musicsNameText} numberOfLines={1}>Broke My Heart</Text>
              <Text style ={HomeStyles.musicsSingerNameText} numberOfLines={1}>Dua Lipa</Text>
              </View>
              </View>
              <View style={HomeStyles.musicsIcons}>
              <TouchableHighlight  underlayColor={'#3e4a61'} >
                <FontAwesomeIcon icon={ faHeart } color={'#fff'} size={20} style={{marginRight : 14 }} />
              </TouchableHighlight>
              <TouchableHighlight  underlayColor={'#3e4a61'} onPress={() => {musicFooterSet(true)}}>
              <FontAwesomeIcon icon={ faPlayCircle } color={'white'} size={26} />
              </TouchableHighlight>
              </View>
                </View>
                <View style={HomeStyles.songs}>
              <View style={HomeStyles.musicPhotoAndName}>
              <Image style={HomeStyles.musicsImg} source={{uri : url}} />
              <View style={{paddingLeft : 8 }}>
              <Text style ={HomeStyles.musicsNameText} numberOfLines={1}>Broke My Heart</Text>
              <Text style ={HomeStyles.musicsSingerNameText} numberOfLines={1}>Dua Lipa</Text>
              </View>
              </View>
              <View style={HomeStyles.musicsIcons}>
              <TouchableHighlight  underlayColor={'#3e4a61'}>
                <FontAwesomeIcon icon={ faHeart } color={'#fff'} size={20} style={{marginRight : 14 }} />
              </TouchableHighlight>
              <TouchableHighlight  underlayColor={'#3e4a61'} onPress={() => {musicFooterSet(true)}}>
              <FontAwesomeIcon icon={ faPlayCircle } color={'white'} size={26} />
              </TouchableHighlight>
              </View>
                </View>
                <View style={HomeStyles.songs}>
              <View style={HomeStyles.musicPhotoAndName}>
              <Image style={HomeStyles.musicsImg} source={{uri : url}} />
              <View style={{paddingLeft : 8 }}>
              <Text style ={HomeStyles.musicsNameText} numberOfLines={1} >Broke My Heart</Text>
              <Text style ={HomeStyles.musicsSingerNameText} numberOfLines={1} >Dua Lipa</Text>
              </View>
              </View>
              <View style={HomeStyles.musicsIcons}>
              <TouchableHighlight  underlayColor={'#3e4a61'}>
                <FontAwesomeIcon icon={ faHeart } color={'#fff'} size={20} style={{marginRight : 14 }} />
              </TouchableHighlight>
              <TouchableHighlight  underlayColor={'#3e4a61'} onPress={() => {musicFooterSet(true)}}>
              <FontAwesomeIcon icon={ faPlayCircle } color={'white'} size={26} />
              </TouchableHighlight>
              </View>

                </View>
                <View style={HomeStyles.songs}>
              <View style={HomeStyles.musicPhotoAndName}>
              <Image style={HomeStyles.musicsImg} source={{uri : url}} />
              <View style={{paddingLeft : 8 }}>
              <Text style ={HomeStyles.musicsNameText} numberOfLines={1} >Broke My Heart</Text>
              <Text style ={HomeStyles.musicsSingerNameText} numberOfLines={1} >Dua Lipa</Text>
              </View>
              </View>
              <View style={HomeStyles.musicsIcons}>
              <TouchableHighlight  underlayColor={'#3e4a61'}>
                <FontAwesomeIcon icon={ faHeart } color={'#fff'} size={20} style={{marginRight : 14 }} />
              </TouchableHighlight>
              <TouchableHighlight  underlayColor={'#3e4a61'} onPress={() => {musicFooterSet(true)}}>
              <FontAwesomeIcon icon={ faPlayCircle } color={'white'} size={26} />
              </TouchableHighlight>
              </View>
                </View>
                <View style={HomeStyles.songs}>
              <View style={HomeStyles.musicPhotoAndName}>
              <Image style={HomeStyles.musicsImg} source={{uri : url}} />
              <View style={{paddingLeft : 8 }}>
              <Text style ={HomeStyles.musicsNameText} numberOfLines={1} >Broke My Heart</Text>
              <Text style ={HomeStyles.musicsSingerNameText} numberOfLines={1} >Dua Lipa</Text>
              </View>
              </View>
              <View style={HomeStyles.musicsIcons}>
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
            <View style={HomeStyles.singersView}>
                <View style={{flexDirection : 'row' , justifyContent : 'space-between'}}>
                <Text style={HomeStyles.singersText}>Singers</Text>
                <Link to='/allsingers' underlayColor="#1a2639">
                <FontAwesomeIcon icon={ faArrowRight } color={'white'} size={24} />
                </Link>
                </View>
                
                <View style={HomeStyles.singersWrapper}>
                <Link to='/singers' underlayColor="#1a2639">
                <View style={HomeStyles.singers}>
                    <View style={HomeStyles.singersImageDiv}>
                        <Image source={{uri : 'https://coolwallpapers.me/picsup/2617516-dua-lipa-wallpaper-download-hd.jpg'}} opacity={0.6} style={HomeStyles.singersImage} />
                    </View>
                    <View style={{flexDirection : 'row' , justifyContent : 'center'}}>
                    <View style ={HomeStyles.singersName}>
                        <Text style={HomeStyles.singersNameText} numberOfLines={1}>Dua Lipa</Text>
                    </View>
                    </View>
                </View>
                </Link>
                <Link to='/singers' underlayColor="#1a2639">
                <View style={HomeStyles.singers}>
                    <View style={HomeStyles.singersImageDiv}>
                        <Image opacity={0.6} style={HomeStyles.singersImage} source={{uri : 'https://w0.peakpx.com/wallpaper/103/884/HD-wallpaper-cem-adrian-face-man-singer-portrait-diamond-red-art-yasar-vurdem-rose-flower-petals-thumbnail.jpg'}}  />
                    </View>
                    <View style={{flexDirection : 'row' , justifyContent : 'center'}}>
                    <View style ={HomeStyles.singersName}>
                        <Text style={HomeStyles.singersNameText} numberOfLines={1} >Cem Adrian</Text>
                    </View>
                    </View>
                </View>
                </Link>
                <Link to='/singers' underlayColor="#1a2639">
                <View style={HomeStyles.singers}>
                    <View style={HomeStyles.singersImageDiv}>
                        <Image opacity={0.6} style={HomeStyles.singersImage} source={{uri : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkTnVi5Dr2Tbl6P7w669NpAtxRDNi4nXKX9w&usqp=CAU'}}  />
                    </View>
                    <View style={{flexDirection : 'row' , justifyContent : 'center'}}>
                    <View style ={HomeStyles.singersName}>
                        <Text style={HomeStyles.singersNameText} numberOfLines={1} >Shakira </Text>
                    </View>
                    </View>
                </View>
                </Link>
                <Link to='/singers' underlayColor="#1a2639">
                <View style={HomeStyles.singers}>
                    <View style={HomeStyles.singersImageDiv}>
                        <Image source={{uri : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp1nOJ-zrYdRZmzBVmWWkdvGCI1azXt46hGg&usqp=CAU'}} opacity={0.6} style={HomeStyles.singersImage} />
                    </View>
                    <View style={{flexDirection : 'row' , justifyContent : 'center'}}>
                    <View style ={HomeStyles.singersName}>
                        <Text style={HomeStyles.singersNameText} numberOfLines={1} >Ceza</Text>
                    </View>
                    </View>
                </View>
                </Link>
                </View>
            </View>
            </View>
            </ScrollView>
        </SafeAreaView>
        {  musicFooter ?  <MusicFooter /> : null }
        </>
    )
}

const HomeStyles = StyleSheet.create({
    waveImage : { 
        width : '100%',
        height : 100
    },
    slide: { 
        width : '100%',
        borderRadius : 15,
        height : 150,
    },
    slideImage : {
        width : '100%',
        height : '100%',
        borderRadius : 15,
    },
    homePageText : { 
        position : 'absolute', 
        padding : 20,
        fontWeight : '600',
        fontSize : 19
    },
    homePageWrapper : { 
        padding : 27
    },
    musicText : { 
        position : 'relative',
        zIndex : 1,
        top : -56,
        left : 15
    },
    musicAlbumName : { 
        color : '#fff',
        fontWeight : '600',
        fontSize : 20,

    },
    musicSingerName : { 
        color : '#5d5d5a',
        fontWeight : '600',
        paddingTop :5 
    },
    slideWrapper : { 
 
        maxHeight : 180
    },
    albumsView : { 
        
        width : '100%'
    },
    albumsText : { 
        fontSize :21,
        fontWeight : '600',
        color : '#fff'
    },
    albumsWrapper : { 
        padding : 6,
        width : '100%',
        flexDirection : 'row',
        flexWrap : 'wrap',
        justifyContent : 'space-between',
        marginTop : 18,
    },
    albums : { 
        width : 150,
        height : 150,
        backgroundColor : '#000',
        borderRadius : 35,
        marginBottom : 25
    },
    albumsImage : { 
        width : '100%',
        height : '100%',
        borderRadius : 35
    },
    albumsTexts : { 
        width : '80%',
        padding : 8,
        borderRadius : 30,
        backgroundColor : '#3e4a61',
        position : 'relative',
        top : -50,
        flexDirection : 'row',
        justifyContent : "space-around",
        alignItems :'center'
    },
    albumsName : { 
        color : 'white',
        fontWeight : '600',
        fontSize : 12
    },
    albumsSingers: {
        color : 'gray',
        fontWeight : '600',
        fontSize : 10
    },
    mostViewedDiv : { 
        width : '100%',
    },
    mostViewedText : { 
        fontWeight : '600',
        color : '#fff',
        fontSize : 21
    },
    songs : { 
        padding : 10,
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
        margin : 9
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
      singersView : { 
          width : '100%'
      },
      singersText : {
          fontSize : 21,
          fontWeight : '600',
          color : '#fff'
      },
      singersWrapper : { 
        flexDirection : 'row',
        flexWrap : 'wrap',
        justifyContent : 'space-between'
      },
      singers : { 
          width : 150,
          height : 150,
          borderRadius : 35,
          marginTop : 40,
          position : 'relative'
      },
      singersImageDiv : { 
        backgroundColor : '#000',
        borderRadius : 35,
      },
      singersImage : { 
          width : '100%',
          borderRadius : 35,
          height : '100%'
      },
      singersName : { 
          width : '70%',
          flexDirection : 'row',
          justifyContent : 'center',
          backgroundColor : '#3e4a61',
          padding : 7,
          borderRadius : 50,
          position : 'relative',
          top : -20
      },
      singersNameText : { 
          color : '#fff',
          fontWeight : '600',
      },

})