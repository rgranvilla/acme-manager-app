import { useLocation, useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Container,
  Flex,
  Image,
  Text,
  useDisclosure,
} from "@chakra-ui/react";

import logo from "../../../assets/logo.svg";
import arrow_left from "../../../assets/arrow_left.svg";
import add_profile from "../../../assets/add_profile.svg";
import image from "../../../assets/cover01.webp";
import { CreatePatientModal } from "../../Modals/CreatePatientModal";

interface LeftSidePanelProps {
  showNavButton?: boolean;
}

export function SideBar({ showNavButton = false }: LeftSidePanelProps) {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const showButton = pathname === "/list";
  const showAllButtons = !!showButton || !!showNavButton;

  const navButton = (
    <Flex justifyContent="center">
      <Button
        position="absolute"
        h="2.5rem"
        top="12rem"
        right="-1.4rem"
        w="max-content"
        p="0.5rem"
        colorScheme="linkedin"
        onClick={() => navigate("/")}
      >
        <Flex alignItems="center" gap="0.5rem">
          <Image src={arrow_left} alt="Botão retornar para home" h="2rem" />
          <Text fontSize="1.2rem" pr="1rem">
            Início
          </Text>
        </Flex>
      </Button>
    </Flex>
  );

  const modalButton = (
    <Button
      h="4rem"
      w="4rem"
      colorScheme="linkedin"
      p="0.5rem"
      mt="8rem"
      onClick={onOpen}
    >
      <Flex alignItems="center" justifyContent="center">
        <Image src={add_profile} h="4rem" />
      </Flex>
    </Button>
  );

  return (
    <Box h="100%" w="20%" position="fixed">
      <Flex h="inherit" direction="column" p="14" pb="0" bg="teal">
        <Box>
          <Image src={logo} alt="Logo da clínica ACME" maxH="96px" />
        </Box>

        {showAllButtons && navButton}

        <Box>{showButton && modalButton}</Box>

        <Box position="absolute" w="max-content" bottom="0">
          <Image src={image} alt="Médicos sorrindo" h="420px" />
        </Box>
      </Flex>

      <CreatePatientModal isOpen={isOpen} onClose={onClose} />
    </Box>
  );
}
