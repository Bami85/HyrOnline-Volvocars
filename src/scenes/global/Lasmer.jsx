import React from 'react';
import { Helmet } from 'react-helmet';

import { createStyles, SimpleGrid, Card, Image, Text, Container, AspectRatio } from '@mantine/core';

const mockdata = [
  {
    title: 'Serviceavtal. Med ett serviceavtal betalar du en fast månadskostnad för service. Det ger dig en bil som alltid servas i tid och som förhoppningsvis är mer eftertraktad den dagen du bestämmer dig för att sälja. Välj mellan 12, 24 och 36 månaders bindningstid',
    image:
      'https://www.volvocars.com/images/v/-/media/market-assets/sweden/applications/local-pages/aga/livet-med-volvo/originalservice/customer_service_process_640x480.jpg?iar=0&w=1080',
    date: 'Januari 18, 2023',
  },
  {
    title: 'Säkerhet och innovation. Din säkerhet är viktig för oss. Just därför utvecklar vi ständigt våra produkter och tjänster för att du ska ha tillgång till den senaste säkerhetstekniken.',
    image:
      'https://static.fbinhouse.se/800x/2021-9/vinterdack-02.jpeg',
    date: 'Januari 27, 2023',
  },
  {
    title: 'Har du frågor om tjänstebilar? Besök din Volvohandlare eller kontakta vår företagsavdelning för att få svar på dina frågor om tjänstebilar och företagslösningar. Vi finns tillgängliga via telefon, chatt och e-post.',
    image:
      'https://www.volvocars.com/images/v/-/media/applications/cbvglobalselect/business_b2b/shared/b2b_retailer.jpg?iar=0&w=1440',
    date: 'Februari 2, 2023',
  },
  {
    title: 'Volvo Original bilvård. Genom att lämna din bil till våra bilvårdsspecialister ökar du inte bara chansen till ett problemfritt bilägande. Du får också bilen att kännas som ny igen. Välkommen att boka tid för bilvård hos någon av våra auktoriserade Volvohandlare.',
    image:
      'https://assets.volvocars.com/se/~/media/sweden/pages/aga/dack/dack-2019/exf2_washing_tire_1140x641.jpg?w=800',
    date: 'Januari 12, 2023',
  },
];

const useStyles = createStyles((theme) => ({
  card: {
    transition: 'transform 150ms ease, box-shadow 150ms ease',

    '&:hover': {
      transform: 'scale(1.01)',
      boxShadow: theme.shadows.md,
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 600,
  },
}));

export default function ArticlesCardsGrid() {
  const { classes } = useStyles();

  const cards = mockdata.map((article) => (
    <>
    <Helmet>
    <title> Lasmer</title>
    </Helmet>
    <Card key={article.title} p="md" radius="md"    mt={80} component="a" href="#" className={classes.card}>
      <AspectRatio ratio={1920 / 1080}>
        <Image src={article.image} />
      </AspectRatio>
      <Text color="dimmed" size="xs" transform="uppercase" weight={700} mt="md">
        {article.date}
      </Text>
      <Text className={classes.title} mt={5}>
        {article.title}
      </Text>
    </Card>
    </>
  ));

  return (
    <>
   
    <Container py="xl">
      <SimpleGrid cols={2} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
        {cards}
      </SimpleGrid>
    </Container>
    </>
  );
}