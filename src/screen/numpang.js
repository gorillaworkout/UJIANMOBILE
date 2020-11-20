<View style={{flex:1,backgroundColor:'whitesmoke'}}>
<ScrollView>
<LinearGradient style={{
    height:260,
    borderRadius:75,
    width:150,
    alignSelf:'center',
    transform:[{scaleX:5},{translateY:Platform.OS === 'ios' ? -60:-55}],
    
}} 
    useAngle 
    angle={45} 
    locations={[0.3,0.9]} 
    colors={['#FE6B8B','#FF8E53']}>
    
 
</LinearGradient>
<View style={{top: Platform.OS ==='ios'?-220:-130,width:"100%",flex:1}}>
            <View style={{flexDirection:'row',justifyContent:'space-between',paddingHorizontal:20}}>
                <View style={{flexDirection:'row',marginTop:10}}>
                    <Fontawesome
                        name='plane-departure'
                        color='white'
                        size={20}
                    /> 
                    <TextH1 style={{fontSize:20}}>{''} GorillaFood</TextH1>
                </View>
                <TextH1 style={{fontSize:20,fontWeight:'500',marginTop:10}}>Halo,{username}</TextH1>
            </View>

            
         
        
         
            <View style={{marginTop:10}}>
               
                
                <View>
                <Button
                        style={{paddingHorizontal:30}}
                        buttonStyle={{backgroundColor:'hotpink',borderRadius:10}}
                        title='Details dino'
                        onPress={()=>navigation.navigate('Details',{name:'dino'})}
                        />
                
                <Button
                        style={{paddingHorizontal:30}}
                        buttonStyle={{backgroundColor:'hotpink',borderRadius:10}}
                        title='Details bayu '
                        onPress={()=>navigation.navigate('Details',{name:'bayu'})}
                        />
                    
                </View>
            </View>
        </View>

     </ScrollView>
     <View style={{flex: 1}}>
                <View style={{paddingHorizontal: 10, flex: 1}}>
                    <FlatList 
                        // data={rest}
                        // keyExtractor={item=> `${item.restaurant.id}`}
                        // renderItem={renderRestaurant}
                        showsVerticalScrollIndicator={false}
                        refreshControl={<RefreshControl onRefresh={onRefreshFlat} refreshing={refresh} />}
                    />
                </View>
            </View>
</View>