import Link from 'next/link';
import Layout from '../components/layout';
import { getSortedList } from '../lib/data';
import { getSortedThingList } from '../lib/data-things';
import { getSortedOtherList } from '../lib/data-others';

// define a getStaticProps() function - this name is defined by next.js
export async function getStaticProps() {
  const allData = await getSortedList();
  const allThingData = await getSortedThingList();
  const allOtherData = await getSortedOtherList();
  return {
    props: { allData, allThingData, allOtherData }
  };
}

// export our home page component Home
export default function Home( { allData, allThingData } ) {
  return (
    <Layout home>
      <h1>List of Names</h1>
      <div className="list-group">
        {allData.map(
            ({id, name}) => (
              <Link key={id} href={`/posts/${id}`} className="list-group-item list-group-item-action">
                {name}
              </Link>
            )
          )
        }
      </div>
      <h1>List of Things</h1>
      <div className="list-group">
        {allThingData.map(
            ({id, thing_description}) => (
              <Link key={id} href={`/things/${id}`} className="list-group-item list-group-item-action">
                {thing_description}
              </Link>
            )
          )
        }
      </div>
      <h1>List of Others</h1>
      <div className="list-group">
        {allOtherData.map(
            ({id, other_description}) => (
              <Link key={id} href={`/others/${id}`} className="list-group-item list-group-item-action">
                {other_description}
              </Link>
            )
          )
        }
      </div>
    </Layout>
  );
}