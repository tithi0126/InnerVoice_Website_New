import React, { useState } from "react";
import {
  Box,
  Button,
  SimpleGrid,
  Heading,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import Card from "components/card/Card";

// Import the new components
import PersonalDetailsForm from "./components/PersonalDetailsForm";
import MessageInput from "./components/MessageInput";
import GenderSelection from "./components/GenderSelection";
import FileUploadField from "./components/FileUploadField";
import DateTimeFields from "./components/DateTimeFields";
import CategoryMultiSelect from "./components/CategoryMultiSelect";
import NewsletterSubscription from "./components/NewsletterSubscription";
import AdditionalInfoAccordion from "./components/AdditionalInfoAccordion";
import StepWizard from "./components/StepWizard";
import PopupMenuExamples from "./components/PopupMenuExamples";

export default function FormPage() {
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const textColorSecondary = useColorModeValue("secondaryGray.700", "whiteAlpha.700");
  const borderColor = useColorModeValue("secondaryGray.100", "whiteAlpha.100");
  const bgColor = useColorModeValue("white", "navy.800");
  const hoverBg = useColorModeValue("gray.50", "whiteAlpha.100");
  const toast = useToast();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    message: "",
    country: "",
    subscribe: false,
    gender: "",
    uploadFile: null,
    date: "",
    time: "",
    dateTime: "",
    categories: [],
  });

  const [fileName, setFileName] = useState("");

  const handleChange = (e) => {
    const { id, value, type, checked, files } = e.target;

    if (type === "file" && files && files[0]) {
      setFormData((prevData) => ({
        ...prevData,
        [id]: files[0],
      }));
      setFileName(files[0].name);
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [id]: type === "checkbox" ? checked : value,
      }));
    }
  };

  const handleRadioChange = (value) => {
    setFormData((prevData) => ({
      ...prevData,
      gender: value,
    }));
  };

  const handleCategoryChange = (selectedValues) => {
    setFormData((prevData) => ({
      ...prevData,
      categories: selectedValues,
    }));
  };

  const removeCategory = (categoryToRemove) => {
    setFormData(prev => ({
      ...prev,
      categories: prev.categories.filter(cat => cat !== categoryToRemove)
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const combinedDateTime = formData.date && formData.time
      ? `${formData.date}T${formData.time}`
      : null;

    const submissionData = {
      ...formData,
      combinedDateTime
    };

    console.log("Form Data Submitted:", submissionData);
    toast({
      title: "Form Submitted!",
      description: "Your data has been logged to the console.",
      status: "success",
      duration: 3000,
      isClosable: true,
      position: "top-right",
    });

    setFormData({
      fullName: "",
      email: "",
      password: "",
      message: "",
      country: "",
      subscribe: false,
      gender: "",
      uploadFile: null,
      date: "",
      time: "",
      dateTime: "",
      categories: [],
    });
    setFileName("");
  };

  const handleFileClick = () => {
    document.getElementById("uploadFile").click();
  };

  const categoryOptions = [
    { value: "technology", label: "Technology" },
    { value: "business", label: "Business" },
    { value: "health", label: "Health & Wellness" },
    { value: "education", label: "Education" },
    { value: "entertainment", label: "Entertainment" },
    { value: "sports", label: "Sports" },
    { value: "travel", label: "Travel" },
    { value: "food", label: "Food & Dining" },
  ];

  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <SimpleGrid
        mb="20px"
        columns={{ base: 1, lg: 1 }}
        spacing={{ base: "20px", xl: "20px" }}
      >
        <Card
          p={{ base: "20px", md: "30px" }}
          bg={bgColor}
          boxShadow="lg"
          borderRadius="xl"
        >
          <Heading
            as="h4"
            size="md"
            mb="30px"
            color={textColor}
            fontWeight="bold"
            letterSpacing="-0.5px"
          >
            Create New Entry
          </Heading>
          <form onSubmit={handleSubmit}>
            <SimpleGrid columns={{ base: 1, md: 2 }} gap="24px">
              <PersonalDetailsForm formData={formData} handleChange={handleChange} />
              <MessageInput formData={formData} handleChange={handleChange} />
              <GenderSelection formData={formData} handleRadioChange={handleRadioChange} />
              <FileUploadField
                formData={formData}
                handleChange={handleChange}
                fileName={fileName}
                handleFileClick={handleFileClick}
              />
              <DateTimeFields formData={formData} handleChange={handleChange} />
              <CategoryMultiSelect
                formData={formData}
                handleCategoryChange={handleCategoryChange}
                removeCategory={removeCategory}
                categoryOptions={categoryOptions}
              />
              <NewsletterSubscription formData={formData} handleChange={handleChange} />
            </SimpleGrid>

            <Button
              type="submit"
              variant="brand"
              fontSize="sm"
              fontWeight="600"
              w="100%"
              h="50px"
              mt="32px"
              mb="8px"
              _hover={{
                transform: "translateY(-2px)",
                shadow: "lg",
              }}
              _active={{
                transform: "translateY(0)",
              }}
              transition="all 0.2s"
            >
              Submit Form
            </Button>
          </form>
        </Card>
      </SimpleGrid>

      <AdditionalInfoAccordion />
      <StepWizard
        handleSubmit={handleSubmit}
        textColor={textColor}
        textColorSecondary={textColorSecondary}
        bgColor={bgColor}
      />
      <PopupMenuExamples
        textColor={textColor}
        textColorSecondary={textColorSecondary}
        bgColor={bgColor}
        hoverBg={hoverBg}
      />
    </Box>
  );
}
