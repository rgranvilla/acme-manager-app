import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Text,
  useDisclosure,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

import { CreatePatientModal } from "../../Modals/CreatePatientModal";

import add_profile from "../../../assets/add_profile.svg";
import search_profile from "../../../assets/search_profile.svg";

export function Dashboard() {
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box h="100%" w="80%" ml="20%">
      <Flex direction="column" h="inherit">
        <Heading p="2rem" color="blue.400">
          Gestão de Clientes
        </Heading>
        <Wrap spacing="2rem" pl="2rem">
          <WrapItem>
            <Button colorScheme="teal" height="max-content" onClick={onOpen}>
              <Flex direction="column">
                <Image
                  src={add_profile}
                  alt="Médicos sorrindo"
                  h="12rem"
                  p="1rem 1.5rem"
                />
                <Text p="0.5rem" color="gray.50" fontSize="24px">
                  {" "}
                  Adicionar
                </Text>
              </Flex>
            </Button>
          </WrapItem>
          <WrapItem>
            <Button
              colorScheme="teal"
              height="max-content"
              onClick={() => navigate("/list")}
            >
              <Flex direction="column">
                <Image
                  src={search_profile}
                  alt="Médicos sorrindo"
                  h="12rem"
                  p="1rem 1.5rem"
                />
                <Text p="0.5rem" color="gray.50" fontSize="24px">
                  {" "}
                  Buscar
                </Text>
              </Flex>
            </Button>
          </WrapItem>
        </Wrap>
      </Flex>
      <CreatePatientModal isOpen={isOpen} onClose={onClose} />
    </Box>
  );
}
