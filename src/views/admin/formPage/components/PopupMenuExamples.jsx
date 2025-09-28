import React from "react";
import {
  Box,
  Button,
  Card,
  Heading,
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
import { FiBell, FiChevronDown, FiHelpCircle, FiLogOut, FiSettings, FiUser } from "react-icons/fi";

export default function PopupMenuExamples({ textColor, textColorSecondary, bgColor, hoverBg }) {
  const borderColor = useColorModeValue("secondaryGray.100", "whiteAlpha.100");

  return (
    <Box mt="24px">
      <Heading as="h4" size="md" mb="20px" color={textColor}>
        Popup Menu Examples
      </Heading>

      <SimpleGrid columns={{ base: 1, md: 2 }} gap="20px">
        {/* Simple Dropdown Menu */}
        <Card p="24px" bg={bgColor}>
          <Heading size="sm" mb="16px" color={textColor}>
            User Menu
          </Heading>
          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<FiChevronDown />}
              variant="outline"
              w="100%"
              justifyContent="space-between"
            >
              Account Options
            </MenuButton>
            <MenuList
              bg={bgColor}
              border="1px solid"
              borderColor={borderColor}
              shadow="xl"
              py="8px"
            >
              <MenuItem
                icon={<FiUser />}
                _hover={{ bg: hoverBg }}
                _focus={{ bg: hoverBg }}
              >
                Profile
              </MenuItem>
              <MenuItem
                icon={<FiSettings />}
                _hover={{ bg: hoverBg }}
                _focus={{ bg: hoverBg }}
              >
                Settings
              </MenuItem>
              <MenuItem
                icon={<FiBell />}
                _hover={{ bg: hoverBg }}
                _focus={{ bg: hoverBg }}
              >
                Notifications
              </MenuItem>
              <MenuDivider />
              <MenuItem
                icon={<FiLogOut />}
                _hover={{ bg: "red.50", color: "red.600" }}
                _focus={{ bg: "red.50", color: "red.600" }}
              >
                Sign Out
              </MenuItem>
            </MenuList>
          </Menu>
        </Card>

        {/* Advanced Menu with Groups */}
        <Card p="24px" bg={bgColor}>
          <Heading size="sm" mb="16px" color={textColor}>
            Settings Menu
          </Heading>
          <Menu closeOnSelect={false}>
            <MenuButton
              as={Button}
              rightIcon={<FiChevronDown />}
              variant="filled"
              bg={ bgColor=== "white" ? "gray.100" : "whiteAlpha.100"}
              w="100%"
              justifyContent="space-between"
            >
              Quick Settings
            </MenuButton>
            <MenuList
              bg={bgColor}
              border="1px solid"
              borderColor={borderColor}
              shadow="xl"
              py="8px"
              minW="250px"
            >
              <MenuGroup title="Appearance" color={textColorSecondary} fontSize="sm">
                <MenuOptionGroup type="radio" value="light">
                  <MenuItemOption
                    value="light"
                    _hover={{ bg: hoverBg }}
                    _focus={{ bg: hoverBg }}
                  >
                    Light Mode
                  </MenuItemOption>
                  <MenuItemOption
                    value="dark"
                    _hover={{ bg: hoverBg }}
                    _focus={{ bg: hoverBg }}
                  >
                    Dark Mode
                  </MenuItemOption>
                  <MenuItemOption
                    value="auto"
                    _hover={{ bg: hoverBg }}
                    _focus={{ bg: hoverBg }}
                  >
                    System Default
                  </MenuItemOption>
                </MenuOptionGroup>
              </MenuGroup>

              <MenuDivider />

              <MenuGroup title="Preferences" color={textColorSecondary} fontSize="sm">
                <MenuOptionGroup type="checkbox" defaultValue={['notifications', 'updates']}>
                  <MenuItemOption
                    value="notifications"
                    _hover={{ bg: hoverBg }}
                    _focus={{ bg: hoverBg }}
                  >
                    Email Notifications
                  </MenuItemOption>
                  <MenuItemOption
                    value="updates"
                    _hover={{ bg: hoverBg }}
                    _focus={{ bg: hoverBg }}
                  >
                    Product Updates
                  </MenuItemOption>
                  <MenuItemOption
                    value="marketing"
                    _hover={{ bg: hoverBg }}
                    _focus={{ bg: hoverBg }}
                  >
                    Marketing Emails
                  </MenuItemOption>
                </MenuOptionGroup>
              </MenuGroup>
            </MenuList>
          </Menu>
        </Card>

        {/* Context Menu Style */}
        <Card p="24px" bg={bgColor}>
          <Heading size="sm" mb="16px" color={textColor}>
            Actions Menu
          </Heading>
          <Menu>
            <MenuButton
              as={Button}
              variant="brand"
              w="100%"
            >
              Manage Content
            </MenuButton>
            <MenuList
              bg={bgColor}
              border="1px solid"
              borderColor={borderColor}
              shadow="xl"
              py="8px"
            >
              <MenuItem
                _hover={{ bg: hoverBg }}
                _focus={{ bg: hoverBg }}
              >
                Edit
              </MenuItem>
              <MenuItem
                _hover={{ bg: hoverBg }}
                _focus={{ bg: hoverBg }}
              >
                Duplicate
              </MenuItem>
              <MenuItem
                _hover={{ bg: hoverBg }}
                _focus={{ bg: hoverBg }}
              >
                Archive
              </MenuItem>
              <MenuDivider />
              <MenuItem
                _hover={{ bg: "red.50", color: "red.600" }}
                _focus={{ bg: "red.50", color: "red.600" }}
              >
                Delete
              </MenuItem>
            </MenuList>
          </Menu>
        </Card>

        {/* Icon Menu */}
        <Card p="24px" bg={bgColor}>
          <Heading size="sm" mb="16px" color={textColor}>
            Help Menu
          </Heading>
          <Menu>
            <MenuButton
              as={Button}
              leftIcon={<FiHelpCircle />}
              variant="ghost"
              w="100%"
              justifyContent="flex-start"
            >
              Get Help
            </MenuButton>
            <MenuList
              bg={bgColor}
              border="1px solid"
              borderColor={borderColor}
              shadow="xl"
              py="8px"
            >
              <MenuItem
                _hover={{ bg: hoverBg }}
                _focus={{ bg: hoverBg }}
              >
                Documentation
              </MenuItem>
              <MenuItem
                _hover={{ bg: hoverBg }}
                _focus={{ bg: hoverBg }}
              >
                Video Tutorials
              </MenuItem>
              <MenuItem
                _hover={{ bg: hoverBg }}
                _focus={{ bg: hoverBg }}
              >
                Community Forum
              </MenuItem>
              <MenuDivider />
              <MenuItem
                _hover={{ bg: hoverBg }}
                _focus={{ bg: hoverBg }}
              >
                Contact Support
              </MenuItem>
            </MenuList>
          </Menu>
        </Card>
      </SimpleGrid>
    </Box>
  );
}
