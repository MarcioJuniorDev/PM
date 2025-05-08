import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SingUp';

const AuthStack = createNativeStackNavigator();

function AuthRoutes(){
    return(
        <AuthStack.Navigator>
            <AuthStack.Screen
                name = "SignIn"
                component = {SignIn}
                options={{
                    headerShown: false,
                }}
            />

            <AuthStack.Screen
                name = "SignUp"
                component = {SignUp}
                options = {{
                    headerStyle:{
                        backgroundColor: '#F5F5F0',
                        borderBottomWidth: 1, 
                        borderBottomColor: '#00b94a'
                    },
                    headerTintColor: '#000',
                    headerTitle: 'Voltar',
                    headerBackTitleVisible: false,
                }}
                />
        </AuthStack.Navigator>
    )
}

export default AuthRoutes;