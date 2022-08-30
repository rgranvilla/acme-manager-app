import { forwardRef, ForwardRefRenderFunction } from "react";
import {
  FormControl,
  FormLabel,
  Select as ChakraSelect,
  SelectProps as ChakraSelectProps,
} from "@chakra-ui/react";
import { FieldError } from "react-hook-form";

interface SelectProps extends ChakraSelectProps {
  name?: string;
  label?: string;
  isRequired?: boolean;
  error?: FieldError;
}

const SelectBase: ForwardRefRenderFunction<HTMLSelectElement, SelectProps> = (
  { name, label, isRequired, ...rest }: SelectProps,
  ref,
) => {
  return (
    <FormControl isRequired={isRequired}>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}

      <ChakraSelect name={name} id={name} ref={ref} {...rest} />
    </FormControl>
  );
};

export const Select = forwardRef(SelectBase);
