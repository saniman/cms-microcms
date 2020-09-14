import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Container from '@/components/container'
import PostBody from '@/components/post-body'
import MoreStories from '@/components/more-stories'
import Header from '@/components/header'
import PostHeader from '@/components/post-header'
import SectionSeparator from '@/components/section-separator'
import Layout from '@/components/layout'
import { getPostByID, getMorePosts, getAllPostsWithID } from '@/lib/api'
import PostTitle from '@/components/post-title'
import Head from 'next/head'
import { CMS_NAME } from '@/lib/constants'
import markdownToHtml from '@/lib/markdownToHtml'

export default function Post({ post, morePosts, preview }) {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <Layout preview={preview}>
      <Container>
        <Header />
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article>
              <Head>
                <title>
                  {post.title} | Next.js Blog Example with {CMS_NAME}
                </title>
                <meta property="og:image" content={post.coverImage.url} />
              </Head>
              <PostHeader
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
                author={post.author}
              />
              <PostBody content={post.content} />
            </article>
            <SectionSeparator />
            {morePosts.length > 0 && <MoreStories posts={morePosts} />}
          </>
        )}
      </Container>
    </Layout>
  )
}

export async function getStaticProps({ params, previewData, preview = false }) {
  const data = await getPostByID(params?.id, previewData?.draftKey)
  const morePosts = await getMorePosts(params?.id)
  //日付データで降順に並べ替え
  morePosts.sort(function(a,b){
    if(a.date>b.date) return -1;
    if(a.date < b.date) return 1;
    return 0;
  });
  const content = await markdownToHtml(data?.content || '')
  return {
    props: {
      preview,
      post: {
        ...data,
        content,
      },
      morePosts: morePosts,
    },
  }
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithID()
  return {
    paths: allPosts?.map((post) => `/posts/${post.id}`) || [],
    fallback: true,
  }
}
