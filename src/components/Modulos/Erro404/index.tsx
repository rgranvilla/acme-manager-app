import { Box, Flex, Heading, Image, Text, Wrap } from "@chakra-ui/react";

import erro404Image from "../../../assets/erro_404.webp";

export function Erro404() {
  return (
    <Box h="100%" w="80%" ml="20%">
      <Flex direction="column" alignItems="center" h="100%" w="100%">
        <Box m="2rem auto" h="50%" w="100%">
          <Image
            src={erro404Image}
            alt="Página não encontrada"
            w="100%"
            h="100%"
            objectFit="scale-down"
          />
        </Box>

        <Box h="50%" w="100%">
          <Flex direction="column" gap="1rem" alignItems="center">
            <Heading w="100%" textAlign="center">
              Página Inexistente
            </Heading>
            <Wrap w="100%" direction="column" justifyContent="center">
              <Text textAlign="center">
                O endereço web fornecido não existe em nossa aplicação.
              </Text>
              <Text textAlign="center">
                Clique no botão para voltar a página inicial.
              </Text>
            </Wrap>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
