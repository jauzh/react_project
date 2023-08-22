import { Box, HStack, Heading, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <HStack>
      <Box textAlign="left" bg="white">
        <VStack>
          <Image src={imageSrc} />
        </VStack>
        <VStack p="5" color="black">
          <Heading as="h4" size="md" color="black">
            {title}
          </Heading>
          <Text textAlign="left" color="black" py="2">
            {description}
          </Text>
          <Text color="black" fontSize="sm">
            See more <FontAwesomeIcon icon={faArrowRight} size="1x" />
          </Text>
        </VStack>
      </Box>
    </HStack>
  );
};

export default Card;
