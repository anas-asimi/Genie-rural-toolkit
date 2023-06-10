/* eslint-disable react/prop-types */
import {
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
    Box,
    FormLabel,
} from '@chakra-ui/react'

export default function MyNumberInput(props) {

    return (
        <Box>
            <FormLabel htmlFor={props.label} textTransform='capitalize' pb='1'>{props.label} :</FormLabel>
            <NumberInput
                id={props.label}
                precision={2}
                variant='filled'
                {...props}
            >
                <NumberInputField />
                <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                </NumberInputStepper>
            </NumberInput>
        </Box>
    )
}
