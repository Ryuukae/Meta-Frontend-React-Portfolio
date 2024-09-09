import React from "react";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {faGithub, faLinkedin, faMedium, faStackOverflow,} from "@fortawesome/free-brands-svg-icons";
import {Box, HStack} from "@chakra-ui/react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const socials = [
    {
        icon: faEnvelope,
        url: "mailto:ryuukae@gmail.com",
    },
    {
        icon: faGithub,
        url: "https://github.com/Ryuukae",
    },
    {
        icon: faLinkedin,
        url: "https://www.linkedin.com/in/adam-ross-destafeno",
    },
    {
        icon: faMedium,
        url: "https://medium.com/@ryuukae",
    },
    {
        icon: faStackOverflow,
        url: "https://stackoverflow.com/users/22836294/ryuukae",
    },
];

const Header = () => {
    const handleClick = (anchor) => () => {
        const id = `${anchor}-section`;
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };

    return (
        <Box
            position="fixed"
            top={0}
            left={0}
            right={0}
            translateY={0}
            transitionProperty="transform"
            transitionDuration=".3s"
            transitionTimingFunction="ease-in-out"
            backgroundColor="#18181b"
        >
            <Box color="white" maxWidth="1280px" margin="0 auto">
                <HStack
                    px={16}
                    py={4}
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <nav>
                        <HStack spacing={6}>
                            {socials.map((social, idx) => (
                                <a key={idx} href={social.url} rel="noreferrer" target="_blank">
                                    <FontAwesomeIcon icon={social.icon} size="2x"/>
                                </a>
                            ))}
                        </HStack>
                    </nav>
                    <nav>
                        <HStack spacing={8}>
                            <a
                                onClick={handleClick('projects')}
                                href={"#projects-section"}
                                rel="noopener noreferrer"
                            >
                                Projects
                            </a>
                            <a
                                onClick={handleClick('contactme')}
                                href={"#contactme-section"}
                                rel="noopener noreferrer"
                            >
                                Contact Me
                            </a>
                        </HStack>
                    </nav>
                </HStack>
            </Box>
        </Box>
    );
};
export default Header;
