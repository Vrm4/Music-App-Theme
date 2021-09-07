import React , {useContext} from 'react'
import { StyleSheet, Text, View,SafeAreaView, ScrollView, Image , TextInput } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import {faSearch , faFire , faEye , faPlus , faRandom , faHeart , faSortAmountUpAlt , faPlayCircle} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-native';
import MusicFooter from './MusicFooter.js';
import { ThemeContext } from './Context.js';
export default function Search() {
  const [musicFooter , musicFooterSet] = useContext(ThemeContext)
    return (
      <>
        <SafeAreaView style={{marginBottom : 50}}>
            <ScrollView> 
                <Image style={SearchStyles.waveImage} source={require('../assets/images/wave.png')} />
                <Text style ={SearchStyles.searchText}>Search</Text>
                <View style={SearchStyles.SearchInputDiv}>
                    <View style={SearchStyles.SearchInputDivWrapper}>
                    <TextInput style={SearchStyles.searchInput} placeholder='Search Anything'  placeholderTextColor='#fff' />
                    <FontAwesomeIcon icon={ faSearch } color={'#fff'} size={18} />
                    </View>
                </View>
                <View style={SearchStyles.divsWrapper}>
                <Link to='/category' underlayColor="#1a2639">
                    <View style={SearchStyles.divs}>
                    <FontAwesomeIcon icon={ faFire } color={'#f85959'} size={95} />
                   <View style={SearchStyles.textDivs}>
                    <Text style={SearchStyles.textDivsText}>Trend</Text>
                   </View>
                    </View>
                    </Link>
                    <Link to='/category' underlayColor="#1a2639">
                    <View style={SearchStyles.divs2}>
                    <FontAwesomeIcon icon={ faEye } color={'#17b978'} size={95} />
                   <View style={SearchStyles.textDivs}>
                    <Text style={SearchStyles.textDivsText}>Most Viewed</Text>
                   </View>
                    </View>
                    </Link>
                    <Link to='/category' underlayColor="#1a2639">
                    <View style={SearchStyles.divs3}>
                    <FontAwesomeIcon icon={ faPlus } color={'#f3f169'} size={95} />
                   <View style={SearchStyles.textDivs}>
                    <Text style={SearchStyles.textDivsText}>New</Text>
                   </View>
                    </View>
                    </Link>
                    <Link to='/category' underlayColor="#1a2639">
                    <View style={SearchStyles.divs4}>
                    <FontAwesomeIcon icon={ faRandom } color={'#43dde6'} size={95} />
                   <View style={SearchStyles.textDivs}>
                    <Text style={SearchStyles.textDivsText}>Random</Text>
                   </View>
                    </View>
                    </Link>
                </View>
                <Text style={SearchStyles.albumsText}>Albums</Text>
                <View style={SearchStyles.albumsDiv}>
                    <View>
                    <Link to='/albums' underlayColor="#1a2639">
                    <View style={SearchStyles.albums}>
                        <Image style={SearchStyles.albumsImage}  source={{uri : 'https://muzikonair.com/wp-content/uploads/2020/12/5-768x1024.jpg'}}/>
                        <Text style={SearchStyles.albumsName} numberOfLines={1}>Solmayan Şarkılar</Text>
                        <Text style={SearchStyles.albumsSingerName} numberOfLines={1}>Cem Adrian</Text>
                    </View>
                    </Link>
                    </View>
                    <View>
                    <Link to='/albums' underlayColor="#1a2639">
                    <View style={SearchStyles.albums}>
                        <Image style={SearchStyles.albumsImage}  source={{uri : 'https://upload.wikimedia.org/wikipedia/tr/c/c7/Dua_Lipa_-_Future_Nostalgia.png'}}/>
                        <Text style={SearchStyles.albumsName} numberOfLines={1}>Future Nostalgia</Text>
                        <Text style={SearchStyles.albumsSingerName} numberOfLines={1}>Dua Lipa</Text>
                    </View>
                    </Link>
                    </View>
                    <View>
                    <Link to='/albums' underlayColor="#1a2639">
                    <View style={SearchStyles.albums}>
                        <Image style={SearchStyles.albumsImage}  source={{uri : 'data:image/jpeg;base64,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'}}/>
                        <Text style={SearchStyles.albumsName} numberOfLines={1}>Anti</Text>
                        <Text style={SearchStyles.albumsSingerName} numberOfLines={1}>Rihanna</Text>
                    </View>
                    </Link>
                    </View>
                    <View>
                    <Link to='/albums' underlayColor="#1a2639">
                    <View style={SearchStyles.albums}>
                        <Image style={SearchStyles.albumsImage}  source={{uri : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhpftp01nK7J-FZ7OJnY2KT9pNkTioN3kt4RERw5y1IFTcovwQnI3DiNLIf3TdmnyND1Q&usqp=CAU'}}/>
                        <Text style={SearchStyles.albumsName} numberOfLines={1}>Rolling Papers 2</Text>
                        <Text style={SearchStyles.albumsSingerName} numberOfLines={1}>Wiz Khalifa</Text>
                    </View>
                    </Link>
                    </View>                    
                </View>
             <View style={SearchStyles.singersDiv}>
          <Text style={SearchStyles.singersText}>Singers</Text>
          <View style={SearchStyles.singersWrapper}>
          <Link to='/singers' underlayColor="#1a2639">
          <View style={SearchStyles.singers}>
              <View style={{backgroundColor : '#000' , borderRadius : 100}}>
                <Image style={SearchStyles.singersImage} opacity={0.6} source={{uri :'https://coolwallpapers.me/picsup/2617516-dua-lipa-wallpaper-download-hd.jpg'}} />
              </View>
              <View style={SearchStyles.singerIconDiv} >
               <FontAwesomeIcon icon={ faFire } color={'#f85959'} size={24} />
              </View>
            </View>
          </Link>
          <Link to='/singers' underlayColor="#1a2639">
            <View style={SearchStyles.singers}>
              <View style={{backgroundColor : '#000' , borderRadius : 100}}>
                <Image style={SearchStyles.singersImage} opacity={0.6} source={{uri :'https://w0.peakpx.com/wallpaper/262/800/HD-wallpaper-cem-adrian-art-fantasy-luminos-yasar-vurdem-rose-black-white-man.jpg'}} />
              </View>
              <View style={SearchStyles.singerIconDiv} >
               <FontAwesomeIcon icon={ faEye } color={'#17b978'} size={24} />
              </View>
            </View>
            </Link>
            <Link to='/singers' underlayColor="#1a2639">
            <View style={SearchStyles.singers}>
              <View style={{backgroundColor : '#000' , borderRadius : 100}}>
                <Image style={SearchStyles.singersImage} opacity={0.6} source={{uri :'https://i.pinimg.com/originals/6b/18/b9/6b18b96ea039df86bcfcadf84f172887.jpg'}} />
              </View>
              <View style={SearchStyles.singerIconDiv} >
               <FontAwesomeIcon icon={ faHeart } color={'#f85959'} size={24} />
              </View>
            </View>
            </Link>
            <Link to='/singers' underlayColor="#1a2639">
            <View style={SearchStyles.singers}>
              <View style={{backgroundColor : '#000' , borderRadius : 100}}>
                <Image style={SearchStyles.singersImage} opacity={0.6} source={{uri :'data:image/jpeg;base64,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'}} />
              </View>
              <View style={SearchStyles.singerIconDiv} >
               <FontAwesomeIcon icon={ faSortAmountUpAlt } color={'#f3f169'} size={24} />
              </View>
            </View>
            </Link>
          </View>
        </View>
        <View style={SearchStyles.playListsDiv}>
          <Text style={SearchStyles.playListsText} >Categories</Text>
          <View style={SearchStyles.playListsWrapper}>
          <Link to='/category' underlayColor="#1a2639">
            <View style={SearchStyles.playLists}>
              <View style={{backgroundColor : '#000' , borderRadius : 15}}>
              <Image style={SearchStyles.playListsImage} opacity={0.4} source={{ uri : 'data:image/jpeg;base64,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'}}/>
              </View>
              <FontAwesomeIcon icon={ faPlayCircle } color={'#cabbe9'} size={37} style={SearchStyles.playListsIcon} />
              <Text style={SearchStyles.kindPlayList} numberOfLines={1}>
              Hip Hop
              </Text>
            </View>
            </Link>
            <Link to='/category' underlayColor="#1a2639">
            <View style={SearchStyles.playLists}>
              <View style={{backgroundColor : '#000' , borderRadius : 15}}>
              <Image style={SearchStyles.playListsImage} opacity={0.4} source={{ uri : 'https://3.bp.blogspot.com/-7Kc3bI8wu6o/XGunuAJhEWI/AAAAAAAAGXs/5P0Gz1copNQbV8OVKPFi3rbN1iCj7JAoACHMYCw/s1600/wallpaper-music-background-triangle-color-paint-electronic.jpg'}}/>
              </View>
              <FontAwesomeIcon icon={ faPlayCircle } color={'#cabbe9'} size={37} style={SearchStyles.playListsIcon} />
              <Text style={SearchStyles.kindPlayList} numberOfLines={1}>
                Pop
              </Text>
            </View>
            </Link>
            <Link to='/category' underlayColor="#1a2639">
            <View style={SearchStyles.playLists}>
              <View style={{backgroundColor : '#000' , borderRadius : 15}}>
              <Image style={SearchStyles.playListsImage} opacity={0.4} source={{ uri : 'https://wallpaperaccess.com/full/267434.jpg'}}/>
              </View>
              <FontAwesomeIcon icon={ faPlayCircle } color={'#cabbe9'} size={37} style={SearchStyles.playListsIcon} />
              <Text style={SearchStyles.kindPlayList} numberOfLines={1}>
              Nature
              </Text>
            </View>
            </Link>
            <Link to='/category' underlayColor="#1a2639">
            <View style={SearchStyles.playLists}>
              <View style={{backgroundColor : '#000' , borderRadius : 15}}>
              <Image style={SearchStyles.playListsImage} opacity={0.4} source={{ uri : 'data:image/jpeg;base64,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'}}/>
              </View>
              <FontAwesomeIcon icon={ faPlayCircle } color={'#cabbe9'} size={37} style={SearchStyles.playListsIcon} />
              <Text style={SearchStyles.kindPlayList} numberOfLines={1}>
              Workout
              </Text>
            </View>
            </Link>
            <Link to='/category' underlayColor="#1a2639">
            <View style={SearchStyles.playLists}>
              <View style={{backgroundColor : '#000' , borderRadius : 15}}>
              <Image style={SearchStyles.playListsImage} opacity={0.4} source={{ uri : 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWFRgWFhYZGBgaHBwcGhwaHB8hGhweHhocHh4cHhwhITAlIR4rIyEhJzgmKy8xNTU1ISQ7QDszPy40NTEBDAwMEA8QHhISHjQrJCs0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAKgBLAMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAACAwABBAUGB//EADIQAAEDAgMHAwUBAQADAQEAAAEAAhEhMQNBYQQSUXGBkfChscEFItHh8RMyFEJSFQb/xAAYAQADAQEAAAAAAAAAAAAAAAAAAQIDBP/EAB8RAQEBAQADAQEBAQEAAAAAAAABAhESITEDQRNhUf/aAAwDAQACEQMRAD8A+XBvp5TzLkq3TwvbgYpQ5qO4R+Z4Id+2lprrbmuxS3GsnOvqpFEJPqr37Wp+7+WhEibVeDVW2euo191TvP6qBVyJ6NxCrK3qqjWnpKopU+jBVoSNEx7t4yRU3gADoBRLg6uYJFDcTXI3HbPjZHiOaXEsBa05TMca09kg+SramDI61sgY8tMiKcQCOxRsS3CqVhwO5IUYd00ANMxMTSefA5J+z7U9m8GOLd5pa6DdpuDok/nn1SMO9kLcOSg019P0pHqrFUj4EyPfsb80xhAPESQJ4WEiad1RaoR1RA17TjtcG7rAyGAOguO8QTLjvGhPAUWce16quNNBxv53RBpIA7ZJwVRyNv1mjD4JI1uBmOFY+OKrcgZVynhxUkdxly487o6nggdUWIwtcR/8kjqEsAx5r+D2RA63rf0patOycpiVuegPTXU6EKpR0uC3k1rTBcAYBA0kzc8gUgFNYaRXlr/JVSkJrogiZzr6DoqaEwOJImTYATkMh8KAHzzn3VSdK1CKDX4kKb3mSIs09EJZCnWaJUZy5puG8iYMSIMZiQY7gJZEeURthRxcqoUKdtG7vEMkjiRBOsCY7oN/QKKuOW8TJJ15oGG9AaZ5Wrzyr+EQzkfqo86qFvDtK04zoGiaKwOudlZrl5ZCqkKo5laGRxrGfEIi2xzk8vUeSr0n8KmsFa8vOH5HJVIVCRJJ5+QoCiLYMG9jbL0KJgT4SbhvFLTly5qg1adqexzpY3dBApvF0UANTeSJ6pRHn7SsOBBjXorYYM0yNQI6ixCOONVbQPB83Rw4Fg8/Kpzf13torarcErFlQq8+U3dTsLAc6YFgXHkIn+KZkmVoRmt+XQW6JhYiDPIVTBwot4ISzNP3Y5eflLLVNyriYYEOk5UpM150514ZqnZDPOvwiLQCcxkeor8dVbWyI3gAASAZqZAgQLxyspPhZGStxk0EcBWB5dXSDPCncICkmxJJn1PX8qNMc1B56KA+dEy4jDlbyisqiEQHnBHBxI8zTGBBFsvxceckbCrymn4bFvwNlkwOnKtZ/SzsfvHegdAAOwoF3/ojGyN601XRjMrO/eMr/phABr8Ln4+DGUL6l9WGz/4N3T91ch0Xzz6gBOevsn61O8O58XIdTz2Qt9k19D+lnNDUd1y6XkQcqfiVzrW36VFJnVZVrC3YfkKMwzIDZLso8vyWgtQ4uFEWsDQz4dF0cRxnIERrftlMKt05zWqcGTe54n1lQM8/KqRFBYACRNxNDWlPygLITi0zqjZgp0uMob8fKLd15apjmEfj8gqi3SyR8Qj19lV4ppzVkWmeqsCnxn36IKqaa1UHnnl0IRNaSRA0AFe0IEE0xz/CIEjn8EdrFLamOJppas6/PclL6sIzumASqhHHynIIsMyVjDRsCaxiuRpMkHDQbnt+/M10W4UlA/ZSDBRc9aTDmOaoGxU1XQ/8XzogxMDlTh7rO/mfhXPAOXzrIVFp4aaLU7CyQnDgLO4qblmDVYByTS1OZg/bPmqcymZ6zblxTyVe5xWtmHHlEvGbl6K7mcFyybx80zTcM6T/ABCW9+uqMNjje3vks8/WVadn8/HX4XW2TELeA/Q4rmbMRImy9RtGDgNwGua8l8mWlthAg701r4F05vIjnWR/1AxBlc7acSa81T3jn6QsznyDSdeCrWkyW0Lxn5xWd58/KclOZ6rm17bZyQSoicxTd88KyuWsjWYpDcoNb66IJqJAMc6+vsmkVhA4X+F0FYSW+yhanNb57eygAnzsn0vElrF0fpeO5j5Z/wBEOaZaCIcC030N4ScBm84NmB7W/C9WzYMJ7QWzvCmnEVU65fVTZwrG2DD3Gt3GgwPugSvM/Utj3DOWUWXq34LnNO9TIRemei4u07PM1rrwTkZ5ee3T7+t1CFsxtl3Zmn9yWcgR1QqwghEfZFuwp7fxTS4ByYGfjSVHvJinUTWsmdao8Jk8LZ+XTipEaE1raWrxRsYmtYrjXOehDKeef1OYyOttclTWp2G0ZDLjczfSiuNs4aMFgWl2zTVKwG1EzHddXZWGI6ovppM8c0bNenke6J/06aEbtjUHMUmljTuvQjYPttdAdjIIof1mPdHlDlleUfsRkjTvXJYsbZzmF7PG2E8Ip+PwuZtH0/yLjkjkqdZeYdhx2881TGMHEAcc+3l10MfDcN6S47wANbxETxAgU0HBYXMIoafj2P6UXPGVnEw6Gs2giopQ10zVOGce/wCVA0VqNNa9IH66UW08ujqbSWYDnmlYBzFgC435FKI71WpzDcTQDXgL8/hKLTT00zWV+s9ZUx0Gi2MxDHnBKwsKq6ON9OcxjHEEbwltqtkibzcHJaZrPxc57igALjIyHYCi1Owwk/51U6vVZwVuzmj/AMyK8jTWt+P7TGYfFaMPDRMujP5suOC9xcbkydSbnqp/guph7LPmkpn+eiuY60mJHEntNu6W5uhhNZhyYkC5qYsJjmkvnzupZXK95G2vNAAjZykILhmA7dMmy9VsGIYrSvReTuQBxXptmeCBGV0rE6+OqRM8lzPqmxn/AKHXWi37PiTzV4xaKHOiIxvqvHnZcTE3i1pgHMiBpXpwXOA4j9L2JaQ4hgkkWHKV5jaz95Ivmmqe2Uz0/VKdUEeH3omuZPH8od3JLg8QsvyT8NqjTO8XEnPKSdT1TMMd04vOT2ikeXWnBZUHz+pDBTzgvSfQMFsEloJIN7Aaaq5G0sz7rjHDaL3n+rRs+zUmy14n052+4MAiacCJXovpv0N0Ax16StLZme3T5STrz+DgRTVdbD2MtDSSDIBobc9V0MT6L/0RJOnvHBZ8DByJ+Etamp6T5zXp08FggD3Txs0xRI2V+Rrw08/K7my4cxRcercsdeq420/TDH25rl/+DA3XA71jbjHJe8xNnpFFzdr2EEbrW1NOorThRVj9v5VZ11862z6fBLTxiAaEiRMzHhXK2z6eQTuzpIqegJrpXmvZ7Xsw3o4LkfVjP3AQCYpaYXR3o1OvIYmGS4kwJNZAAHQCnQImM87+V0WjaHAuNIHD+q8EUic6Upzm/pw4Qs7PfpEyW3ZiQSMgJmOIymtYQHZ11MDBnOZ5razY2AS90D1T8etL+c/rh4WCd6gvQey2v2dwAB4fMERlXit3+2GTewAH2gaZI3YzC2A2XTQg5Z0TmSmMxyHYJGXos/8AhWy67toH/wA21S37ToJT8YqZywHCgWTdnZ8J2+DcD2VOeAJiE5lfJG9rN0ZVymtLUv8AxKfjNn/pcLadpk3Wf/YcT3R5SOfWvaOb28okvaRxHH9rViRJinhzSMRuinh6ijiSAIAjSuten4zQnyqjWlEWI4nlWwf38r0P05jsxQrhYbKr0Gyvo0ZfHEJWHcXjTs7t10mSKihscja1ke0skT258UgzWU3CNIJRxlcEubUnVcv6jsdQ9ovccCu2xgcaVzQ4eykE0p5wVTJ5w82zAJyXc2L/APmd9gcXwTXlotmFsgBtFeFF29jw4G6KlGs8g/SWT08ZtX0R+Hvm4qBYyPhc0thfQtqwC9hZEG8xXh2XK+nfSGtcS+DwkU5wifCzrk7XnNk2cvNjS+kwu9s79wENgA9c/wAwt+2YbW0a0DkIC8y7anAuDhUZ+UVzhzXlXr/p7mvePWlq25ZzqV7RmIzDYPuEAQJMknrVfLvp21bp+0mTYU8laGfWiHfcRxg17Kf0xNc7W9xbmPWu20l29v7gkgkUG7w6fC4u17W1joZYmp18PsuXtv1F7yQw0OTYMQOM8PKJ2y7A4t3nugZhp4GYjWAaqpJF5zM+67mwY5FQZgxNDJmpqKZeFej+n4hE7wIIyt0PBeU2V4gmoEzW9Tzrf0XT2Xa5MT2WG89LWfJ68OmBSTB76ri/VX1dBAjKb2FEh/1GBI4x8rnYu1Aiol0gySaCsj27LP8AP8rL1nMXLLt790Te/X8rym2FxdSosOORqOvJd7bsYuO71Gay4rGUO6A4Z8b/AAurx9NHniwEjj8/jzJNLA2+Vx6rubMxjDL2BwIIgkgAkXppFNeK5W1kAwcqUNKcCJFOI0Rzgz0t21Ra3mqwv2sya0zuie8CVhxnSYup1aNd/wDT37VRTD2nwrmOfw81VbxmNJpwAk9gsvKxldXrsO2qUTdoYf8AoGxsdKZeaLijF/qtuOYifB/Uf6D/AEdgbQAKCvmqTj7U5323k0GZPADX4C5v/kSo3EMgiQRURdP/AE9H5dhmMHNcWuBa4GCDIII04hJgKPeTU1zJzk31S97yFF0jjpBqtmHp557o9xOw2LfPt0zJX+RpTlyTsaXQTFQKAAARAtETS4XQwdnLgLmBAk2FTA4Cq2f/AJrWiXuaNC6/aqrx9n48+uKzZuNBWM+nKfdbcAEBdBmCwCjqG4BnVVtAwmO+15cIH/qQdRnZOYqpnPzpDHGE5jA5uqpm0MGs05fpasDGZWBTOqPFOsSMrRunRbdnfmgfghzoH/sYFovxyCz7TjFgIBAPMfCJGdk+9dclvXVDgfUDhu+0wRWQvI431N5z5INo2uGtLXkkj7pEQZNBxpHdFuee3PrXt7Rv1alllxvqEjWb6fK8hs+1OzK2M2r7eKnyn8Y3tegxto3mQSJjlOWWa8ntwlxpX8c1vbtbgBJoKgZa+3osm3EEhzbpUs3lIZjFvEWrXuFMXGINpGl9UxmD/oBWDaUt2E9stcDzjy6JXRP0vxo2DaRI3iWnjnFY80C7TPqoAIgETS/nU/3gOBJrOVokBOwgRABvfhxPSmfBW6M7zZ7drZtrDjLn3PYLp7PtwZ9whxGRt1XlS8G1TFk87S5o3rC3YR3z8hTY1ms2O87aiDDqGbcDS4i+iJ21tmGlxBAmY/6isRlNl5xu3WJuLfpW76jUmhmb6g15zVXOFyO9tG1RZ0EiKHLgfT+rm7RjgiQIy91hftcgceJN7ZZJD8SeHHzun6PkacTaZp5HJZMXGm6W/EJgdu8+SkPH2l0ihAjOoJmOFFGqVsgsTEEd+OlOHErE/GImIqIqAcwaHI2qPlR+IkvOYi3CbiDM81lqsN0tz0O/Wh85pbtUG9qD/e4WGrXPdHPxDmZN55xdWH+etlnLoRMIgyYOWpkU7SVn0SnsMlEXarPvxbkr/wBFUqpTyVJ0VnFYWMaGnf3nF7pmWnd3WtGUQ4k5zog6jrM+yrp9eiwsIRcZfKfgvYLmq4rtsJEEmBatrzTmhbjLrmpHR/tP49E7b90GKeUWV+1l5rJXNbjZzaKGsrb9K2J+M4tZE7rjBcBRok3I4KvLrPX7c90TtoKczaRuwTPtW/WVzMR+6SLoGP3gYMEQIJvJvJtkndcPP7c9uozaRnQeyPB2kNMzIz/K4I2gnzpVC7akvOK1+3Y9Z/8ApCIbkM1ytsxy6+tlyG7U6/Q9ctLFaGbSXENiSaUupuo59bt9Rb30vPweA45JW8SYp6e62MwvtJMnpIpdc7cM2UWsetAJ7mB/F0NjMSScqinCkfxcYuLaGZFFYxTPnsp6bs75JggEWkeSjLWipBAoYzg1kLnbNtBrVad8XIgHwKoilDaINiBK6OzbS80uIusrGMcRWMluLKj7pAoATbOBoqHVbRtH2kQD/wDXHzkuX/rJNhJJgD0FfIWzaGQ4kLI9wH6T4vO+Nez4RP8A1HnH9KsRoBN6UWJu1ESD0KrGxyRc+R+01z9NG7Q4RU7sCROfCOaxMxNRXKeCNuPHA8wDa18q2ssrqigWetc9qz+jazF1yqiZjSRW58+VgD6EQZpHIA73W3YqOxjfM11rmpv6tpt3nbGwmjjHSqzbbs7Gs+1zi+c43d2O8ysuw7QXOALmjVxAFATcqbU8GT0S8k3bJjNIvFQLEG8HKx0yS/8AQxFde/5qo8iJDvurLYNBQCs1mTTTWi3RNNL8qrPy9s7ro8faHODWl1gAIAAgTEwKkSamSshKNxukl9POMyst32zqyfIVzc/yoQRy09ePuoONDbj5NFn0jSb/AN9c1YMc586oN/XyAPYBWGmYNLXynPjCuVUot6UX+nnhSflMkcE+n1sIIuItfUSPT4T9jDS4B5LWkgOIEwOMSJWZyjnhdMqLWjExAJgjtdTD2rdsenMHqsoeM9K8LW1QHErMA6ZK5eF5daMTHlAMX5H9ivgSX2HH9CNEL35SYuJFzTKafpK6HTibxYXtn8SqkugXy9f2kz58K5hRdH0xxPnllZfwSm4nrMqNPmSXS637Btha7OCbacFq2jaPtAy04aLkludBXzont2j7YuqzorBl8WHkedkLWlx4DiljE0WgPbEATTiaVBke1UfR3hjKHyq3sxN6hA8C5oaRlWqhxC2tRxVd4n6dt53DAN4JTNm+ouH2uEghc7aMYu/aW18dR7581Pl7Vz07GPjGYBz5rA/Hqd704pLMWOirEcDoVfl0p6PbjTT3gRyQvec7LPunp5wRhxF9L1S8qOm4b6GlafioNz2R4L5Pl5sPAsxcrD4U2n1sxzvCpHzQUr6dFicaETQ16iQNbEqzj2qo90zHZZ6nl8VNcJk5T4bpxxCWiMzF/Upe/rU+CyhIsTkOXAWzgeij2fkphkgGg0qegJvpRAypPI+gRue2B9vOvkU5pTyRQ5Zc7qb6HfQS5LI1/McphE70UIA14/opWpq94mh53715cbV4oHCKeA5g6qEdf1zyVsIkTakxeM4nOFHDRo42H6zRF5Nz15CEsf1W5PoEEe6dUGGao58lLqnRe3gUk4fZbf8AFwY15H2uJg0ru0OufsgewXXXLxF9sLmRE39vCl+c/JWzHYDb+V/KDFZQVBBn7RP2nhX3rzVeSWYt7/EKmt3rZD2/SaRYnl2Qe/slaAg+eZq90iDbMKw1U+MuvnBQpR4+dRKJskgE9Tlek5CttUN9EbhpCXQbiYe64tLg4AkSP+TWJBiY6IN6KT2QuN5uonKKJoBkzEWHGop6k14JmFFQTBinpfokkZ556IwZrbkfCjpOkHUBmuUpOKKGbqNaWsBIP3CmomJHUHslMxBw48cxHHJaeXU84BjfurbOk0OceZKscND3BjpaCQ10RIsDGUjJNxHSZ6chAA9FnJus6oBOmVe99FbIUeyL3rSmUdkJ+PJRNcosN/3QB85IHjKFdQJrXS4qPg+qvztT4ie4eT/ZUI+2xoaurFqDhkUvem6YHmN2TEzEmJE5dSl3phmUQdHVUMz7mv8AEO/05c0fCFivkk0rWkD0FkAHlVobs/2OJIBaQN0mHGSRRsViK8EDGSCbx/Pwpstp9kLbJMXiivcztTmOZv8A1TftpSw1OWdb8lRf2y/ijkquhbg73noo/BMSR6JmGd2vlellv2zb3OYxhawBrSAQ0AmXb33EVd1VTM57K1yZikAinpOfX24ICM8pRGhqOitjCfX2WWvpyWgNKddeitjSSABLjYC9lHSqaJgUB4zx4zRZ01NdFv30KfgbE543hEWS3kVIoMhw41/KWMQik+pRP+i12WvEQT2HurOISN2KCTqZjPy6ii6oVKcfD6KNaM1FEyDjQDaKC5rMX638lJLREzVRRBAHnx6+FMa0Vrras2i3W4HooolQB10TiSXG9ZJjibwKBRRIAN1BpS2dzx0UUQBPcSZJmgHQC3ICiJwinoookZ+FVpbqEMltPMvOitRV/C/qmN3hqban2SeSiiNHAPPlJQiSoooAuUCO+ef4UgmTHawk+2SiiCUxtYsZjgRXVRx976qlE4DGuEVy885oSYJg6U4c1FFqhW8YiaHsrZikCIuQZzpNAfLBRRR5VSEwZBIzBF5pn39ELKEWIHzpn7KKKb9OD3uNr9EvGxJMiyiiWigCeWeXSFr2HbNze+xjt5rmfe0GN4f9Dg4ZFRRZNcsmKanJLdVRRTSqnu5WFrWCkKKIJ//Z'}}/>
              </View>
              <FontAwesomeIcon icon={ faPlayCircle } color={'#cabbe9'} size={37} style={SearchStyles.playListsIcon} />
              <Text style={SearchStyles.kindPlayList} numberOfLines={1}>
              Sleep
              </Text>
            </View>
            </Link>
            <Link to='/category' underlayColor="#1a2639">
            <View style={SearchStyles.playLists}>
              <View style={{backgroundColor : '#000' , borderRadius : 15}}>
              <Image style={SearchStyles.playListsImage} opacity={0.4} source={{ uri : 'data:image/jpeg;base64,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'}}/>
              </View>
              <FontAwesomeIcon icon={ faPlayCircle } color={'#cabbe9'} size={37} style={SearchStyles.playListsIcon} />
              <Text style={SearchStyles.kindPlayList} numberOfLines={1}>
                Gaming
              </Text>
            </View>
            </Link>
            <Link to='/category' underlayColor="#1a2639">
            <View style={SearchStyles.playLists}>
              <View style={{backgroundColor : '#000' , borderRadius : 15}}>
              <Image style={SearchStyles.playListsImage} opacity={0.4} source={{ uri : 'https://i.pinimg.com/originals/c0/a3/6a/c0a36a5d0604a7fd09ca365d3de97ca3.jpg'}}/>
              </View>
              <FontAwesomeIcon icon={ faPlayCircle } color={'#cabbe9'} size={37} style={SearchStyles.playListsIcon} />
              <Text style={SearchStyles.kindPlayList} numberOfLines={1}>
              Business 
              </Text>
            </View>
            </Link>
            <Link to='/category' underlayColor="#1a2639">
            <View style={SearchStyles.playLists}>
              <View style={{backgroundColor : '#000' , borderRadius : 15}}>
              <Image style={SearchStyles.playListsImage} opacity={0.4} source={{ uri : 'data:image/jpeg;base64,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'}}/>
              </View>
              <FontAwesomeIcon icon={ faPlayCircle } color={'#cabbe9'} size={37} style={SearchStyles.playListsIcon} />
              <Text style={SearchStyles.kindPlayList} numberOfLines={1}>
                Party
              </Text>
            </View>
            </Link>
            <Link to='/category' underlayColor="#1a2639">
            <View style={SearchStyles.playLists}>
              <View style={{backgroundColor : '#000' , borderRadius : 15}}>
              <Image style={SearchStyles.playListsImage} opacity={0.4} source={{ uri : 'https://images.unsplash.com/photo-1500835556837-99ac94a94552?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80'}}/>
              </View>
              <FontAwesomeIcon icon={ faPlayCircle } color={'#cabbe9'} size={37} style={SearchStyles.playListsIcon} />
              <Text style={SearchStyles.kindPlayList} numberOfLines={1}>
              Travel
              </Text>
            </View>
            </Link>
            <Link to='/category' underlayColor="#1a2639">
            <View style={SearchStyles.playLists}>
              <View style={{backgroundColor : '#000' , borderRadius : 15}}>
              <Image style={SearchStyles.playListsImage} opacity={0.4} source={{ uri : 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBIVFRgSERISEhEREhESERESEhESEREPGBQZGRgUGBgcIS4lHB4rIRgYJjgmKy8xNTU1GiQ7QDszPy40NTEBDAwMEA8QHxISHjQrJCs0NDQ0NDc0NDE0NDQ0NDQ0NjQ0PjQxNDQ0NDQ0NDQ0MTQ9NDQxNDQxNDQ0NDQ0PjQ0NP/AABEIALQBGAMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAAAQIDBAUGB//EADkQAAIBAgQDBQYEBQUBAAAAAAECAAMRBBIhMQVBURMiYXGRBjJCgbHBUqHR8BQjYnKCFTOSsuFT/8QAGgEAAwEBAQEAAAAAAAAAAAAAAAECAwQFBv/EACcRAAICAgICAQQCAwAAAAAAAAABAhEDIRIxBEFhEyJRsRSBMnHB/9oADAMBAAIRAxEAPwDuKDkyHEnx3NpYpU7SvxHDh0ZD8Q0PMNyM+VjBNcmc1lHAYq5IPxlvzOklqs1Ns67H3l6j9ZylKtUuVzsHQ2Iub3B3EujH1/ifMOjAH895r9VL7ZIizssLiAwDA3BFxLgrTm+D4i+nJ7kD8Dj3lmqubU7KNyZCyThNRjtM0W0aBa8pV7c5FUxmUdfylGviC3Kx6bzTIm5WgbDH0A66bjbx8JyWJYKdvPr8hznVqrgZjoPPfy6zm+K0LOxGzHNtzvr+d4N+pIl7RVQBhob72I+n5yyi3tfcaH9ZmCoyNe2htmXUX/QzVwlQHVdQb29Nj4zLJFxVrozZp000B6iTfxAQXb5AbmTIlkUnTu3+UqVFB71r328+Qms87xRT9s0WlZZXEZxqAt9hfXewj6KWMx8XXysqg6qVJ35a29dfSb7W0YbEAjyIvNVleTHyYJ2iZXMMxhSYR5SZKyqHKNJQxVQiaSiwmZjReVjhcrZLVFF6xMaqm8eqywiTr6AmwtG838JR0mdgac3sPTsJmsblLZSRFUTSZ7prNOsZTcibxgorQMZWwquhRxcH1B6icfxDAPTazbfCwGh+U7ZaotKuJRHFmF1mGfD9RX0wlGzmeDOVzjf3dCOesv18HTcd5AD1XumOxFFEYBAApF9PT9Y5nAU6ysOOocZbI60Zi8FIcAMDT5k6MB5c5DxWrkNqfct0FjGcS40ydymLv9D4yOviqtlDlHc706iqw22F9RKxLHBukVFogwfEahazBH/vpoTbztebFanUcADLTuVXKgILZmAude6PASjSqi4XIKLkjXan/iT7pm1jqYoUgwsXV0Y9WF9h6ys2SLjd1/r/AKW5Joz+J/wqqiO5DI2ZUQXKpfQseRNr+RhORxuKzu7a2ZmKg6kLfQH5QnNF8dJIz+rWj1hZHUp3mbU9oMONFLuf6VIH52kB9ozypgD+ok/SckMiUakNtHP+0OFalWzrpms40JHQg28pPhirqHXnoRzDdDLfGcSuIVe7kdM2oIIINuomPgHNN9WLA6MAumXr5zPI1Nae0Q+zoOHWW9/xgg7ectYnHaWHujeIWRUNRtghsB4jT57ShhMzjNyOvgT5TWGPK6i3WirUSaizu1kFzvfkPMzQamlJc1TvvyGwJ8B94/DVaaIDdVG2XbvcxM/GOXN75ultQB0E6E44lTdv9A2V3xDOczHXkOQHQSHFUs4094beUsLTUGzXLDdEsWH9x2X56+EkBfZT2akWtT1c+bkXPysIqU+xqNduv2cziKRtoSPmRzkvAkzVBTN9SCbne2p/IGdH/pKv7zEjLa5sWuNrm2o84zC8HppUzB++gzrcd24BurG+ml7Rxg46ltA47LOPUlGC6d029Jj9uRYfFbQH4dLXI6+Hr46+NxIRcx15WHM9JlUqLVLsigWOqXGnleZZ482tC70UHpHcgcySSST+c6SlfIl/wL9JWw3DGYjMoVfi8fACbD4fTSVC4x2NRaKVC95rU6WkrYbD6zSZbCdMIWrGilUWZ2IpGa6pGPREuMfYUYa0pYRJZqUwIxRKq2Ki3gxabVNhaYVNrS5TxE6McUXEi4gaid4MXTnf3l87TPHET+EH1mpVqEzKxGFIOZBcc16eImGblHceiWhp4o3/AMx/yP6SBuLPf3Bb+632immT67SN8N1HlOHJlyemCI3xJez5bHUEA3tr1lTEVqh7q3JJsAAby+uHbW1xf96x2GsjBityAbDa56kzFeTJ1F6/LIcd9jeEez5X+ZWtnOqr08TG8SQO590ZT2YsALaXY9Tvaan+pPb3Uvy7xsPOcjjcRUFRiBm75JO++tgJpLPjqsVN/llWoot8QY00XQOzsVC/DkC+8fUC0pCoxHeJO5tckLfkOkudsKilSLHex3Vh9JVWnOaWVz/yVP4MpbZh42kVa9hZyTz35j99Yk08VQzAjny8/wB6QnTCeiQ4vQbD13TdAxKf2HVbHyhTxQYafMcxOl9pOHGuudRd6YOnN03t5j9ZwzKR1BG1tI8uKLZcl+DeWrzXcdZoYFkqI7Gy1EJCqdQ5AvcfPS3hOZwONNwja30Fhrc7XH6Tthw2h2GcdpoulnZSXJN1K8jc2tMoeOnKmginZk8VrlqWSmrZjV7PwIzG1h0sBrNjBUCqBT0HraQ4bCU6dsqKrczqxv4FiZn8Xq1AxYGoENsoGYCwHSdikobq2V8lvitAZc2ZVIuQpYDMOdhzOkyqRb4b38L/AGjsDhC5zOdPUnznSYTDKo7oA8efrOeWJ5JcqoS2V8Dh3y2K2HjZZI1OxtobdNpfC9JE9O03hFLRdFerVyIWPIaeJ5CYNbFNffUte9+huTNDjNbZP8mPQcpk0kLG9t9hvYW0E58snKVLpfsT2yTidfMVItcjUEm2a/h8pb4BUuSLW7t/DQ/+zP4rg3QIW+IHTptoZc4E3fU8nFuXPSdEYWlJ99MT7OiVrS7SYESpXWOw9S00eNOJomaKIItRpElcSKq8qLSjQMkTeSumkpo9pI9fSa46oLKtfeQiSvrEyTRRQAhj7xqrJVSWtBZJTF5P2UjprLYGkTVgU3w6nca9Yi4dF13+skfeBGkylig3tDKWJYC5AsADMfH4gAC3vsfRR+xNXiq5abH+0erATmMdVs4A17gPqT+k4vMjGMaijOTLKVTyNzMHiQbtWswBuDlvuLDaaqOevrMjiv8Au3OhKKQR1F+U8zBGpf0Q3aNPhoaoLAEsFYkWsbWgy2mz7IYW6tUPMhB8tT9RL+P4KHuUIVjuD7pP2nZ/CnKCnH36K4WrORZL/eLLuL4dWp+8hKj4hqvqITmcJxdUTwZ0hexmXxXgVOtd6ZCVDuD7jnr4GajU7xiuE1chVHMz2Ki4/d0UjjF9mMSCSUyotyzllyqo+K4M6fthnUBwaGlTMb3qOCVUD0Un+0dZabjqE9nTXPmupLiym4sN+XnIOA8OemrK4Ui+ZHDg2OxWy6Dr85kowk04O/yaKMeN2Oq1UHeLAL4Bj62Et02psurKQeRIB9DrM/jPECjdmjEEDvEEjU8vSYPbk89Ov75zjzZGpVH0ZuSR1DYOmDdbjytb6R+UjaZ/BENi7E22AP1tNZ2Fp0xcpR72AlJ5FiakjLRp1kRtMdmc2AeoxZrKCeepsNhabGA4bTTUC7fiP2HKOwyTSpJHixU22VFGNxXBiohQ6X2PQzO4Bg2Rmp1EIKd5G+Eg72Pp6zpsRSlUi0uGXlaBx2V8U9pDReGJ1hh1nTGNRAmLmTobxuWWKNOS0qFZCViASw9OKlOaY6CxqU4GnLKrHqk3SKKgpRclpc7OMdI+IqIUlhTGIkdtDopAyRhMV6glV6uswu5Dsh42L0W80/7icxjMEWAqILsosVG5W97jxH3nW4pc1Jx/ST6a/aY+C/YmHkRUtGcls5VKhFrg/nvK3ErlkJ5hh9CJ0fGsGhfMoCtbvAbFjz85hmgWdKZBBNSmov8A1G33E8+MKnRHE732YoFMOgItcsfzt9jNUrH0aIRQi7KAo8hH5Z9Bjhxil+EdKVENoSYrCa0ijmMdxPJ3aNN8Q4bvpTBbIvO5AsD4TBxeMqVGVnTs7qP5evdBJIvfnYid9Sw6pZVUKo2VQAAPACcfxjgGKqVLrl/mWLPmACEgZgeenh0nl+VFuKilq9mEuqSJcHwiq1ibIu9z7x8gJ0FCklJLXsqg3J0ueZmZh8Z2d1NUOlJLOHKrVQqQp3FiNrHx3l/B8Qw9YXpVAzDcNcOPk2vpIw4oRuuxJUcTjXZnZm3ZmOl9CYuDQMRsR06TpuK4Ck13duzb8Qt3vAg7zJ4XQVnyqTlXVmsLkdPnOWWBqdPZFGvhadl02vHMTNABQthsBKbDWdUVVsqqGLSvFNK0v0U0iVki4pK2FFak1pbp1pVRJIaZmW7oqLZaeoDKOIeBYyN9Ztiw8XY27KbteSUZJ2Mkp0p18dConpU5dQWlelpJrw4poET5AYgpxacmRJUYJAkVyslQRzLEmqQwMYwjiZGxlWhWJeQV3k1pXxCzGc03QWVHqGVnq6yyRKWIWYrsLNHC1Li3WUqWHKOV5A6Hqp2MMI9pqFMwuLZgPymU42x1Zz2PUlrAFizWVRqSdhaaVD2bAWmzm1VKiVG5qFDA5B6b9Zo8HwAF6zC7MWy3+Fb2uPE9ek0K7S8eCNcpf0OMa2xSRaRioJTrV7SsK5m7zr0U5GvmEJUw73iS45G1YcibPeQYzLkYuxVVBYuCVKga3BEmpJMX2zrlcMQN6jomm9tWP/WcblJW2ZfJwOJ45mrvUsRTqFxY6nIwsNPkDJuH1b1kSmwVzs5BZVUmxJHMC97TCFAs/lymvwTCO2IQICSFc/LKxnNOm7XfZCds3Fo1EcrVrZhrl/lgBh1HTyMuYepk90aE3N7ayGumbff6G8ZTFhlO42PO086eeTdp0aqNG9TrXAI2MnpreZnCz7y9LEfOa9NZ6eGTlFSJaplhNIHWQ5jHo0qUXIaHIknKRitHhoo4X2WkVaySsRL1aVGWd+OP27FQJFBjLQE0ilQizTlhBKqGT0mipAXadOTZY2g0lYTTj7KSIGEYwkjRDCgZDaBWSKsHWTJE0RkASGqLx9SQ5pjxVgU6yShVM1aovKVSjFx2TRVptaamFqyl2Mlp6SZRvoaNhcTpIK2IlIMTH9mZyyc49spyZHUe8WlTvEKay9hqcMKvslbZJhqcWWqawnoxjo1SKeExqVFzIfNT7y+YnNe3jnJT6F3v55Rb6mZWAxTLYqSGGxHXpNHjVb+LpIiKe1WpdwBplym7DzNp5sfIWWDi9P8AZi9o5HDYYnUKSTr+n78Z2Xsjw3s81Z/eYFUHRb6n7esXhvBsgGffmBv5eE1jcaDQDQDoJWLG4/dLslKhMZw1XJZO653/AAkzKr8GrDZQ3irL95uUXMss8yyeNjm+VU/gtSOb4ZTdXKVEZCym1xoSNdDtNpVku8RxN8WFQjxQdkLmIGjSLyWnTnQsaQUOWTqIipJFSaxSotETLISkuFI3s5SQ6KvZxppy52cQpGhUVlSTIseEk9OnCtiodSlnNI1SPKzRFJERiESTLGmNoKEURxWIslUSONhRWqU5VcS7XaZ1VpMopEsjqSG8e5kJgkIc8YBFtHIsjirCiajTlrLIqUlLTky43JlIgZNZPT0jGeIGmUMbiyejRpGEhw7wnpQlouzy/CPsPGX8NiGRg67jccivMTI4axIB5lR67E/vxmmBpz/f7M+cmnCdr0Yo7LAYqnVvkPeW2ZToRfn5S5VpaTkvZbEIteoztYdnz01VgLegmjjuNOxtTGVOvxkdb8p7GTPjhC5dv0XVmmDaKHnMvXY7kk+JjO0PUzj/AJqekg4nWgxrm85b+JYbMQfAmS0MXXZgiOxLG1rg/nN8flxfaC0jo0SWESR4LDsq2dy7cydvIS4qTuWykhoSKFkwWLlmiiVRFkihJMFjgkriOiLJI2SWrRMsriFFZKcnVI9VikQUQoZFi2i2jSChhEYwkhEaRGDRGslzRmWOCySaK1aU3WaTpK705nJWKigyRopy2UgEgFFbJAJLXZw7OKgSI0EVhJQkRkk0MqtEVpYNORtSkuKZNE9BoRlJSISlHQzy7hlMi4PwsQfDWbSpf97CW+KcN7PEVAB3ah7Rf8t/Q3kdWkVRjzCnXxnk58N5GvkiqMjD61QBqM7X9NJs1rKLsQB1JAEzcAmUmo2oQXPU6EAee0pYsvUbM/8AivJR0ErL4zyZPhId0jVONpX/ANxZKtiLggg6gg3vMIYU9JNQoOp7pYeA29IPwlWmTyZsBT5fvnOh4BgLDtGGp0Ty5mYWEckd8a8jyJ8ek7Xhobs1LWuVGwAFuQ0leJ49ZLl66KirJVSSKseFihZ66ia0IFjgscBFEtIdDcsdCEYwhaLCABEjolowEtCKIWgA0iNIj7QiFRFaLH2jSIqFQ2I6R1o4CCQUU2pxVSWmWNCxcQoi7KNKSzaIUicQoq5IZJYKRuWTxCiHs4dnLFoqpDiFEC0oS1lhL4jozOJYJajIQdTdcw1GXf8AWVMZwcBCqnMzAgC1ttZdwilSL7A3t95ZcEtYcltfpfc+cyeKMnya2Kkzh2wVkItufpIEwHhOtr4G2h5GRJgfCLhohxOfTBg7i0mXAeE6EYMc/pHDCgbzN476FwMRMJ4TSwJqLolyPwnUf+TQo4cE2tpz8poKoGwA8pWPBu7LjEio5/iCjwFzJosJ1JUWFoRYRgJCLCACRYQgAQhCABCEIAES0WEAEtEjoQAbaEW0LRAES0dEtGAkLQhEA3LEKx8DCgGWjgIsBAQ6EIRjKy05Kq28zH2hFQELUwTrrEKSeEXFAQFILRliEdIVDVQDaOhCMYQhCABCEIAEIQgAQhCABCEIAEIQgAQhCABCEIAEIQgAQhCACQiwgAloRYQASEWEACEIQAIQhAAhCEACEIQAIQhAAhCEACEIQAIQhAAhCEACEIQAIQhAAhCEACEIQAIQhAAhCEACEIQAIQhAAhCEACEIQA//2Q=='}}/>
              </View>
              <FontAwesomeIcon icon={ faPlayCircle } color={'#cabbe9'} size={37} style={SearchStyles.playListsIcon} />
              <Text style={SearchStyles.kindPlayList} numberOfLines={1}>
              Wellness 
              </Text>
            </View>
            </Link>
            <Link to='/category' underlayColor="#1a2639">
            <View style={SearchStyles.playLists}>
              <View style={{backgroundColor : '#000' , borderRadius : 15}}>
              <Image style={SearchStyles.playListsImage} opacity={0.4} source={{ uri : 'data:image/jpeg;base64,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'}}/>
              </View>
              <FontAwesomeIcon icon={ faPlayCircle } color={'#cabbe9'} size={37} style={SearchStyles.playListsIcon} />
              <Text style={SearchStyles.kindPlayList} numberOfLines={1}>
              Hip Hop
              </Text>
            </View>
            </Link>
            <Link to='/category' underlayColor="#1a2639">
            <View style={SearchStyles.playLists}>
              <View style={{backgroundColor : '#000' , borderRadius : 15}}>
              <Image style={SearchStyles.playListsImage} opacity={0.4} source={{ uri : 'https://3.bp.blogspot.com/-7Kc3bI8wu6o/XGunuAJhEWI/AAAAAAAAGXs/5P0Gz1copNQbV8OVKPFi3rbN1iCj7JAoACHMYCw/s1600/wallpaper-music-background-triangle-color-paint-electronic.jpg'}}/>
              </View>
              <FontAwesomeIcon icon={ faPlayCircle } color={'#cabbe9'} size={37} style={SearchStyles.playListsIcon} />
              <Text style={SearchStyles.kindPlayList} numberOfLines={1}>
                Pop
              </Text>
            </View>
            </Link>
          </View>
        </View>
            </ScrollView> 
        </SafeAreaView>
        {musicFooter ?  <MusicFooter /> : null }
      </>
    )
}

const SearchStyles = StyleSheet.create({
    waveImage : { 
        width : '100%',
        height : 100
    },
    searchText : { 
        fontWeight : '600',
        fontSize : 20,
        position : 'absolute',
        top : 10,
        left : 15,
        padding : 15
    },
    SearchInputDiv : { 
        flexDirection :'row',
        justifyContent : 'center',
        position : 'relative',
    },
    SearchInputDivWrapper :{
        width : '75%',
        backgroundColor : '#3e4a61',
        padding : 7,
        borderRadius : 17,
        flexDirection : 'row',
        justifyContent : 'space-around',
    },
    searchInput : { 
        width : '80%',
        color : '#fff'
    },
    divsWrapper : { 
        flexDirection : 'row',
        padding : 25,
        flexDirection : 'row',
        flexWrap : 'wrap',
        justifyContent : 'space-between'
    },
    divs : { 
        width: 120,
        height : 120,
        backgroundColor : '#3e4a61',
        borderRadius : 100,
        padding : 10,
        position : 'relative',
        borderColor : '#f85959',
        borderWidth : 4,
        marginTop : 50
    },
    divs2 : { 
        width: 120,
        height : 120,
        backgroundColor : '#3e4a61',
        borderRadius : 100,
        padding : 10,
        position : 'relative',
        borderColor : '#17b978',
        borderWidth : 4,
        marginTop : 50
    },
    divs3 : { 
        width: 120,
        height : 120,
        backgroundColor : '#3e4a61',
        borderRadius : 100,
        padding : 10,
        position : 'relative',
        borderColor : '#f3f169',
        borderWidth : 4,
        marginTop : 50
    },
    divs4 : { 
        width: 120,
        height : 120,
        backgroundColor : '#3e4a61',
        borderRadius : 100,
        padding : 10,
        position : 'relative',
        borderColor : '#43dde6',
        borderWidth : 4,
        marginTop : 50
    },
    textDivs : { 
        padding : 5 ,
        position : 'relative',
        top : 11
    },
    textDivsText : { 
         color : 'white',
         textAlign:'center',
         fontWeight : '600'
    },
    albumsDiv:{
        padding : 25,
        flexDirection : 'row',
        flexWrap : 'wrap',
        justifyContent : 'space-between'
    },
    albumsText : { 
        fontWeight : '600',
        color : 'white',
        fontSize : 25,
        paddingTop : 35,
        paddingLeft : 25
    },
    albums : { 
        padding :7 , 
        width : 150,  
        backgroundColor : '#3e4a61',
        borderRadius : 15,
        marginBottom : 25
    },
    albumsImage : {
        width : '100%',
        height : 140,
        borderRadius : 15
    },
    albumsSingerName : {
        color : 'gray',
        fontWeight : '500',
        fontSize : 12,
        marginTop : 5,
        paddingLeft : 3
    },
    albumsName : { 
        color : 'white',
        fontWeight : '600',
        fontSize : 16,
        marginTop : 7
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
        flexWrap : 'wrap',
        marginTop : 22
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
        shadowOpacity : 0.30,
        marginBottom : 25
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
        flexWrap : 'wrap',
        justifyContent : 'space-between',
        marginTop : 20,
      },
      playLists : {
        position : 'relative',
        width : 135 , 
        height : 135 , 
        padding : 8,
        borderRadius : 15,
        backgroundColor : '#3e4a61',
        marginRight : 20, 
        shadowRadius : 3,
        shadowOffset : {
          height : 11,
          width : 11
        },
        shadowOpacity : 0.25,
        marginBottom : 30
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
})
