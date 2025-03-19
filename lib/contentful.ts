import { createClient } from 'contentful';

// Create regular client for delivery API
export const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID || '',
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || '',
  environment: process.env.CONTENTFUL_ENVIRONMENT || 'master',
});

// Create preview client for preview API
export const previewClient = createClient({
  space: process.env.CONTENTFUL_SPACE_ID || '',
  accessToken: process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN || '',
  host: 'preview.contentful.com',
  environment: process.env.CONTENTFUL_ENVIRONMENT || 'master',
});

// Get the appropriate client based on preview mode
export const getClient = (preview: boolean) => (preview ? previewClient : client);

// Helper function to fetch entries
export async function fetchEntries(contentType: string, preview = false) {
  const client = getClient(preview);
  const entries = await client.getEntries({
    content_type: contentType,
  });
  return entries.items;
}

// Helper function to fetch a single entry
export async function fetchEntry(id: string, preview = false) {
  const client = getClient(preview);
  const entry = await client.getEntry(id);
  return entry;
}
