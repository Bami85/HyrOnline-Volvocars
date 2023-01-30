import React from 'react';
import { SimpleGrid, Group, Title, Button,Text } from '@mantine/core';
import { Link } from 'react-router-dom';
import Helmet from "react-helmet";


const Return = () => {
 
 

  return (
    
    < >    
     <Helmet>
      <title> Retur & Reklamation</title>
    </Helmet>
         
      <Title
        mt={80}
        mb={20}
        order={2}
        size="h1"
        sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}` })}
        weight={900}
        align="center"
      >
         Retur & Reklamation
      </Title>
    
    

      
      <SimpleGrid align="center" mb="25px">
          <Text align="center" ml="sm" mr="sm" mb="xl">
            Välkommen till retur portal på volvo-cars-ecru.vercel.app
            <br/><br/>
            Här kan du snabbt och enkelt skapa ett formulär för retur.
            <br/><br/>
            Vad du ska göra:
            <br/><br/>
            Gå in på Kundsupport, ange postnummer och beställningnummer, välj de varor som du vill returnera.
            <br/><br/>
            Ditt ärende för retur kommer att skapas automatiskt och skickas till oss.
            <br/><br/>
            Kontakta gärna vårt vänliga kundserviceteam om du har några frågor.
            <br/><br/>
            Du kan kontakta oss via e-mail volvo-cars@return.se
            <br/><br/>
            Måndag–fredag 8.00–18.00
            <br/><br/>
            Lördag 8.00–17.00
            <br/><br/>
            Söndag: stängt
          </Text>
     
       </SimpleGrid>
       <Group position="center" mt="xl" mb="200px">
       <Link to ="/ContactUs">
        <Button type="submit" size="md">
          Returnera en vara
        </Button>
        </Link>
      </Group>
      

      </>
   
  
  );
}

export default Return