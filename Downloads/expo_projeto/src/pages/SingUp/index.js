import React from "react";
import { Platform } from "react-native";

import {
    Background,
    Container,
    AreaInput,
    Input,
    SubmitButton,
    SubmitText
} from '../SignIn/styles';

export default function SignIn(){
    return(
        <Background>
            <Container
                behavior = {Platform.OS === 'ios' ? 'padding' : ''}
                enabled
            >

                <AreaInput>
                    <Input
                        placeholder = "Nome"
                    />
                </AreaInput>

                <AreaInput>
                    <Input
                        placeholder = "Seu email"
                    />
                </AreaInput>

                <AreaInput>
                    <Input
                        placeholder = "Sua senha"
                    />
                </AreaInput>

                <SubmitButton>
                    <SubmitText>Cadastrar</SubmitText>
                </SubmitButton>

            </Container>
            
        </Background>
    )
}