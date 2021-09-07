import React , {useContext , useState} from 'react'
import { StyleSheet, Text, View , Image , TouchableHighlight } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import {faPlayCircle , faTimes} from '@fortawesome/free-solid-svg-icons';
import { ThemeContext } from './Context.js';
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';
import Listen from './Listen.js';
export default function MusicFooter() {
    const [musicFooter , musicFooterSet] = useContext(ThemeContext)
    const [ListenStatus , ListenStatusSet] = useState(false)
    const sheetRef = React.useRef(null);
    const renderContent = () =>  (
      <View style={{backgroundColor : '#1a2639' , minHeight : '100%'}}>
        <Listen />
      </View>
    );
    const url = 'https://p4.wallpaperbetter.com/wallpaper/153/283/625/abstract-colorful-explosion-wallpaper-preview.jpg'
    return (
        <>
        <View style={styles.musicFooterMain}>
            <View style={styles.musicFooterWrapper}>
                <View style={styles.musicFooterImageAndTextsWrapper}>
                    <Image source={{uri : url}} style={styles.musicFooterImage} />
                    <View style={{marginLeft : 10}} >
                        <Text style={styles.musicFooterSongsName} numberOfLines={1}>
                            Break My Heart 
                        </Text>
                        <Text style={styles.musicFooterSingerName} numberOfLines={1}>
                            Dua Lipa
                        </Text>
                    </View>
                </View>
                <View style={styles.musicFooterIcons}>
                    <TouchableHighlight underlayColor='' onPress={() => {ListenStatusSet(true)}}>
                    <FontAwesomeIcon icon={faPlayCircle} color={'#fff'} size={23} style={{marginRight : 15}} /> 
                    </TouchableHighlight>
                    <TouchableHighlight underlayColor='' onPress={() => musicFooterSet(false)}>
                    <FontAwesomeIcon icon={faTimes} color={'#fff'} size={23}/>
                    </TouchableHighlight>
                    
                </View>
            </View>
        </View>
        { ListenStatus ?   <BottomSheet onCloseEnd={() => ListenStatusSet(false)} ref={sheetRef} snapPoints={['100%', 300, 0]} borderRadius={10} renderContent={renderContent} /> : null}
        </>
    )
}

const styles = StyleSheet.create({
    musicFooterMain : { 
        backgroundColor : '#303a52' ,
        height : 70 ,
        width : '100%' ,
        position : 'absolute' ,
        bottom : 45 ,
        left : 0,
        paddingTop : 15 ,
        paddingBottom : 15 ,
        paddingLeft : 35 ,
        paddingRight : 35
    },
    musicFooterWrapper : { 
        flexDirection : 'row',
        justifyContent : 'space-between'
    },
    musicFooterImage : { 
        width : 40,
        height : 40,
        borderRadius : 40
    },
    musicFooterSongsName : { 
        fontWeight : '600',
        color : '#fff',

    },
    musicFooterSingerName : { 
        color : 'gray',
        fontSize : 12,
        marginTop : 3
    },
    musicFooterImageAndTextsWrapper :{ 
        flexDirection : 'row'
    },
    musicFooterIcons : { 
        flexDirection : 'row',
        alignItems : 'center',
        marginBottom : 5
    }
})
