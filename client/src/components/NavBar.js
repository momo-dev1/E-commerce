import {
    Box,
    Flex,
    Icon,
    Text,
    Link,
    Stack,
    Button,
    HStack,
    IconButton,
    useColorMode,
    useDisclosure,
    useColorModeValue,
}
    from "@chakra-ui/react"
import { Link as ReactLink } from "react-router-dom"
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import { MobileLogo } from "assets/index"
const links = [
    { linkname: "Products", path: "/products" },
    { linkname: "Cart", path: "/cart" },
]
const NavLink = ({ path, children }) => (
    <Link
        as={ReactLink}
        px={4}
        py={2}
        to={path}
        rounded="md"
        _hover={{ bg: useColorModeValue("gray.200", "gray.700"), textDecoration: "none" }} >
        {children}
    </Link>
)
const NavBar = () => {
    const { isOpen, onClose, onOpen } = useDisclosure()
    const { colorMode, toggleColorMode } = useColorMode()
    return (
        <Box
            bg={useColorModeValue("gray.100", "gray.900")}
            px={4}
        >
            <Flex h={16} alignItems="center" justifyContent="space-between" >
                <IconButton
                    size="md"
                    display={{ md: "none" }}
                    onClick={isOpen ? onClose : onOpen}
                    icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                />

                <HStack>
                    <Link as={ReactLink} to="/">
                        <Flex alignItems="center" gap={2}>
                            <MobileLogo />
                            <Text fontWeight="extrabold">Mobile Shop</Text>
                        </Flex>
                    </Link>
                    <HStack as="nav" display={{ base: "none", md: "flex" }} >
                        {links.map(({ path, linkname }) => (
                            <NavLink key={linkname} path={path}>
                                {linkname}
                            </NavLink>
                        ))}
                    </HStack>
                </HStack>

                <Flex alignItems="center" gap={3}>
                    <NavLink>
                        <Icon as={colorMode === "light" ? MoonIcon : SunIcon}
                            alignSelf="center"
                            onClick={() => toggleColorMode()}
                        />
                    </NavLink>
                    <Button as={ReactLink} p={2} fontSize="sm" fontWeight="400" variant="link" to="/signIn">Sign In</Button>
                    <Button as={ReactLink} p={2} fontSize="sm" fontWeight="400" variant="link" to="/signUp" bg="orange.500" color="white" _hover={{ bg: "orange.400" }} display={{ base: "none", md: "inline-flex" }} >Sign Up</Button>
                </Flex>
            </Flex>
            {isOpen ?
                <Box display={{ md: "none" }}>
                    <Stack as="nav" spacing={3} py={3}>
                        {links.map(({ path, linkname }) => (
                            <NavLink key={linkname} path={path} >
                                {linkname}
                            </NavLink>

                        ))}
                        <NavLink key="signUp" path="/signUp">
                            Sign Up
                        </NavLink>
                    </Stack>
                </Box>
                :
                null
            }

        </Box>
    )
}

export default NavBar