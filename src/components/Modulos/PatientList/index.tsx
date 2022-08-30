import {
  Box,
  Flex,
  FormControl,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
} from "@chakra-ui/react";

import { MdSearch } from "react-icons/md";
import { PatientsTable } from "../../Tables/PatientsTable";

export function PatientList() {
  return (
    <Flex h="100%" w="80%" ml="20%" direction="column">
      <Heading p="2rem" color="blue.400">
        Listagem de clientes
      </Heading>
      <Box h="full">
        <Flex h="inherit" w="100%" direction="column" justifyContent="flex-end">
          <FormControl w="100%" h="max-content" p="1rem 0">
            <Flex
              justifyContent="flex-end"
              h="100%"
              alignItems="center"
              mr="4rem"
            >
              <Stack w="20%" spacing={4}>
                <InputGroup>
                  <InputLeftElement pointerEvents="none">
                    <MdSearch color="gray.300" />
                  </InputLeftElement>
                  <Input type="search" placeholder="buscar por nome..." />
                </InputGroup>
              </Stack>
            </Flex>
          </FormControl>
          <Box h="100%" w="100%">
            <PatientsTable />
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
}
