import React from "react";
import { Menu } from '@mantine/core';
import { IconBrandFacebook } from '@tabler/icons';
import { useDispatch, useSelector } from "react-redux";
import { Badge, Box, IconButton } from "@mui/material";
import { Text } from '@mantine/core';
// import Helmet from "react-helmet";
import { Helmet, HelmetProvider } from 'react-helmet-async';

import {

  ShoppingBagOutlined

} from "@mui/icons-material";
import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";
import { shades } from "../../theme";
import { setIsCartOpen } from "../../state";


const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);

  return (
    <>
    
   
  
    <Box
      display="flex"
      alignItems="center"
      width="100%"
      height="60px"
      backgroundColor="rgba(255, 255, 255, 0.95)"
      color="black"
      position="fixed"
      top="0"
      left="0"
      zIndex="1"
    >
   
      <Box
      
        width="80%"
        margin="auto"
        display="flex"
        justify="space-between"
        alignItems="center"
      >
        <Text weight={400} size="lg" 
        
        onClick={() => navigate("/")}
        sx={{ "&:hover": { cursor: "pointer" } }}
        color={shades.secondary[700]}
        
      >
     <Text color="dark" radius="xl" width={300} size={25} fw={900} > 
       VOLVO
       <HelmetProvider>
       <Helmet>
            <title> VOLVO</title>
            <meta name="description" content="/" />
        </Helmet>
        </HelmetProvider>
    </Text>
       
        
      </Text>
        
  
      
        <Box
          display="flex"
          justify="space-between"
          columnGap="20px"
          zIndex="2"
        >
          <IconButton sx={{ color: "black" }}>
         
          </IconButton>
          <IconButton sx={{ color: "black" }}>
          </IconButton>
          <IconButton sx={{ color: "black" }}>
          </IconButton>
        </Box>


       <Box 
          textAlign="center"
          color="black"
          margin="auto"
          marginRight="15px"
          display="flex"
          justify="space-between"
          alignItems="center">

            <Badge
            badgeContent={cart.length}
            color="secondary"
            invisible={cart.length === 0}
            sx={{
              "& .MuiBadge-badge": {
                left: 5,
                top: 5,
                padding: "0 ",
                height: "14px",
                minWidth: "13px",
              },
            }}
          >
            <IconButton
              onClick={() => dispatch(setIsCartOpen({}))}
              sx={{ color: "black" } }
            >
              <ShoppingBagOutlined />
            </IconButton>
            
            </Badge >

       </Box>

        

        <Box
          textAlign="center"
          color="black"
          marginRight="0px"
          display="flex"
     
          alignItems="center"
        >
            <Menu shadow="md" width={300} >
          <Menu.Target >
          
          <Text color="dark" radius="xl" width={300} fw={700} > Meny
       
          
          </Text>
        
          </Menu.Target>

          <Menu.Dropdown>
            <Link to ="/">
              <Menu.Item fw={700} > Våra bilar</Menu.Item>
            </Link>
            <Link to ="/item/2">
              <Menu.Item fw={700}> Tjänstebilar</Menu.Item>
            </Link>
            <Link to ="/ContactUs">
              <Menu.Item fw={700} >Kundsupport</Menu.Item>
            </Link>
            <Link to ="/Lasmer">
              <Menu.Item fw={700} >Läs mer</Menu.Item>
            </Link>
             <Link to ="/IntegritetPolicy">
              <Menu.Item fw={700}>Vår Policy</Menu.Item>
            </Link>
            <Link to ="/Return">
              <Menu.Item fw={700} >Returnera en vara</Menu.Item>
            </Link>

            <Menu.Divider />

            <Menu.Label  >Sweden</Menu.Label>
            <Menu.Item icon={<IconBrandFacebook size={14} />}></Menu.Item>
           
            

          </Menu.Dropdown>
        </Menu>

        </Box>
          </Box>


        </Box>
    </>
  );
}

export default Navbar;





