import React, {useContext,useEffect,useState} from 'react';
import {BackHandler, Button, View, Text} from 'react-native';
import {Layout,Avatar,Card} from '@ui-kitten/components';
import {useStore} from '../../store';

export const Profile = () => {
    const correo = "ElizaRod26@hotmail.com"
    const usuario = "Elizabet Rodriguez";
    const store = useStore();

    const textInputStyle = {
        marginLeft: 20,
        marginRight: 20,
        marginTop: 30,
        height: 30,
        color: '#000000',
        fontSize: 25, 
        marginBottom:10     
    };
    const textStyle = {
        marginHorizontal: 20,
        alignItems: 'center',
        fontSize : 20,
    };

    const buttonStyle = {
        flex: 1,
        backgroundColor: '#ff00b8',
        color: '#000000',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5
    };

    return(
        <Layout style={{flex: 1, paddingTop: 16}} level="2">
            <Card style={{borderRadius: 8, marginHorizontal: 8, marginBottom: 8, backgroundColor: 'gray'}}>
            <Avatar source={require('../../assets/profile.jpg')} size="giant" style={{margin:10, marginRight:10, marginHorizontal:150}}/>
            <View style={{flexDirection: 'column'}}>
                <Text style={textInputStyle}>Usuario</Text>
                <Text style={textStyle}>{usuario}</Text> 
                <Text style={textInputStyle}>Correo</Text>
                <Text style={textStyle}>{correo}</Text> 
                <Text style={textInputStyle}>ToWatch List size : {store.toWatchList.length}</Text>
                <Text style={textInputStyle}>Favorites List size : {store.favorites.length}</Text>
            </View>
            </Card>
            <Button onPress= {() => BackHandler.exitApp()} 
                    title="Salir"/>
        </Layout>
    );
};