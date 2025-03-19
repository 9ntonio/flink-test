import { GetStaticProps, GetStaticPaths } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { fetchEntries, fetchEntry } from '@/lib/contentful';

interface ContentPageProps {
  page: any; // Replace with generated Contentful type when available
  preview: boolean;
}

export default function ContentPage({ page, preview }: ContentPageProps) {
  const router = useRouter();

  // If the page is not yet generated, this will be displayed
  // initially until getStaticProps() finishes running
  if (router.isFallback) {
    return <div className="container mx-auto p-4">Loading...</div>;
  }

  return (
    <>
      <Head>
        <title>{page?.fields?.title || 'Content Page'}</title>
        <meta 
          name="description" 
          content={page?.fields?.description || 'Contentful content page'} 
        />
      </Head>

      <main className="container mx-auto p-4">
        {preview && (
          <div className="mb-4 rounded-md bg-blue-50 p-2 text-sm text-blue-800">
            This is a preview.{' '}
            <a
              className="underline"
              href={`/api/exit-preview?redirectTo=${router.asPath}`}
            >
              Exit preview mode
            </a>
          </div>
        )}

        <h1 className="mb-6 text-3xl font-bold">{page?.fields?.title}</h1>
        
        {/* Display content from Contentful - this is a placeholder */}
        <div className="prose max-w-none dark:prose-invert">
          {page?.fields?.content ? (
            <div>{page.fields.content}</div>
          ) : (
            <p>No content available for this page.</p>
          )}
        </div>
      </main>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  // Fetch all entries with content_type 'page'
  const entries = await fetchEntries('page');
  
  // Get the paths we want to pre-render based on entries
  const paths = entries.map((entry: any) => ({
    params: { slug: entry.fields.slug },
  }));
  
  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params, preview = false }) => {
  try {
    // Fetch entries where the slug field matches the provided slug
    const entries = await fetchEntries(
      'page',
      preview
    );
    
    // Find the entry with the matching slug
    const page = entries.find((entry: any) => 
      entry.fields.slug === params?.slug
    );
    
    // If no page was found, return 404
    if (!page) {
      return {
        notFound: true,
      };
    }
    
    // Return the page data
    return {
      props: {
        page,
        preview,
      },
      // Re-generate the page at most once per 60 seconds
      revalidate: 60,
    };
  } catch (error) {
    console.error('Error fetching content from Contentful:', error);
    return {
      notFound: true,
    };
  }
};
