import {Box, Heading, HStack, Image, Text, VStack} from "@chakra-ui/react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({title, description, imageSrc}) => {
    return (
        <Box borderWidth="1px" borderRadius="lg" overflow="hidden" backgroundColor="white">
            <Image width="100%" src={imageSrc} alt={title}/>

            <VStack p="6" align="start" spacing={3}>
                <Heading size="md" color="black">{title}</Heading>
                <Text color="black">{description}</Text>
            </VStack>
            <HStack p="6" justify="flex-start">
                <Text color="black">See more</Text>
                <FontAwesomeIcon color="black" icon={faArrowRight} size="1x"/>
            </HStack>
        </Box>
    );
};

export default Card;
