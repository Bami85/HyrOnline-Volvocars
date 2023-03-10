import React from "react";
// import { Helmet } from "react-helmet";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Box, IconButton, Typography } from "@mui/material";
import { Button } from '@mantine/core';
import Tabs from "@mui/material/Tabs";
// import Tab from "@mui/material/Tab";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Item from "../../components/Item";
//import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { shades } from "../../theme";
import { addToCart } from "../../state";
import { useDispatch } from "react-redux";

const ItemDetails = () => {
  const dispatch = useDispatch();
  const { itemId } = useParams();
  const [value, setValue] = useState("description");
  const [count, setCount] = useState(1);
  const [item, setItem] = useState(null);
  const [items, setItems] = useState([]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  async function getItem() {
    const item = await fetch(
      `http://localhost:1337/api/items/${itemId}?populate=image`,
      {
        method: "GET",
      }
    );
    const itemJson = await item.json();
    setItem(itemJson.data);
  }

  async function getItems() {
    const items = await fetch(
      `http://localhost:1337/api/items?populate=image`,
      {
        method: "GET",
      }
    );
    const itemsJson = await items.json();
    setItems(itemsJson.data);
  }

  useEffect(() => {
    getItem();
    getItems();
  }, [itemId]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    
   
    <Box width="80%" m="80px auto" >
       <HelmetProvider>
          <Helmet>
            <title> {`${item?.attributes?.name}`} </title>
            <meta name="description" content= {`${item?.attributes?.name}`}/>
         </Helmet>
        </HelmetProvider>
         

         
      <Box display="flex" flexWrap="wrap" columnGap="40px" >
        
        {/* IMAGES */}
        <Box flex="1 1 40%" mb="40px" >
          <img
            
            alt={item?.name}
            width="100%"
            height="100%"
            src={`http://localhost:1337${item?.attributes?.image?.data?.attributes?.formats?.medium?.url}`}
            style={{ objectFit: "contain" }}
          />
          
        </Box>

        {/* ACTIONS */}
        <Box flex="1 1 50%" mb="40px">
          <Box m="65px 0 25px 0">
            <Typography variant="h3">{item?.attributes?.name}</Typography>
            <Typography>Fr??n {item?.attributes?.price} kr/m??n</Typography>
            <Typography sx={{ mt: "20px" }}>
              {item?.attributes?.longDescription}
            </Typography>
          </Box>

          <Box display="flex" alignItems="center" minHeight="50px">
            <Box
              display="flex"
              alignItems="center"
              border={`1.5px solid ${shades.neutral[300]}`}
              mr="20px"
              p="2px 5px"
            >
              <IconButton onClick={() => setCount(Math.max(count - 1, 0))}>
                <RemoveIcon />
              </IconButton>
              <Typography sx={{ p: "0 5px" }}>{count}</Typography>
              <IconButton onClick={() => setCount(count + 1)}>
                <AddIcon />
              </IconButton>
            </Box>
              <Button color="dark" radius="md" size="md"
              onClick={() => dispatch(addToCart({ item: { ...item, count } }))}
            >
             BEST??LL
            </Button>
          </Box>
          {/* <Box>
            <Box m="20px 0 5px 0" display="flex">
              <FavoriteBorderOutlinedIcon />
              <Typography sx={{ ml: "5px" }}>ADD TO WISHLIST</Typography>
            </Box>
            <Typography>CATEGORIES: {item?.attributes?.category}</Typography>
          </Box> */}
        </Box>
      </Box>

      {/* INFORMATION */}
      <Box m="0px 0">
        <Tabs value={value} onChange={handleChange}>
          {/* <Tab label="" value="description" /> */}
          {/* <Tab label="REVIEWS" value="reviews" /> */}
        </Tabs>
      </Box>
      {/* <Box display="flex" flexWrap="wrap" gap="15px">
        {value === "description" && (
          <div>{item?.attributes?.longDescription}</div>
        )}
        {value === "reviews" && <div></div>}
      </Box> */}

      {/* RELATED ITEMS */}
      <Box mt="50px" width="100%">
        <Box
          mt="20px"
          display="flex"
          flexWrap="wrap"
          columnGap="1.33%"
          justify="space-between"
        >
          {items.slice(0, 4).map((item, i) => (
            <Item key={`${item.name}-${i}`} item={item} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default ItemDetails;