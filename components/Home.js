import React, { Component } from 'react';
import { Text, View, TextInput, TouchableOpacity, Image , FlatList, Alert} from 'react-native';
import {ListData} from '../utils/AppData'

export default class Home extends Component {

  constructor(props){
    super(props);
    this.state = {
      selectedIndex: null
    }
  }

  click(index, item){
    console.log(this.props)
    this.setState({
      selectedIndex: index+1
    });
    this.props.navigation.navigate('Detail_Screen',
    {
      item
    })
  }

  render(){
console.log(ListData,"this.props.home")
    return (
      <View style={{flex: 1}}>
        <View style={{backgroundColor: '#e06200',alignItems: 'center',justifyContent:"center",}} >
          <View style={{ marginVertical:25,flexDirection: 'row',borderWidth: 1,borderColor:'#ffffff',borderRadius: 5,backgroundColor: '#ee6e0c'}}>
            <TextInput
              style={{paddingTop: 2,width: '70%',color:'#ffffff'}}
              placeholder="Find to help" />
              
            <TouchableOpacity style={{width:48, height:40,backgroundColor: '#ffa500', justifyContent:"center", alignItems:"center"}}>
                <Image 
                style={{ width:40, height:32}}
                  source={require('../search-icon-png-9993.png')}
                  
                   />
            </TouchableOpacity>
          </View>
              <View><Text style={{fontWeight:'bold',marginRight:260}}>Categories</Text></View>
            <View style={{flexDirection:'row',marginVertical:5,paddingLeft:35}}>
                <TouchableOpacity style={{width:60, height:60,justifyContent:'center'}}>
                  <Image style={{backgroundColor: '#903102', width:40, height:40,marginHorizontal:10}}
                    source={require('../587389d8f3a71010b5e8ef4b.png')} />
                </TouchableOpacity>
                <TouchableOpacity style={{ width:60, height:60,justifyContent:'center'}} >
                    <Image style={{backgroundColor: '#903102',width:40, height:40,marginHorizontal:10}}
                      source={require('../587389d8f3a71010b5e8ef4b.png')} />
                </TouchableOpacity>
                <TouchableOpacity style={{ width:60, height:60,justifyContent:'center'}} >
                    <Image style={{backgroundColor: '#903102', width:40, height:40,marginHorizontal:10}}
                      source={require('../587389d8f3a71010b5e8ef4b.png')} />
                </TouchableOpacity>
                <TouchableOpacity style={{width:60, height:60,justifyContent:'center'}} >
                    <Image style={{backgroundColor: '#903102', width:40, height:40,marginHorizontal:10}}
                      source={require('../587389d8f3a71010b5e8ef4b.png')} />
                </TouchableOpacity>
            </View>      
        </View>
  
        <View >
          
          <View style={{backgroundColor:"white", height:10}} />
          {/* flatList */}
          <View style={{ height:500, backgroundColor:"#fa8a33" }} >
          <FlatList 
            data={ListData}
            renderItem={(item)=>    
                  //  console.log(item)
                  //  console.log(item.index+1===item.item.id)
              <View style={{height:100}} >
              <TouchableOpacity onPress={() => this.click(item.index, item)} >  
                <View style={{flexDirection:'row',backgroundColor: this.state.selectedIndex === item.item.id?"red": '#e06200',marginVertical:5,marginHorizontal:40,height:90,borderRadius:8}}>
                  <View style={{backgroundColor:'#903102',width:85, height:75,marginHorizontal:12,marginVertical:7.5,borderRadius:8}}>
                    <Image style={{backgroundColor: '#ffa500', width:60, height:60,marginHorizontal:12,marginVertical:7.5,borderRadius:8}}
                            source={item.item.image} />
                  </View>
                  <View style={{flexDirection:'column',width:"65%",height:"90%",marginVertical:4}}>
                    <Text style={{paddingLeft:10,fontSize:14,fontWeight:'bold',color:'#ffffff'}}>{item.item.name}</Text>
                    <Text style={{paddingLeft:10,fontSize:12,color:'#ffffff',marginVertical:4}}>{item.item.discription}</Text>
                  </View>
               </View>
              </TouchableOpacity>
              </View>
            }
            keyExtractor={(item,index) => `${index}` }
          />
          </View>
  
        </View>
      </View>
    );
  }
}