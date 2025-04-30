import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon, EmailIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import { _IoLogoTwitter, _IoLogoInstagram, IoLogoGithub } from 'react-icons/io5'
import thumbYouTube from '../public/images/links/githubProfile.png'
import thumbInkdrop from '../public/images/works/logo_eyecatch.png'
import Image from 'next/image'

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello, We&apos;re a passionate 3-person game development team based in Vietnam!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Wrath Team
          </Heading>
          <p>Indie Game Makers (Game Designer / Dev / Artist)</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <Image
              src="/images/LogoWrath.jpg"
              alt="Profile image"
              width="100"
              height="100"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          Wrath Team is a small but dedicated indie game development group driven by creativity and love for making unique, meaningful, and fun gaming experiences.
          Based in Vietnam, we bring together three core disciplines — design, development, and art — to craft games from the ground up..
          From conceptualizing ideas and designing engaging gameplay, to coding mechanics and creating immersive visuals, we collaborate closely on every step. We love experimenting with mechanics, storytelling, and style to deliver something special with each project.
          Currently, we’re working on our next major indie title
          called{' '}
          <Link as={NextLink} href="/works/inkdrop" passHref scroll={false}>
            Urban Farming
          </Link>
          . We combining heart, humor, and challenge into a memorable experience.
          &quot;
          <Link
            as={NextLink}
            href="/works/inkdrop"
            passHref
            target="_blank"
          >
            Urban Farming
          </Link>
          &quot; is in the process of completion and improvement.
        </Paragraph>
        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="/works"
            scroll={false}
            rightIcon={<ChevronRightIcon />}
            colorScheme="teal"
          >
            Our portfolio
          </Button>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2021</BioYear>
          Wrath Team was founded in Vietnam, united by a shared passion for making games
        </BioSection>
        <BioSection>
          <BioYear>2022</BioYear>
          Focused on building a solid foundation: strengthening our skills in Unity, pixel art, level design, and team collaboration
        </BioSection>
        <BioSection>
          <BioYear>2023</BioYear>
          Won 3rd Prize at Korea Game Week, marking our first international recognition
        </BioSection>
        <BioSection>
          <BioYear>2024</BioYear>
          Participated in Global Game Jam, creating a complete mobile game in just 48 hours under the theme &quot;Make Me Laugh&quot;. The tight deadline pushed our creativity and teamwork to new heights
        </BioSection>
        <BioSection>
          <BioYear>2025</BioYear>
          Developing Urban Farming, a simulation mobile title, for the Voodoo x GamingAcademy competition — blending fun gameplay with environmental awareness
        </BioSection>
        <BioSection>
          <BioYear>now</BioYear>
          We’re continuing to prototype and polish original game ideas, aiming to bring unique and heartfelt indie games to players around the world
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          WE ♥
        </Heading>
        <Paragraph>
          Music, Art,{' '}
          <Link href="https://www.juegostudio.com/blog/mastering-game-storytelling-crafting-compelling-narratives" target="_blank">
            Storytelling
          </Link>
          , Playing Games,{' '}
          <Link href="https://getoutpass.com/blog/of-coffee-breaks-and-brainstorming-5-simple-ways-to-encourage-idea-exchange-at-work" target="_blank">
            Coffee-fueled brainstorming sessions
          </Link>
          , and building together as a team
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/pnlt" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @pnlt(Wrath&apos;s leader)
              </Button>
            </Link>
          </ListItem>
          {/* <ListItem> */}
          {/*   <Link href="https://twitter.com/inkdrop_app" target="_blank"> */}
          {/*     <Button */}
          {/*       variant="ghost" */}
          {/*       colorScheme="teal" */}
          {/*       leftIcon={<IoLogoTwitter />} */}
          {/*     > */}
          {/*       @inkdrop_app (English) */}
          {/*     </Button> */}
          {/*   </Link> */}
          {/* </ListItem> */}
          {/* <ListItem> */}
          {/*   <Link href="https://twitter.com/craftzdog" target="_blank"> */}
          {/*     <Button */}
          {/*       variant="ghost" */}
          {/*       colorScheme="teal" */}
          {/*       leftIcon={<IoLogoTwitter />} */}
          {/*     > */}
          {/*       @craftzdog (日本語) */}
          {/*     </Button> */}
          {/*   </Link> */}
          {/* </ListItem> */}
          {/* <ListItem> */}
          {/*   <Link href="https://instagram.com/craftzdog" target="_blank"> */}
          {/*     <Button */}
          {/*       variant="ghost" */}
          {/*       colorScheme="teal" */}
          {/*       leftIcon={<IoLogoInstagram />} */}
          {/*     > */}
          {/*       @craftzdog */}
          {/*     </Button> */}
          {/*   </Link> */}
          {/* </ListItem> */}
        </List>

        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            href="https://github.com/pnlt"
            title="Github profile"
            thumbnail={thumbYouTube}
          >
            Wrath&apos;s leader github pages (currently don&apos;t have wrath organization yet)
          </GridItem>
          <GridItem
            href="/works/inkdrop"
            title="Urban Farming"
            thumbnail={thumbInkdrop}
          >
            A Farming simulation game
          </GridItem>
        </SimpleGrid>

        <Heading as="h3" variant="section-title">
          Newsletter
        </Heading>
        <p>
          Join us on a behind-the-scenes coding journey. Weekly updates on
          projects, tutorials, and videos
        </p>

        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="https://github.com/pnlt"
            scroll={false}
            leftIcon={<EmailIcon />}
            colorScheme="teal"
          >
            Sign up our newsletter here
          </Button>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
