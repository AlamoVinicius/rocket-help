import React from "react";
import { Button as ButtonNativeBase, Heading, IButtonProps } from "native-base";

type Props = IButtonProps & {
  // extend props.sintax..
  title: String;
};

export const Button = ({ title, ...rest }: Props) => (
  <ButtonNativeBase
    bg="green.700"
    size="lg"
    rounded="lg"
    _pressed={{ bg: "green.500" }}
    {...rest}
  >
    <Heading color="#fff" fontSize="sm">
      {title}
    </Heading>
  </ButtonNativeBase>
);

// obs: {...rest} needs to be the last prop pass in arguments
