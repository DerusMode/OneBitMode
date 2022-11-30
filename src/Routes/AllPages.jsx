import { NavigationContainer, StackActions } from '@react-navigation/native';
import {createNativeStackNavigator } from '@react-navigation-stack';

import Start from '..Pages/Start';

const Start = createNativeStackNavigatior();

export default function AllPages(){
    return (
        <NavigationContainer>
            <Stack.Navigator 
                scrennOptions={{
                    headerShown:false,
                }}
            />

            <Stack.creen name='Start' component={Start} />
            
        </NavigationContainer>





    )





}