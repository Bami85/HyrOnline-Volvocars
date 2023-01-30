
import { TextInput, Textarea, SimpleGrid, Group, Title, Button } from '@mantine/core';
import { useForm } from '@mantine/form';
import { Helmet, HelmetProvider } from 'react-helmet-async';
// import {Helmet} from "react-helmet";


const GetInTouchSimple = () => {
const form = useForm({
            initialValues: {
              name: '',
              email: '',
              subject: '',
              message: '',
            },
            validate: {
              name: (value) => value.trim().length < 2,
              email: (value) => !/^\S+@\S+$/.test(value),
              subject: (value) => value.trim().length === 0,
            },
          });

          return (
            // <form onSubmit={form.onSubmit(() => {})}>
            <form
            onSubmit={event => {
              event.preventDefault();
              const { elements } = event.target;
              const name = elements[0].value;
              const email = elements[1].value;
            //   const subjectl = elements[2].value;
            //   const message = elements[3].value;
              alert(
                `
                  Hello ${name}!\r\n 
                  We will contact you at email ${email} as soon as possible. \r\n
                  Thanks!
                `
              );
            }}
          >
              <Title
                mt={80}
                order={2}
                size="h1"
                sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}` })}
                weight={900}
                align="center"
              >
                Kontakta oss
                <HelmetProvider>
                <Helmet>
                    <title> Kontakta oss</title>
                    <meta name="description" content="/ContactUs" />
                </Helmet>
                </HelmetProvider>
              </Title>

              <SimpleGrid  ml={140} mr={140} cols={2} mt="xl" breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
                <TextInput
                  label="Name"
                  placeholder="Your name"
                  name="name"
                  variant="filled"
                  {...form.getInputProps('name')}
                />
                <TextInput
                  label="Email"
                  placeholder="Your email"
                  name="email"
                  variant="filled"
                  {...form.getInputProps('email')}
                />
              </SimpleGrid>
              {/* <SimpleGrid  position="center"  cols={2} mt="sm" breakpoints={[{  maxWidth: 'sm', cols: 1 }]}> */}

              <Textarea
                ml={140}
                mr={140}
                position="center"
                mt="md"
                label="Message"
                placeholder="Your message"
                maxRows={10}
                minRows={5}
                autosize
                name="message"
                variant="filled"
                {...form.getInputProps('subject')}
              />


              <Group position="center" mt="xl" mb="200px">
                <Button type="submit" size="md">
                  Send message
                </Button>
              </Group>
            </form>
          );
      }

export default GetInTouchSimple