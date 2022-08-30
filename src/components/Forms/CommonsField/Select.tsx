/* eslint-disable react/jsx-props-no-spreading */
import {
  FormControl,
  FormLabel,
  Select as ChakraSelect,
  SelectProps as ChakraSelectProps,
} from "@chakra-ui/react";
import { useRef } from "react";

interface SelectProps extends ChakraSelectProps {
  name: string;
  label?: string;
  isRequired?: boolean;
}

export function Select({ name, label, isRequired, ...rest }: SelectProps) {
  const selectRef = useRef<HTMLSelectElement>(null);

  return (
    <FormControl isRequired={isRequired}>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}

      <ChakraSelect name={name} id={name} {...rest} />
    </FormControl>
  );
}
