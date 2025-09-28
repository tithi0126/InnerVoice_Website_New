import React from "react";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Menu,
  MenuButton,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
  Tag,
  TagCloseButton,
  TagLabel,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { FiChevronDown, FiCheck } from "react-icons/fi";

export default function CategoryMultiSelect({
  formData,
  handleCategoryChange,
  removeCategory,
  categoryOptions,
}) {
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const textColorSecondary = useColorModeValue("secondaryGray.700", "whiteAlpha.700");
  const borderColor = useColorModeValue("secondaryGray.100", "whiteAlpha.100");
  const bgColor = useColorModeValue("white", "navy.800");
  const hoverBg = useColorModeValue("gray.50", "whiteAlpha.100");

  return (
    <FormControl gridColumn={{ base: "1", md: "1 / -1" }}>
      <FormLabel
        display="flex"
        ms="4px"
        htmlFor="categories"
        fontSize="sm"
        color={textColor}
        fontWeight="600"
        mb="8px"
      >
        Categories
      </FormLabel>

      <Menu closeOnSelect={false}>
        <MenuButton
          as={Button}
          rightIcon={<FiChevronDown />}
          w="100%"
          h="44px"
          variant="filled"
          bg={useColorModeValue("gray.50", "whiteAlpha.50")}
          border="1px solid"
          borderColor={borderColor}
          _hover={{
            borderColor: "brand.400",
            bg: useColorModeValue("gray.100", "whiteAlpha.100"),
          }}
          _expanded={{
            borderColor: "brand.500",
            shadow: "outline",
          }}
          justifyContent="space-between"
          fontWeight="normal"
          textAlign="left"
        >
          {formData.categories.length > 0
            ? `${formData.categories.length} categories selected`
            : "Select categories"}
        </MenuButton>
        <MenuList
          minW="100%"
          maxH="300px"
          overflowY="auto"
          zIndex="dropdown"
          bg={bgColor}
          border="1px solid"
          borderColor={borderColor}
          shadow="xl"
          py={2}
        >
          <MenuOptionGroup
            type="checkbox"
            value={formData.categories}
            onChange={handleCategoryChange}
          >
            {categoryOptions.map((option) => (
              <MenuItemOption
                key={option.value}
                value={option.value}
                icon={<FiCheck />}
                _hover={{
                  bg: bgColor === "white" ? "gray.100" : "whiteAlpha.100",
                }}
                _focus={{
                  bg: bgColor === "white" ? "gray.100" : "whiteAlpha.100",
                }}
              >
                {option.label}
              </MenuItemOption>
            ))}
          </MenuOptionGroup>
        </MenuList>
      </Menu>

      {/* Selected categories tags */}
      {formData.categories.length > 0 && (
        <Box mt="3">
          <Flex wrap="wrap" gap="2" mt="2">
            {formData.categories.map((category) => {
              const categoryInfo = categoryOptions.find(opt => opt.value === category);
              return (
                <Tag
                  key={category}
                  size="md"
                  variant="subtle"
                  colorScheme="brand"
                  borderRadius="md"
                  py="2"
                  px="3"
                  shadow="sm"
                >
                  <TagLabel fontSize="sm" fontWeight="500">
                    {categoryInfo?.label || category}
                  </TagLabel>
                  <TagCloseButton
                    onClick={() => removeCategory(category)}
                    _hover={{
                      bg: "red.100",
                      color: "red.600",
                    }}
                  />
                </Tag>
              );
            })}
          </Flex>
        </Box>
      )}

      <Text fontSize="xs" color={textColorSecondary} mt="2">
        Select multiple categories from the dropdown
      </Text>
    </FormControl>
  );
}
