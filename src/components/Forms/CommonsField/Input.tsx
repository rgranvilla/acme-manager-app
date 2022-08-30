/* eslint-disable react/jsx-props-no-spreading */
import {
  FormControl,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
} from "@chakra-ui/react";
import { useRef } from "react";

interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
  isRequired?: boolean;
}

export function Input({ name, label, isRequired, ...rest }: InputProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <FormControl isRequired={isRequired}>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}

      <ChakraInput name={name} id={name} {...rest} />
    </FormControl>
  );
}
