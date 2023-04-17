import React from 'react'
import { Button } from 'react-native'

const Btn1 = () => {
    return (
        <>
            <Button
                title="AC"
                onPress={() => alert('Você teclou a tecla / ')}
                //color="#f194ff"
                disabled
                //enable
                />
            <Button
                title="7"
                onPress={() => alert('Você teclou a tecla 7 ')}
                color="#474A51"
            />
            <Button
                title="4"
                onPress={() => alert('Você teclou a tecla 4 ')}
                color="#474A51" />
            <Button
                title="1"
                onPress={() => alert('Você teclou a tecla 1 ')}
                color="#474A51" />
            <Button
                title="0"
                onPress={() => alert('Você teclou a tecla 1 ')}
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