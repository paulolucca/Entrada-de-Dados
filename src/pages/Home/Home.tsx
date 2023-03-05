import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';


const schema = yup.object({
    username: yup.string().required('Informe seu Nome'),
    email: yup.string().email('Email inválido').required('Informe seu email'),
    password: yup.string().min(6, 'A senha deve ter pelo menos 6 digitos').required('Senha inválida')


})



export function Home() {

    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)


    })

    function handleSIgnIn(data) {
        console.log(data);
    }

    return (
        <View>


            <Text style={styles.stylosText}>
                Seja Bem Vindo
            </Text>
            <Controller
                control={control}
                name="usename"
                render={({ field: { onChange, onBlur, value } }) => (

                    <TextInput
                        style={[
                            styles.container, {
                            borderWidth: errors.username && 1 ,
                            borderColor: errors.username &&' #ff375b'
                        }
                    ]
                        }
                        onChangeText={onChange}
                        onBlur={onBlur} //chamado quando é tocado..
                        value={value}
                        placeholder="Digite seu nome... "
                    />

                )}
            />
            {errors.username && <Text style={styles.styloTextError}> {errors.username ?.message} </Text> }

            <Controller
                control={control}
                name="email"
                render={({ field: { onChange, onBlur, value } }) => (

                    <TextInput
                        style={styles.container}
                        onChangeText={onChange}
                        onBlur={onBlur}
                        value={value}
                        placeholder="Digite seu e-mail... "
                    />

                )}
            />

{errors.email && <Text style={styles.styloTextError}> {errors.email ?.message} </Text> }

            <Controller
                control={control}
                name="password"
                render={({ field: { onChange, onBlur, value } }) => (

                    <TextInput
                        style={styles.container}
                        onChangeText={onChange}
                        onBlur={onBlur}
                        value={value}
                        placeholder="Digite sua senha"
                        secureTextEntry={true}
                    />

                )}
            />

{errors.password && <Text style={styles.styloTextError}> {errors.password ?.message} </Text> }







            <TouchableOpacity style={styles.containerButton}
                onPress={handleSubmit(handleSIgnIn)} >

                <View style={styles.areaButton}>
                    <View >

                        <Text style={styles.styloText}>Acessar</Text>
                    </View>

                </View>
            </TouchableOpacity>


        </View>
    );
}

const styles = StyleSheet.create({
    container: {

        backgroundColor: '#FFFFFF',
        height: 60,
        width: 300,
        borderRadius: 0.9,
        justifyContent: 'center',
        alignItems: 'center',
        paddingStart: 17,
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 25,

    },

    containerButton: {
        backgroundColor: '#39ff14',
        borderRadius: 8,


    },
    areaButton: {

        height: 60,
        width: 300,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',


    },
    stylosText: {






    },
    styloText: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#FFFF'


    },
    styloTextError:{
        alignSelf:'flex-start',
        color: '#ff375b',
        marginBottom: 8,
    }
});
