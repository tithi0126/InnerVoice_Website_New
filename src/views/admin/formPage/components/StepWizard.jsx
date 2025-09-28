import React from "react";
import {
  Box,
  Button,
  Card,
  Heading,
  HStack,
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  Stepper,
  StepSeparator,
  StepStatus,
  StepTitle,
  Text,
  useColorModeValue,
  useSteps,
  VStack,
} from "@chakra-ui/react";

export default function StepWizard({ handleSubmit, textColor, textColorSecondary, bgColor }) {
  const steps = [
    { title: 'Personal', description: 'Basic Information' },
    { title: 'Details', description: 'Additional Details' },
    { title: 'Preferences', description: 'Settings & Options' },
    { title: 'Review', description: 'Confirm & Submit' },
  ];

  const { activeStep, setActiveStep } = useSteps({
    index: 0,
    count: steps.length,
  });

  const nextStep = () => setActiveStep((prev) => Math.min(prev + 1, steps.length - 1));
  const prevStep = () => setActiveStep((prev) => Math.max(prev - 1, 0));

  return (
    <Box mt="24px">
      <Heading as="h4" size="md" mb="20px" color={textColor}>
        Step-by-Step Wizard
      </Heading>

      <Card p="24px" bg={bgColor}>
        {/* Stepper */}
        <Stepper
          index={activeStep}
          colorScheme="brand"
          mb="32px"
        >
          {steps.map((step, index) => (
            <Step key={index}>
              <StepIndicator>
                <StepStatus
                  complete={<StepIcon />}
                  incomplete={<StepNumber />}
                  active={<StepNumber />}
                />
              </StepIndicator>

              <Box flexShrink='0'>
                <StepTitle color={textColor} fontSize="sm" fontWeight="600">
                  {step.title}
                </StepTitle>
                <StepDescription color={textColorSecondary} fontSize="xs">
                  {step.description}
                </StepDescription>
              </Box>

              <StepSeparator />
            </Step>
          ))}
        </Stepper>

        {/* Step Content */}
        <Box minH="200px" mb="24px">
          {activeStep === 0 && (
            <VStack align="start" spacing="16px">
              <Heading size="sm" color={textColor}>Personal Information</Heading>
              <Text color={textColorSecondary}>
                Enter your basic personal details like name, email, and contact information.
              </Text>
              {/* You can add form fields specific to this step here */}
            </VStack>
          )}

          {activeStep === 1 && (
            <VStack align="start" spacing="16px">
              <Heading size="sm" color={textColor}>Additional Details</Heading>
              <Text color={textColorSecondary}>
                Provide more detailed information about your preferences and requirements.
              </Text>
              {/* Step-specific form fields */}
            </VStack>
          )}

          {activeStep === 2 && (
            <VStack align="start" spacing="16px">
              <Heading size="sm" color={textColor}>Preferences & Settings</Heading>
              <Text color={textColorSecondary}>
                Configure your settings and customization options.
              </Text>
              {/* Step-specific form fields */}
            </VStack>
          )}

          {activeStep === 3 && (
            <VStack align="start" spacing="16px">
              <Heading size="sm" color={textColor}>Review & Submit</Heading>
              <Text color={textColorSecondary}>
                Review all the information you've entered and submit your form.
              </Text>
              {/* Review summary or final confirmation */}
            </VStack>
          )}
        </Box>

        {/* Navigation Buttons */}
        <HStack justify="space-between" mt="24px">
          <Button
            variant="outline"
            onClick={prevStep}
            isDisabled={activeStep === 0}
            size="md"
          >
            Previous
          </Button>

          <Text fontSize="sm" color={textColorSecondary} fontWeight="500">
            Step {activeStep + 1} of {steps.length}
          </Text>

          {activeStep === steps.length - 1 ? (
            <Button
              variant="brand"
              onClick={handleSubmit}
              size="md"
            >
              Submit
            </Button>
          ) : (
            <Button
              variant="brand"
              onClick={nextStep}
              size="md"
            >
              Next
            </Button>
          )}
        </HStack>
      </Card>
    </Box>
  );
}
