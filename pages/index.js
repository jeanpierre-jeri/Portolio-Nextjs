import { About, Introduction, MyStack, MyWork } from '../components'
import { Layout } from '../components/layouts'

import { strapiApi } from './api'

export default function Home({ home, projects }) {
  return (
    <Layout seo={home.seo}>
      <Introduction title={home.title} subtitle={home.subtitle} image={home.photo} />
      <MyStack
        title={home.title_stack}
        btnTitle={home.title_my_work}
        stackImages={home.stack_images.data}
      />
      <About
        title={home.title_who_am_i}
        subtitle={home.subtitle_who_am_i}
        description={home.description_who_i_am}
        image={home.image_who_am_i.data.attributes}
      />
      <MyWork title={home.title_my_work} subtitle={home.subtitle_my_work} projects={projects} />
    </Layout>
  )
}

export async function getStaticProps() {
  const [{ data: home }, { data: projects }] = await Promise.all([
    strapiApi.get('/home?populate=*'),
    strapiApi.get('/projects?populate=*')
  ])

  return {
    props: {
      home: home.data.attributes,
      projects: projects.data
    }
  }
}
