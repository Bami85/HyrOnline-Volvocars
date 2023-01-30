import React from "react";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./scenes/home/Home";
import ItemDetails from "./scenes/itemDetails/ItemDetails";
import Checkout from "./scenes/checkout/Checkout";
import Confirmation from "./scenes/checkout/Confirmation";
import Navbar from "./scenes/global/Navbar";
import CartMenu from "./scenes/global/CartMenu";
import Footer from "./scenes/global/Footer";
import Lasmer from "./scenes/global/Lasmer";
import CookieConsent from "react-cookie-consent";
import { Paper, Text} from '@mantine/core';
import IntegritetPolicy from "./scenes/global/IntegritetPolicy";
import ContactUs from "./scenes/global/ContactUs";
import { Button, Flex } from '@mantine/core';
import { Link } from "react-router-dom";
import Return from "./scenes/global/Return";
import NotFound from "./scenes/global/NotFound";
// import { Helmet } from 'react-helmet';
import { Helmet, HelmetProvider } from 'react-helmet-async';




const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};


function App() {
  return (
    <div className="app">
    <BrowserRouter>
    
    <Navbar/>
    <HelmetProvider>
    <Helmet>
            <title>Hyr Online | Volvo Cars - SE</title>
            <meta
              name="description"
              content="Hyr Online | Volvo Cars"
            />
            <meta name="keywords" content="Return, Lasmer, items, items,ItegritetPolicy, ContactUs" />

           
    </Helmet>
 </HelmetProvider>
      <ScrollToTop/>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/NotFound" element={< NotFound/>} />
      <Route path="/Lasmer" element={<Lasmer />} />
      <Route path="/IntegritetPolicy" element={<IntegritetPolicy />} />
      <Route path="/ContactUs" element={<ContactUs />} />
      <Route path="/Return" element={<Return />} />
      <Route path="item/:itemId" element={<ItemDetails />} />
       <Route path="checkout" element={<Checkout />} />
       <Route path="checkout/success" element={<Confirmation />} />
      </Routes>


        <Paper radius="md" shadow="md">
        <CookieConsent  debug={true} style={{background:'#0C8599',textAlign:'left'}} buttonStyle={{color:'#000', background:"#fff"}}>
          
              <Text color="white" size="xs" >
              När du besöker vår webbplats använder vi cookies för att se till att du besöker en fake webbplats. Dessa cookies kan handla om dig, dina preferenser eller din enhet.Så vi tar inte ansvar ifall man lägga till credit kort eller gör en köp. Det är bara en fake webbsite där vi lära oss hur man bygger upp en webbshop.
              <Flex sx={{width:"20px" ,justifyContent:"space-around", paddingLeft: "69px"}}> 
                <Link to ="/IntegritetPolicy">
                  <Button background="#fff"  color="dark">Läs mer om policy</Button>
                </Link>
              </Flex>  
              </Text>
              {/* <Group position="right" mt="xs">
                <Button variant="default" size="xs">
                  Cookies preferences
                </Button>
                <Button variant="outline" size="xs">
                  Accept all
                </Button>
              </Group> */}
              </CookieConsent>
            </Paper>

      <CartMenu />
      <Footer />
    </BrowserRouter>
  
    </div>
  );
}

export default App;