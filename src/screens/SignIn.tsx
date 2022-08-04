import React, { useRef } from "react";
import { VStack, Heading, Icon, useTheme, Text } from "native-base";
import { Envelope, Key } from "phosphor-react-native";

import Logo from "../ASSETS/logo_primary.svg";
import { Input } from "../COMPONENTS/Input";
import { Button } from "../COMPONENTS/Button";

const SignIn = () => {
  const inputRef = useRef({ email: "", password: "" });

  const { colors } = useTheme();

  return (
    <VStack flex={1} alignItems="center" bg="gray.600" px={8} pt={24}>
      <Logo />
      <Heading color="gray.100" fontSize="xl" mt={20} mb={6}>
        Acesse sua conta
      </Heading>

      <Input
        placeholder="E-mail"
        mb={4}
        InputLeftElement={
          <Icon as={<Envelope color={colors.gray[300]} />} ml={4} />
        }
        onChangeText={(email) => (inputRef.current.email = email)}
        ref={inputRef}
      />
      <Input
        placeholder="Senha"
        InputLeftElement={<Icon as={<Key color={colors.gray[300]} />} ml={4} />}
        mb={8}
        secureTextEntry
        onChangeText={(password) => (inputRef.current.password = password)}
        ref={inputRef}
      />

      <Button
        title="Entrar"
        w="full"
        onPress={() => console.log(inputRef.current)}
      />
    </VStack>
  );
};

export default SignIn;
