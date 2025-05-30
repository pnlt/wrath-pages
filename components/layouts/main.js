import Head from 'next/head'
import dynamic from 'next/dynamic'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'
import VoxelDogLoader from '../voxel-dog-loader'

const LazyVoxelDog = dynamic(() => import('../voxel-dog'), {
  ssr: false,
  loading: () => <VoxelDogLoader />
})

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Wrath's homepage" />
        <meta name="author" content="Wrath Team" />
        <meta name="author" content="Wrath" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon3.ico" type="image/x-icon" />
        <meta name="twitter:title" content="Wrath Team" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@wrath" />
        <meta name="twitter:creator" content="@wrath" />
        <meta name="twitter:image" content="/card.png" />
        <meta property="og:site_name" content="Wrath's homepage" />
        <meta name="og:title" content="Wrath Team" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/card.png" />
        <title>Wrath - Homepage</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        <LazyVoxelDog />

        {children}

        <Footer />
      </Container>
    </Box>
  )
}

export default Main
