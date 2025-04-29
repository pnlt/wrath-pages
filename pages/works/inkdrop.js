import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  AspectRatio
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Urban Farming">
    <Container>
      <Title>
        Urban Farming <Badge>2025-</Badge>
      </Title>
      <P>
        A farming game where players can experience the life of a farmer. In the game, you become a farmer, transforming small, cramped plots and abandoned lots into lush, green fields.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Github</Meta>
          <Link href="https://github.com/pnlt">
            https://github.com/pnlt <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/WebGL/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Unity, Blender, C#</span>
        </ListItem>
        {/* <ListItem> */}
        {/*   <Meta>Blogpost</Meta> */}
        {/*   <Link href="https://blog.inkdrop.app/how-ive-attracted-the-first-500-paid-users-for-my-saas-that-costs-5-mo-7a5b94b8e820"> */}
        {/*     How I’ve Attracted The First 500 Paid Users For My SaaS That Costs */}
        {/*     $5/mo <ExternalLinkIcon mx="2px" /> */}
        {/*   </Link> */}
        {/* </ListItem> */}
      </List>

      <WorkImage src="/images/works/work02.png" alt="Inkdrop" />
      <WorkImage src="/images/works/work01.png" alt="Inkdrop" />
      <AspectRatio maxW="640px" ratio={1.7} my={4}>
        <iframe
          src="/video/UrbanFarmingTrailer.mp4"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </AspectRatio>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
