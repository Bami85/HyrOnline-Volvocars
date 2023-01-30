


import React from 'react';
import { SimpleGrid, Group, Title, Button,Text } from '@mantine/core';
import { Link } from 'react-router-dom';
// import {Helmet} from "react-helmet";
import { Helmet, HelmetProvider } from 'react-helmet-async';


const IntegritetPolicy = () => {
 

  return (
    // <form onSubmit={form.onSubmit(() => {})}>


    < >
      <Title
        mt={80}
        mb={20}
        order={2}
        size="h1"
        sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}` })}
        weight={900}
        align="center"
      >
         Integrity and Policy
         <HelmetProvider>
          <Helmet>
            <title> Integrity and Policy</title>
            <meta name="description" content="/IntegritetPolicy" />
         </Helmet>
         </HelmetProvider>
      </Title>
    

      
      {/* <SimpleGrid align="center" position="center"  ml="36px" mr="36px" mb="175px"> */}
      <SimpleGrid align="center" mb="25px">
          <Text align="center" ml={140} mr={140} mt={80} mb="md">
            Vi samlar in information från dig när du kontaktar oss via ett kontaktformulär. Informationen som samlas in inkluderar ditt namn, e-postadress och telefonnummer (om du fyller i det i kontaktformuläret). Dessutom, när du besöker webbplatsen, tar vi automatiskt emot och sparar information från din dator och webbläsare, inklusive din IP-adress, mjukvara och hårdvaruinformation och den begärda sidan. Användning av information och syfte.
            <br/><br/>
           Informationen vi samlar in från dig kan användas för att:
            Kontakta dig via e-post eller telefonnummer (om du fyller i det i kontaktformuläret)
            Förbättra vår webbplats
            Förbättra vår kundservice.
            <br/><br/>
            Utlämnande till tredje part
            <br/><br/>
            Vi säljer, handlar inte med eller på annat sätt överför personligt identifierbar information till tredje part. Detta inkluderar inte betrodda tredje parter som hjälper oss att driva vår webbplats eller vårt företag, med kravet att dessa parter samtycker till att hålla informationen konfidentiell.
            <br/><br/>

          
            Informationsskydd
            <br/><br/>
            Vi vidtar en mängd olika säkerhetsåtgärder för att skydda din personliga information. Endast anställda som kommer att utföra ett specifikt jobb (till exempel fakturering eller kundtjänst) kommer att ha tillgång till personligt identifierbar information. Datorerna/servrarna som används för att lagra personlig identifierbar information lagras i en säker miljö.
            <br/><br/>

            Cookies
            <br/><br/>
            Vi använder cookies för att förbättra åtkomsten till vår webbplats och identifiera återkommande besökare. Dessutom förbättrar våra cookies användarupplevelsen genom att spåra och rikta in sig på användarens intressen. Vår användning av cookies är inte alls kopplad till personlig identifierbar information på vår webbplats.
            <br/><br/>
            Radera personlig information
            <br/><br/>
            Du kan när som helst kontakta oss på volvofakeshop@gmail.com för information om vilka personuppgifter vi har sparat om dig eller om du vill radera dina personuppgifter.
            <br/><br/>

           
            Samtycke
            <br/><br/>
            Genom att använda vår webbplats och vårt kontaktformulär godkänner du vår integritetspolicy.
          </Text>
     
       </SimpleGrid>

          <Group position="center">
          <Link to ="/">
          <Button type="submit" size="md">Take me back to homepage</Button>
          </Link>
          </Group>

      </>
  
  );
}

export default IntegritetPolicy