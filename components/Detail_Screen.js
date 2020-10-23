import React, { Component } from 'react';
import { Text, View, TextInput, TouchableOpacity, Image , ScrollView} from 'react-native';
import {ListData} from '../utils/AppData'

export default class Detail_Screen extends Component {

  constructor(props){
    super(props);
    this.state = {
      
    }
  }

  render(){
    console.log(this.props,"this.props.detail" )   
console.log(this.props.route.params.item,"this.props")

const {name , image , discription} = this.props?.route?.params?.item?.item
// const {name , image} = this.props && this.props.route && this.props.route.params && this.props.route.params.item && this.props.route.params.item.item

return (
    <ScrollView>
      <View style={{flex: 1}}>
        <View style={{backgroundColor: '#e06200', flexDirection:"row", justifyContent:'space-between'}} >
          
          <TouchableOpacity onPress={() => {
            this.props.navigation.goBack();
            // this.props.navigation.navigate('Home');
          }}>
            <Image style={{marginVertical:5, width:40, height:40,marginHorizontal:10}}
                    source={require('../back-button-icon-png-25.jpg')} />   
          </TouchableOpacity> 
          
          <TouchableOpacity>
            <Image style={{marginVertical:5, width:40, height:40,marginHorizontal:10}}
                    source={require('../sad.png')} />   
          </TouchableOpacity> 
          
        </View>

        <View style={{backgroundColor: '#e06200',alignItems: 'center',justifyContent:'center'}} >
            <Image style={{width:100, height:120,marginHorizontal:10,marginVertical:5}}
                    source={image} />    
          </View>
        <View >
          
          <View style={{backgroundColor:"#b53f01", height:50}} >
            <Text style={{color:'#ffffff',marginHorizontal:20,marginVertical:5,fontWeight:'bold',fontSize:20}}>{name}</Text>
          </View>
            <View style={{ height:415, backgroundColor:"#fa8a33" }} >
            
            <Text style={{color:'#ffffff',marginHorizontal:25,marginVertical:10,fontWeight:'bold',fontSize:25}}>{discription}</Text>
            <Text style={{color:'#ffffff',marginHorizontal:25,fontSize:12}}>Help Lorem Ipsum dolor sit</Text>

              <View style={{flexDirection:'row'}}>
              <Text style={{color:'#af3b00',marginHorizontal:25,marginVertical:10,fontSize:20}}>English</Text>
              <Text style={{color:'#af3b00',marginHorizontal:25,marginVertical:10,fontSize:20}}>Animal</Text>
              <Text style={{color:'#af3b00',marginHorizontal:25,marginVertical:10,fontSize:20}}>Donation</Text>
              </View>

              <Text style={{color:'#af3b00',marginHorizontal:25,fontSize:13}}>Charity</Text>

                <View style={{backgroundColor:'#903101',width:350,height:230,marginVertical:5,marginHorizontal:30,borderRadius:20}}>
                  <View style={{backgroundColor:'#cc4800',width:300,height:60,marginVertical:10,marginHorizontal:25,borderRadius:20}}>
                    
                    <Text style={{fontSize:46,color:'#ffffff',marginHorizontal:35,fontWeight:'bold'}}>$.2000
                    <Text style={{fontSize:15,color:'#ffffff'}}>/$.2000</Text>
                    </Text>
                   
                  </View>
                  
                  <Text style={{fontSize:15,color:'#ffffff',marginHorizontal:25}}>Bank</Text>
                  
                  <View style={{backgroundColor:'#cc4800',width:300,height:44,marginVertical:10,marginHorizontal:25,borderRadius:20}}>
                    
                    <Text style={{fontSize:25,color:'#ffffff',marginHorizontal:35,marginVertical:5,fontWeight:'bold'}}>
                    Card Nama
                    </Text>
                   
                  </View>

                  <Text style={{fontSize:15,color:'#ffffff',marginHorizontal:25}}>Nominal</Text>
                  
                  <View style={{backgroundColor:'#cc4800',width:300,height:30,marginVertical:5,marginHorizontal:25,borderRadius:20}}>
                    
                    <Text style={{fontSize:22,color:'#ffffff',marginHorizontal:35,fontWeight:'bold'}}>
                    $.2000
                    </Text>
                   
                  </View>

                </View>

                <View>
                  <View style={{alignItems:'center',justifyContent:'center',}}>
                    <TouchableOpacity style={{backgroundColor:'#903101',width:60,height:17,borderRadius:10}} >
                      <Text style={{color:'#cc4800',marginHorizontal:12}}>SEND</Text>
                    </TouchableOpacity>
                  </View>
                </View>
            </View>
  
        </View>
      </View>
    </ScrollView>  
    );
  }
}