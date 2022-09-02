/* eslint-disable @typescript-eslint/no-explicit-any */
import { forwardRef, ForwardRefRenderFunction, useEffect } from "react";
import {
  FormControl,
  FormLabel,
  FormHelperText,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
  useMergeRefs,
} from "@chakra-ui/react";
import { FieldError } from "react-hook-form";
import { useIMask } from "react-imask";

interface InputProps extends ChakraInputProps {
  name?: string;
  label?: string;
  error?: FieldError;
  mask?: string;
  setDefaultValue?: string;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, label, mask = "", error, setDefaultValue = "", ...rest }: InputProps,
  ref,
) => {
  const { ref: iMaskRef, setValue } = useIMask({ mask });
  const refs = useMergeRefs(iMaskRef, ref);
  useEffect(() => {
    setValue(setDefaultValue);
  }, [setDefaultValue, setValue]);

  return (
    <FormControl isInvalid={!!error}>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}

      <ChakraInput name={name} id={name} ref={refs} {...rest} />
      <FormHelperText>{error?.message}</FormHelperText>
    </FormControl>
  );
};

export const Input = forwardRef(InputBase);
