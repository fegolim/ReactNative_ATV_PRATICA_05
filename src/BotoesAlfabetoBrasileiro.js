import React from 'react'
import { Button, View, Text, TouchableOpacity  } from 'react-native'

const Btn1 = () => {
    return (
        <>
<TouchableOpacity  >
    <View 
    backgroundcolor="#1C5AEA"
>
        <Text>
            fer
        </Text>
    </View>
</TouchableOpacity  >
                
            <Button
                title="b-B (bê)"
                onPress={() => alert('b-B (bê)')}
                color="#474A51"
            />
            <Button
                title="c-C (cê)"
                onPress={() => alert('c-C (cê)')}
                color="#474A51" />
            <Button
                title="d-D (dê)"
                onPress={() => alert('d-D (dê)')}
                color="#474A51" />
            <Button
                title="e-E (é)"
                onPress={() => alert('e-E (é)')}
                color="#474A51" />
        </>
    )

}

const Btn2 = () => {
    return (
        <>
            <Button
                title="+/-"
                onPress={() => alert('Você teclou a tecla + ')}
                color="#8C8C8C" />
            <Button
                title="8"
                onPress={() => alert('Você teclou a tecla 8 ')}
                color="#474A51" />
            <Button
                title="5"
                onPress={() => alert('Você teclou a tecla 5 ')}
                color="#474A51" />
            <Button
                title="2"
                onPress={() => alert('Você teclou a tecla 2 ')}
                color="#474A51" />
            <Button
                title=""
                onPress={() => alert('Você teclou a tecla 1 ')}
                color="#474A51" />
        </>
    )

}

const Btn3 = () => {
    return (
        <>
            <Button
                title="%"
                onPress={() => alert('Você teclou a tecla * ')}
                color="#8C8C8C" />
            <Button
                title="9"
                onPress={() => alert('Você teclou a tecla 9 ')}
                color="#474A51" />
            <Button
                title="6"
                onPress={() => alert('Você teclou a tecla 6 ')}
                color="#474A51" />
            <Button
                title="3"
                onPress={() => alert('Você teclou a tecla 3 ')}
                color="#474A51" />
            <Button
                title=","
                onPress={() => alert('Você teclou a tecla 1 ')}
                color="#474A51" />
        </>
    )

}
const Btn4 = () => {
    return (
        <>
            <Button
                title="/"
                onPress={() => alert('Você teclou a tecla / ')}
                color="#EEAD2D" />
            <Button
                title="X"
                onPress={() => alert('Você teclou a tecla X ')}
                color="#EEAD2D" />
            <Button
                title="-"
                onPress={() => alert('Você teclou a tecla - ')}
                color="#EEAD2D" />
            <Button
                title="+"
                onPress={() => alert('Você teclou a tecla + ')}
                color="#EEAD2D" />
            <Button
                title="="
                onPress={() => alert('Você teclou a tecla = ')}
                color="#EEAD2D" />
        </>
    )

}
export { Btn1, Btn2, Btn3, Btn4 };