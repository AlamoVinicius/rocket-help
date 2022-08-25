import React, { forwardRef } from "react";
import { Input as InputNativeBase, IInputProps } from "native-base";
import { TextInputProps } from "react-native";

type myProps = {
 
};

export const Input = forwardRef<myProps, IInputProps>(({ ref, ...rest }) => {
  return (
    <InputNativeBase
      ref={ref}
      bg="gray.700"
      h={14}
      size="md"
      borderWidth={0}
      fontSize="md"
      fontFamily="body"
      color="#fff"
      placeholderTextColor="gray.300"
      _focus={{
        borderWidth: 1,
        borderColor: "green.300",
        bg: "gray.700",
      }}
      {...rest}
    />
  );
});

// res operator => passa restante das propriedades que vier do componente pai
// importar typagem para sugerir intelisense para o father component
