import {
    Icon,
    Text,
    Stack,
    Button,
    IconButton,
    useColorMode,
    useDisclosure
}
    from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
const NavBar = () => {
    const { isOpen, OnClose, OnOpen } = useDisclosure()
    const { colorMode, toggleColorMode } = useColorMode()
    return (
        <div>NavBar</div>
    )
}

export default NavBar