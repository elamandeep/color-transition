import { Meta } from "../components/Meta";
import {
  Box,
  HStack,
  Text,
  VStack,
  Container,
  Button,
  Heading,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { motion, useViewportScroll } from "framer-motion";
import { GridBox } from "../components/GridBox";

export default function Home() {
  
  const arr = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24,
  ];

  return (
    <>
      <Meta />
      <Grid
        as={motion.div}
        position="absolute"
        top="0"
        left="0"
        templateColumns="repeat(5, 1fr)"
        minH="full"
        gap="2"
        minW="full"
      >
        {arr.map((d) => {
          if (d % 5 === 0) {
            return <GridBox d={d} speed="80" />;
          } else if (d % 5 === 1) {
            return <GridBox d={d} speed="-5" />;
          } else if (d % 5 === 2) {
            return <GridBox d={d} speed="50" />;
          } else if (d % 5 === 3) {
            return <GridBox d={d} speed="-20" />;
          }

          return <GridBox d={d} speed="40" />;
        })}
      </Grid>

      <Container as="section" minH="100vh" mt="36">
        <VStack>
          <Heading
            as={motion.h1}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 , transition:{ type:'spring' , stiffness:200 ,  }}}
            transition={{ duration: 2 }}
            fontWeight="bold"
            fontSize="5xl"
          >
            Hello !! John Doe
          </Heading>
          <Text
            as={motion.h3}
            fontWeight="semibold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
          >
            lorem ipsum
          </Text>
        </VStack>
      </Container>
      <Container
        as="section"
        id="services"
        minH="100vh"
        minW="full"
        display="flex"
        flexDir="column"
        justifyContent="space-between"
        alignItems="center"
        gap="6"
      >
        <Heading
          as={motion.h1}
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            y: -30,
            transition: { type: "spring", stiffness: 200, damping: 10 },
          }}
          viewport={{ once: false, amount: 0.5 }}
        >
          Our Services
        </Heading>
        <Grid templateColumns="repeat(3,1fr)" gap="4" w="container.md">
          {[0, 1, 2, 3, 4, 5].map((d) => {
            return (
              <GridItem
                as={motion.div}
                bgColor="white"
                w="60"
                h="60"
                zIndex="6"
                key={d}
                rounded="lg"
                shadow="xl"
                whileInView={{
                  opacity: 1,
                  y: -60,
                  transition: {
                    type: "spring",
                    stiffness: 20 * (d + 1),
                    damping: 2,
                  },
                }}
              ></GridItem>
            );
          })}
        </Grid>
      </Container>
      <Container
        as="section"
        id="client"
        minH="100vh"
        minW="full"
        background="transparent"
        display="flex"
        flexDir="column"
        justifyContent="space-evenly"
        alignItems="center"
        gap="6"
      >
        <Heading
          as={motion.h1}
          whileInView={{
            opacity: 1,
            y: -60,
            transition: { type: "spring", stiffness: 200, damping: 10 },
          }}
        >
          Our Clients
        </Heading>
        <Grid
          width="96"
          gap="2"
          gridTemplateColumns="repeat(5,1fr)"
          gridTemplateRows="repeat(2,1fr)"
          zIndex="1"
        >
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((d) => {
            return (
              <GridItem
                as={motion.div}
                bgColor="gray.100"
                w="16"
                h="16"
                key={d}
                rounded="full"
                shadow="xl"
                whileInView={{
                  opacity: 1,
                  y: -60,
                  transition: {
                    type: "spring",
                    stiffness: 5 * (d + 1),
                    damping: 2,
                  },
                }}
              />
            );
          })}
        </Grid>
      </Container>
    </>
  );
}
