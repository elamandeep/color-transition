import { Container, Box, HStack, Text } from "@chakra-ui/react";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export const Layout = ({ children, value }) => {
  const { scrollY } = useViewportScroll();
  const bg = useTransform(
    scrollY,
    [0, 300, 600, 800, 1200],
    [
      "rgb(236, 201, 75)",
      "rgb(236, 201, 75)",
      "rgb(123, 191, 180)",
      "rgb(123, 191, 180)",
      "rgb(66, 153, 225)",
    ]
  );

  return (
    <>
      <Box
        as={motion.nav}
        p="4"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        position="fixed"
        top="0"
        left="0"
        right="0"
        zIndex="10"
        style={{ backgroundColor: bg }}
        shadow="xl"
      >
        <Link href="/">
          <Box
            initial={{  opacity: 0 }}
            animate={{  opactiy: 1 }}
            transition={{ duration: 2 }}
          >
            <Image src="/favicon.ico" width="40px" height="40px" />
          </Box>
        </Link>
        <HStack>
          <Link href="/about">
            <Text
              cursor="pointer"
              fontWeight="semibold"
              px="8"
              py="3"
              bgColor="transparent"
            >
              About
            </Text>
          </Link>
          <Link href="/contact">
            <Text
              as={motion.h1}
              cursor="pointer"
              bgColor="#15384f"
              px="8"
              py="3"
              rounded="full"
              color="white"
              fontFamily="arial"
              fontWeight="semibold"
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.3 },
              }}
              whileTap={{ scale: 0.8 }}
              display="block"
            >
              Contact
            </Text>
          </Link>
        </HStack>
      </Box>
      <Container
        as={motion.main}
        minH="full"
        minW="full"
        zIndex="-2"
        p="0"
        style={{ backgroundColor: bg }}
        key={value}
        overflow="hidden"
        position="relative"
      >
        {children}
      </Container>
    </>
  );
};
