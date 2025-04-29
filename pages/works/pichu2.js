import {
  Container,
  Badge,
  _Link,
  List,
  ListItem,
  _UnorderedList,
  _Heading,
  _Center
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { _ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Endless Friendship">
    <Container>
      <Title>
        Endless Friendship <Badge>2023</Badge>
      </Title>
      <P>
        Genre: Endless runner, set in Vietnam and Korea when the covid epidemic is raging and still ongoing. Players control the character to collect items and overcome obstacles and viruses.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Window, Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Unity, Blender, C#</span>
        </ListItem>
      </List>

      {/* <Heading as="h4" fontSize={16} my={6}> */}
      {/*   <Center>Media coverage</Center> */}
      {/* </Heading> */}

      {/* <UnorderedList my={4}> */}
      {/*   <ListItem> */}
      {/*     <Link href="http://www.donpy.net/standard-entry/app-reiview/4303.html"> */}
      {/*       <Badge mr={2}>覚醒する @CDiP</Badge> */}
      {/*       Webアプリ版twitterクライアントの「pichu*pichu」が凄い。{' '} */}
      {/*       <ExternalLinkIcon mx="2px" /> */}
      {/*     </Link> */}
      {/*   </ListItem> */}
      {/**/}
      {/*   <ListItem> */}
      {/*     <Link href="http://labs.laurahouse.net/articles/iphone/1115.html"> */}
      {/*       <Badge mr={2}>LauraHouse Labs</Badge> */}
      {/*       知っておきたいWebアプリ版Twitterクライアント活用法{' '} */}
      {/*       <ExternalLinkIcon mx="2px" /> */}
      {/*     </Link> */}
      {/*   </ListItem> */}
      {/* </UnorderedList> */}

      <WorkImage src="/images/works/endless4.png" alt="Pichu*Pichu" />
      <WorkImage src="/images/works/endless1.png" alt="Pichu*Pichu" />
      <WorkImage src="/images/works/endless2.png" alt="Pichu*Pichu" />
      <WorkImage src="/images/works/endless3.png" alt="Pichu*Pichu" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
