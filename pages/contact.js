import { Meta } from "../components/Meta";
import { Container ,VStack , Heading , Text } from '@chakra-ui/react'

const contact = () => {
  return (
    <>
    <Meta title="Contact" />
      <Container minH="100vh" minW="100%" p="10" bgColor="yellow.400">
        <VStack alignItems="flex-start">
          <Heading
            bgColor="yellow.600"
            bgClip="text"
            fontSize="8xl"
            fontWeight="extrabold"
            opacity="0.7"
          >
            Contact
          </Heading>
        </VStack>
        <VStack w="100%" alignItems="center">
          <Text fontSize="xl">
            Trem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including will uncover many web sites still in
            their infancy. Various versions have evolved over the years,
            sometimes by accident, sometimes on purpose (injected humour and the
            like).
          </Text>
        </VStack>
      </Container>
    </>
  );
};

export default contact;
