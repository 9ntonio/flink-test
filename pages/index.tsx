import Head from 'next/head';
import Button from '@/components/Button';
import Card from '@/components/Card';

export default function Home() {
  return (
    <>
      <Head>
        <title>Flink Test</title>
        <meta name="description" content="Next.js with Contentful CMS" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center p-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="mb-8 text-center text-4xl font-bold tracking-tight text-primary">
            Welcome to Flink Test
          </h1>
          <p className="mb-8 text-center text-lg">
            A Next.js project with Contentful CMS integration
          </p>
          
          <div className="mb-8 flex justify-center gap-4">
            <Button variant="primary" onClick={() => alert('Primary button clicked!')}>Primary Button</Button>
            <Button variant="secondary" onClick={() => alert('Secondary button clicked!')}>Secondary Button</Button>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <Card>
              <div className="p-6">
                <h2 className="mb-2 text-xl font-bold">Card Component</h2>
                <p className="mb-4 text-gray-700 dark:text-gray-300">
                  This is an example of the Card component with various content.
                </p>
                <Button>Learn More</Button>
              </div>
            </Card>
            
            <Card onClick={() => alert('Clickable card was clicked!')}>
              <div className="p-6">
                <h2 className="mb-2 text-xl font-bold">Clickable Card</h2>
                <p className="mb-4 text-gray-700 dark:text-gray-300">
                  This card is clickable and has an onClick handler.
                </p>
                <div className="text-sm font-medium text-primary">Click anywhere on this card!</div>
              </div>
            </Card>
          </div>
        </div>
      </main>
    </>
  );
}
