import { GridItem } from "@chakra-ui/react";
import { motion, useTransform, useViewportScroll } from "framer-motion";

export const GridBox = ({speed ,d}) => {
  const { scrollY } = useViewportScroll();
  const translateGrid = useTransform(scrollY, [0, 800], [0, 10*speed]);

  return (
    <>
      <GridItem
        as={motion.div}
        key={d}
        w="100%"
        h="96"
        bgColor="rgba(0,0,0,0.05)"
        style={{ translateY: translateGrid }}
      />
    </>
  );
};

GridBox.defaultProps={
    speed:1,
}