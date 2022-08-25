/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */

import React, {
  PropsWithChildren,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { useField } from "@unform/core";
import { Container, InputContainer, InputIcon } from "./input.styles";

interface Props {
  name: string;
  label?: string;
  icon?: JSX.Element;
  fullWidth?: boolean;
}

type InputProps = JSX.IntrinsicElements["input"] & Props;

export function Input({
  name,
  label,
  icon,
  type,
  autoComplete,
  fullWidth = false,
  children,
  ...rest
}: PropsWithChildren<InputProps>) {
  const inputRef = useRef<HTMLInputElement>(null);

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const { fieldName, defaultValue, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef,
      getValue: (ref) => {
        return ref.current.value;
      },
      setValue: (ref, value) => {
        ref.current.value = value;
      },
      clearValue: (ref) => {
        ref.current.value = "";
      },
    });
  }, [fieldName, registerField]);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    setIsFilled(!!inputRef.current?.value);
  }, []);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      setIsFilled(!!inputRef.current?.value);
      inputRef.current?.blur();
    }
  };

  return (
    <Container>
      {label && <label htmlFor={fieldName}>{label}</label>}
      <InputContainer
        isFilled={isFilled}
        isFocused={isFocused}
        isErrored={!!error}
        hasIcon={!!icon}
        fullWidth={fullWidth}
      >
        <InputIcon hasIcon={!!icon}>{icon}</InputIcon>
        <input
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          onKeyDown={(event) => handleKeyDown(event)}
          id={fieldName}
          ref={inputRef}
          type={type}
          autoComplete={autoComplete}
          defaultValue={defaultValue}
          {...rest}
        />
        {error && <span>{error}</span>}
      </InputContainer>
    </Container>
  );
}
