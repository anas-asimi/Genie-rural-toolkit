/* eslint-disable react/prop-types */
import {
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
    Text,
    Box,
} from '@chakra-ui/react'

export default function MyNumberInput(props) {

    return (
        <Box>
            <Text textTransform='capitalize' pb='1'>{props.label} :</Text>
            <NumberInput
                variant='filled'
                precision={props.precision && 2}
                defaultValue={props.value}
                onChange={(value) => { props.handler(props.label, value) }}>
                <NumberInputField />
                <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                </NumberInputStepper>
            </NumberInput>
        </Box>
    )
}
