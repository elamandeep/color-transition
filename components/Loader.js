import { Meta } from "../components/Meta";
import { AnimatePresence, motion } from "framer-motion";
import { Box, Container, HStack, SimpleGrid, Text } from "@chakra-ui/react";

export const Loader = ({ setIsLoading, value }) => {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 1,
        staggerChildren: 0.5,
      },
      exit: {
        opacity: 1,
        scale: 1,
      },
    },
  };

  const item1 = {
    hidden: { y: -200, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
    
  };

  return (
    <>
      <Meta title="Loading .." />
      <Box
        as={motion.ul}
        variants={container}
        initial="hidden"
        animate="visible"
        exit="exit"
        w="full"
        h="100vh"
        key={value}
        bgColor="gray.200"
        display="grid"
        
        placeItems="center"
        
      >
     
       
        <SimpleGrid templateColumns="repeat(2,1fr)" gap="2">
    

        <Box
          as={motion.div}
          w="20"
          h="20"
          bgColor="black"
          rounded="md"
          shadow="2xl"
          variants={item1}
          key="item"
          transition={{duration:2}}
          />
        <Box
          as={motion.div}
          w="20"
          h="20"
          bgColor="black"
          rounded="md"
          shadow="2xl"
          key="item"
          variants={item1}
          transition={{duration:2}}
          />
        <Box
          as={motion.div}
          w="20"
          h="20"
          bgColor="black"
          rounded="md"
          shadow="2xl"
          key="item"
          variants={item1}

          transition={{duration:2}}
          />
        <Box
          as={motion.div}
          w="20"
          h="20"
          bgColor="black"
          rounded="md"
          shadow="2xl"
          key="item"
          variants={item1}
          transition={{duration:2 }}
          />
          
          </SimpleGrid>
          
      </Box>
    </>
  );
};
