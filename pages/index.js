import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import {getSortedPostsData} from '../lib/posts';

export default function Home({allPostsData}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hi</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1Px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({id, date, title}) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br/>
              {id}
              <br/>
              {date}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

// Fetch data before component is generated.
// Is only run on server, won't be included in JS bundle for browser.
export async function getStaticProps() {
  const allPostsData = getSortedPostsData();

  // Need to return it inside "props" object
  return {
    props: {
      allPostsData
    }
  }
}

// For server side rendering:
// export async function getServerSideProps(context) {
//   return {
//     props: {
//       // props for your component...
//     }
//   };
// }

// Fetch data client side after partial page rendering: (React hook)
// SWR first returns the data from cache (stale),
// then sends the fetch request (revalidate),
// and finally comes with the up-to-date data again:
// function Profile() {
//   const { data, error } = useSWR('/api/user', fetch)

//   if (error) return <div>failed to load</div>
//   if (!data) return <div>loading...</div>
//   return <div>hello {data.name}!</div>
// }