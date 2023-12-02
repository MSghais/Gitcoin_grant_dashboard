'use client'

import {
    IconButton,
    Avatar,
    Box,
    CloseButton,
    Flex,
    HStack,
    VStack,
    Icon,
    useColorModeValue,
    Text,
    Drawer,
    DrawerContent,
    useDisclosure,
    BoxProps,
    FlexProps,
    Menu,
    MenuButton,
    MenuDivider,
    MenuItem,
    MenuList,
    Button,
    useColorMode,

} from '@chakra-ui/react'
import {
    FiHome,
    FiMenu,
    FiChevronDown,
} from 'react-icons/fi'
import { IconType } from 'react-icons'
import Link from 'next/link'
import { CustomConnectButtonWallet } from '../components/button/CustomConnectButtonWallet'
import IconComponent from '../components/IconComponent'
import React from 'react'
import { useRouter } from 'next/router'
import { useAccount } from 'wagmi'
import { ToggleColor } from '../components/button/ToggleColor'
import { ButtonLink, ButtonLinkBasic } from '../components/button'

interface LinkItemProps {
    name: string
    icon: IconType
    href?: string;
}

interface NavItemProps extends FlexProps {
    icon: IconType
    children: React.ReactNode
    href?: string;
}

interface IconNavItemProps extends FlexProps {
    icon?: IconType
    children: React.ReactNode
    href?: string;
    onClick: () => void;
}
interface MobileProps extends FlexProps {
    onOpen: () => void
}
interface SidebarProps extends BoxProps {
    onClose: () => void
}

const LinkItems: Array<LinkItemProps> = [
    { name: 'Home', icon: FiHome, href: "/" },
]

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
    let color = useColorModeValue('gray.300', 'gray.300')
    const [isOver, setIsOver] = React.useState<boolean | undefined>(false)
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <Box
            as="nav"
            transition="3s ease"
            bg={useColorModeValue('gray.300', 'gray.900')}
            borderRight="1px"
            borderRightColor={useColorModeValue('gray.500', 'gray.700')}
            w={{ base: 'full', lg: "7em" }}
            _hover={{
                width: "11em"
            }}
            onMouseOver={() => {
                setIsOver(true)
            }}
            onMouseOut={() => {
                setIsOver(false)
            }}

            pos="fixed"
            h="full"
            {...rest}
        >
            <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
         
                <Link href="/"
                >
                    <IconComponent
                    
                        src="/WUW_pepe_banner.png"

                        alt="WUW- Whatever You Want"
                        size="50px"
                    />
                </Link>

                <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose}

                    color={color}

                />
            </Flex>
            <Box

                display={{ base: "grid" }}
                gap={{ base: "0.3em", md: '0.5em' }}
            >

                {LinkItems.map((link) => (
                    <NavItem
                     key={link.name}
                        onClick={onClose}
                        icon={link.icon}
                        href={link.href}
                    >
                        {isOver &&
                            link.name
                        }
                    </NavItem>
                ))}
                <IconNavItem
                    key={"toggle"}
                    onClick={() => {
                        toggleColorMode()
                        onClose()
                    }}
                >
                    <ToggleColor />

                </IconNavItem>


            </Box>



        </Box>
    )
}

const SidebarContentMobile = ({ onClose, ...rest }: SidebarProps) => {
    let color = useColorModeValue('gray.300', 'gray.300')
    let bg = useColorModeValue('gray.700', 'gray.300')
    const [isOver, setIsOver] = React.useState<boolean | undefined>(false)
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <Box
            transition="3s ease"
            bg={useColorModeValue('gray.300', 'gray.900')}
            borderRight="1px"
            borderRightColor={useColorModeValue('gray.500', 'gray.700')}

            w={{ base: 'full', lg: "fit-content" }}
            pos="fixed"
            h="full"
            {...rest}
        >
            <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        
                <Link href="/"
                //  onClick={onClose}
                >
                    <IconComponent
                
                        src="/assets/wuw_logo.png"

                        alt="WUW- Whatever You Want"
                        size="50px"
                    />
                </Link>

                <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose}
                    bg={bg}
                    color={color}

                />
            </Flex>
            <Box

                display={{ base: "grid" }}
                gap={{ base: "0.3em", md: '0.5em' }}
            >

                {LinkItems.map((link) => (
                    <NavItem key={link.name}
                        onClick={onClose}
                        icon={link.icon}
                        href={link.href}
                    >
                        {
                            link.name

                        }

                    </NavItem>
                ))}
                <IconNavItem
                    key={"toggle"}
                    onClick={() => {
                        toggleColorMode()
                        onClose()
                    }}
                >
                    <ToggleColor />

                </IconNavItem>
            </Box>
        </Box>
    )
}
const IconNavItem = ({ icon, children, href, ...rest }: IconNavItemProps) => {
    const color = useColorModeValue("gray.800", "gray.300")
    return (
        <Box
            _focus={{ boxShadow: 'none' }}
            color={color}
        >
            <Flex
                align="center"
                p="4"
                mx="4"
                borderRadius="lg"
                role="group"
                cursor="pointer"
                _hover={{
                    bg: 'green.400',
                    color: 'white',
                }}
                {...rest}
            >
                {icon && (
                    <Icon
                        mr="4"
                        fontSize="16"
                        _groupHover={{
                            color: 'white',
                        }}
                        as={icon}
                    />
                )}
                {children}
            </Flex>
        </Box>
    )
}
const NavItem = ({ icon, children, href, ...rest }: NavItemProps) => {
    const color = useColorModeValue("gray.800", "gray.300")
    return (
        <Box
            as={Link}
            href={href}
            _focus={{ boxShadow: 'none' }}
            color={color}
        >
            <Flex
                align="center"
                p="4"
                mx="4"
                borderRadius="lg"
                role="group"
                cursor="pointer"
                _hover={{
                    bg: 'brand.primary',
                    // color: 'white',
                }}
                fontSize={{ base: "15px" }}
                {...rest}
            >
                {icon && (
                    <Icon
                        mr="4"
                        fontSize="16"
                        _groupHover={{
                            color: 'white',
                        }}
                        as={icon}
                    />
                )}
                {children}
            </Flex>
        </Box>
    )
}


const MobileNav = ({ onOpen, ...rest }: MobileProps) => {

    return (
        <Flex
            ml={{ base: 0, lg: "fit-content" }}
            px={{ base: 4, md: 4 }}
            height="20"
            alignItems="center"
            bg={useColorModeValue('gray.300', 'gray.900')}
            borderBottomWidth="1px"
            borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
            justifyContent={{ base: 'space-between', lg: 'flex-end' }}
            {...rest}>

            <Box
                display={{ lg: "none" }}
            >

                <Link href="/"
                >
                    <IconComponent
              
                        src="/assets/WUW_logo_title.svg"

                        alt="WUW- Whatever You Want"
                        size="50px"
                    />
                </Link>
            </Box>
            <HStack spacing={{ base: '0', md: '6' }}
                gap={{ base: "0.75em" }}
            >
                <IconButton
                    order={3}
                    display={{ base: 'flex', lg: 'none' }}

                    onClick={onOpen}
                    color={useColorModeValue('gray.700', 'gray.300')}

                    variant="outline"
                    aria-label="open menu"
                    icon={<FiMenu />}
                />
                <Flex alignItems={'center'}>
                    <Menu>
                        <MenuButton py={2} transition="all 0.3s" _focus={{ boxShadow: 'none' }}>
                            <HStack>
                                {/* <Avatar
                                    size={'sm'}
                                    src={
                                        profile?.avatar ? profile?.avatar : session?.data?.user?.image ?? session?.data?.user?.image}
                                // src={
                                //     profile?.avatar ? profile?.avatar : session?.data?.user?.image ? session?.data?.user?.image :

                                //         'https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                                // }
                                /> */}
                                <VStack
                                    display={{ base: 'none', md: 'flex' }}
                                    alignItems="flex-start"
                                    spacing="1px"
                                    ml="2">
                                    {/* <Text fontSize="sm">{profile?.name ?? session?.data?.user?.name}</Text>
                                    <Text fontSize="xs" color="gray.600">
                                        {profile?.role}
                                    </Text> */}
                                </VStack>
                                <Box display={{ base: 'none', md: 'flex' }}>
                                    <FiChevronDown />
                                </Box>
                            </HStack>
                        </MenuButton>
                        <MenuList
                        >

                            <MenuItem
                                width={"100%"}
                                as={Box}
                            >

                                <CustomConnectButtonWallet></CustomConnectButtonWallet>
                            </MenuItem>


                            <MenuItem
                                as={Box}
                                width={"100%"}
                            // as={Link} href="/my_profile"

                            >

                                <ButtonLinkBasic
                                    href="/my_profile"
                                    title='My profile'
                                />
                            </MenuItem>
                            <MenuDivider />

                        </MenuList>
                    </Menu>
                </Flex>
            </HStack >
        </Flex >
    )
}

interface IHeaderSidebar {
    children: React.ReactNode
}
const HeaderSidebar = ({ children }: IHeaderSidebar) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const router = useRouter()
    const path = router.pathname
    console.log("path", path)
    let isSidebarRight = PATH_SIDEBAR_DATA.includes(path)
    console.log("isSidebarRight", isSidebarRight)

    const { isOpen: isOpenCreate, onClose: onCloseCreate, onOpen: onOpenCreate } = useDisclosure()

    return (
        <Box
            minH="100vh"
            bg={useColorModeValue('gray.100', 'black.300')}
        >
            <SidebarContent


                onClose={() => onClose} 
                display={{ base: 'none', lg: 'block' }} 
                />
            <Drawer
                isOpen={isOpen}
                placement="left"
                onClose={onClose}
                returnFocusOnClose={false}
                onOverlayClick={onClose}

            >
                <DrawerContent
                    width={"80%"}
                >
                    <SidebarContentMobile onClose={onClose} />
                </DrawerContent>
            </Drawer>
            {/* mobilenav */}
            <MobileNav onOpen={onOpen} />
            <Box
             
                ml={{ base: 0, lg: "13em" }}
            >

              
                <Box
                    display={"flex"}
                >
                    {children}
                </Box>


            </Box>
        </Box>
    )
}

const PATH_SIDEBAR_DATA = ["/", "trendings", "explorer"]

const DATA_SIDEBAR = {
    "/": true,
    "/trendings": false
}

export default HeaderSidebar