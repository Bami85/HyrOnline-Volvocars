import { useSelector } from "react-redux";
import { Box, Button, Stepper, Step, StepLabel } from "@mui/material";
import { Formik } from "formik";
import { useState } from "react";
import * as yup from "yup";
import { shades } from "../../theme";

import Payment from "./Payment";
import Shipping from "./Shipping";
import { loadStripe } from "@stripe/stripe-js";
// import { Helmet } from "react-helmet";
import { Helmet, HelmetProvider } from 'react-helmet-async';

const stripePromise = loadStripe(
  "pk_test_51Ljk0AE6vIgtEnYe4de1BOxh1cI32nMn0fEJ0ibSAWG5HvTWweTc95B9DUBJnYsvrkOHDOl2mpIb63BToVjoASCN00HRcqXvsK"
);

const Checkout = () => {
  const [activeStep, setActiveStep] = useState(0);
  const cart = useSelector((state) => state.cart.cart);
  const isFirstStep = activeStep === 0;
  const isSecondStep = activeStep === 1;

  const handleFormSubmit = async (values, actions) => {
    setActiveStep(activeStep + 1);

    // this copies the billing address onto shipping address
    // if (isFirstStep && values.shippingAddress.isSameAddress) {
      if (isFirstStep && values.isSameAddress) {
      actions.setFieldValue("shippingAddress", {
        ...values.billingAddress,
        isSameAddress: true,
      });
    }

    if (isSecondStep) {
      makePayment(values);
    }

    actions.setTouched({});
  };

  async function makePayment(values) {
    const stripe = await stripePromise;
    const requestBody = {
      userName: [values.firstName, values.lastName].join(" "),
      email: values.email,
      products: cart.map(({ id, count }) => ({
        id,
        count,
      })),
    };

    const response = await fetch("http://localhost:1337/api/orders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestBody),
    });
    const session = await response.json();
    await stripe.redirectToCheckout({
      sessionId: session.id,
    });
  }

  return (
    <Box width="80%" m="100px auto">
        <HelmetProvider>
         <Helmet>
            <title>Checkout </title>
            <meta name="description" content="checkout"/>
         </Helmet>
         </HelmetProvider>
      <Stepper activeStep={activeStep} sx={{ m: "20px 0" }}>
        <Step>
          <StepLabel>Fakturering</StepLabel>
        </Step>
        <Step>
          <StepLabel>Betalning</StepLabel>
        </Step>
      </Stepper>
      <Box>
        <Formik
          onSubmit={handleFormSubmit}
          initialValues={initialValues}
          validationSchema={checkoutSchema[activeStep]}
        >
          {({
            values,
            errors,
            touched,
            handleBlur,
            handleChange,
            handleSubmit,
            setFieldValue,
          }) => (
            <form onSubmit={handleSubmit}>
              {isFirstStep && (
                <Shipping
                  values={values}
                  errors={errors}
                  touched={touched}
                  handleBlur={handleBlur}
                  handleChange={handleChange}
                  setFieldValue={setFieldValue}
                />
              )}
              {isSecondStep && (
                <Payment
                  values={values}
                  errors={errors}
                  touched={touched}
                  handleBlur={handleBlur}
                  handleChange={handleChange}
                  setFieldValue={setFieldValue}
                />
              )}
              <Box display="flex" justifyContent="space-between" gap="50px">
                {!isFirstStep && (
                  <Button
                    fullWidth
                    // color="secondary"
                    variant="contained"
                    sx={{
                      backgroundColor: shades.secondary[200],
                      boxShadow: "none",
                      color: "#3f51b5",
                      borderRadius: 0,
                      padding: "15px 40px",
                    }}
                    onClick={() => setActiveStep(activeStep - 1)}
                  >
                    Back
                  </Button>
                )}
                <Button
                  fullWidth
                  type="submit"
                   color="secondary"
                  variant="contained"
                  sx={{
                    backgroundColor: shades.secondary[200],
                    boxShadow: "none",
                    // color: "FFFFFF",
                    borderRadius: 0,
                    padding: "15px 20px",
                  }}
                >
                  {!isSecondStep ? "Nästa" : "Beställ"}
                </Button>
              </Box>
            </form>
          )}
        </Formik>
      </Box>
    </Box>
  );
};

const initialValues = {
  billingAddress: {
    firstName: "",
    lastName: "",
    country: "",
    street1: "",
    street2: "",
    city: "",
    state: "",
    zipCode: "",
  },
  shippingAddress: {
    isSameAddress: true,
    firstName: "",
    lastName: "",
    country: "",
    street1: "",
    street2: "",
    city: "",
    state: "",
    zipCode: "",
  },
  email: "",
  phoneNumber: "",
};

const checkoutSchema = [
  yup.object().shape({
    billingAddress: yup.object().shape({


      firstName: yup
      .string()
      .matches(/^[A-Za-z ]*$/, 'Vänligen ange ett giltigt förnamn')
      .max(40)
      .required(),
      lastName: yup
      .string()
      .matches(/^[A-Za-z ]*$/, 'Vänligen ange ett giltigt efternamn')
      .max(40)
      .required(),
      country: yup
      .string()
      .matches(/^[A-Za-z ]*$/, 'Vänligen ange ett giltigt land')
      .max(40)
      .required(),
      street1: yup.string().required("required"),
      street2: yup.string().required("required"),
      city: yup
      .string()
      .matches(/^[A-Za-z-ö ]*$/, 'Vänligen ange ett giltigt stad')
      .max(40)
      .required(),
      state: yup
      .string()
      .matches(/^[A-Za-z ]*$/, 'Vänligen ange ett giltigt stat')
      .max(40)
      .required(),
      zipCode: yup
      .string()
      .matches(/^[1-9 ]*$/, 'Vänligen ange ett giltigt Post Kode')
      .max(40)
      .required(),
    }),
  }),
  yup.object().shape({
    email: yup.string().email().required("@"),
    phoneNumber: yup.string().matches(/^[1-9]*$/, 'Vänligen ange ett giltigt telefon numer').required("required"),
  }),
];

export default Checkout;

