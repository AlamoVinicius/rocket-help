import React from "react";
import { NativeBaseProvider } from "native-base";

import { THEME } from "./src/screens/styles/theme";

import SignIn from "./src/screens/SignIn";

const App = () => (
  <NativeBaseProvider theme={THEME}>
    <SignIn />
  </NativeBaseProvider>
);

export default App;
