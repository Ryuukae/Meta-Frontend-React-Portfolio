import React from "react";
import FullScreenSection from "./FullScreenSection";
import {Avatar, Heading, VStack} from "@chakra-ui/react";

const greeting = "Hello, I am Pete!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";
const avatarUrl = "https://i.pravatar.cc/150?img=7";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
    <FullScreenSection
        justifyContent="center"
        alignItems="center"
        isDarkBackground
        backgroundColor="#2A4365"
    >
        <Avatar src={avatarUrl} alt="Pete's Avatar"/>
        <VStack spacing={4}>
            <Heading size="2xl">{greeting}</Heading>
            <Heading size="lg">{bio1}</Heading>
            <Heading size="md">{bio2}</Heading>
        </VStack>
    </FullScreenSection>
);

export default LandingSection;
