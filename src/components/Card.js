import { Heading, HStack, Image, Text, VStack } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <VStack bgColor="#ffff" borderRadius="8px">
      <Image src={imageSrc} borderRadius="8px" />
      <VStack alignItems="flex-start" padding="10px">
        <Heading textColor="#252525">{title}</Heading>
        <Text textColor="#434242">{description}</Text>
        <HStack>
          <Text textColor="#252525" fontWeight="bold">
            See more
          </Text>
          <FontAwesomeIcon icon={faArrowRight} size="1x" color="#252525" />
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Card;
