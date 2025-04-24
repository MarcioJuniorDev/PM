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
                option = {{
                    headerStyle:{
                        backgroundColor: '#3b3dbf',
                        borderBottomWidth: 1,
                        borderBottomColor: '#00b94a'
                    },
                    headerTintColor: '#FFF',
                    headerTitle: 'Voltar',
                    headerBackTitleVisible: false,
                }}
                />
        </AuthStack.Navigator>
    )
}

export default AuthRoutes;