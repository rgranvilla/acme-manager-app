import { Box, Flex, Wrap } from "@chakra-ui/react";
import { ReactElement } from "react";
import { SideBar } from "../Modulos/SideBar";

interface LayoutProps {
  rightSide: ReactElement;
  isErrorPage?: boolean;
}

export function Layout({
  rightSide,
  isErrorPage = false,
}: LayoutProps): ReactElement {
  return (
    <Box h="calc(100vh)" w="calc(100vw)" bg="white">
      <Flex h="100%" w="100%">
        <SideBar showNavButton={isErrorPage} />

        {rightSide}
      </Flex>
    </Box>
  );
}
