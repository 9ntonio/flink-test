require('dotenv').config({ path: '.env.local' });

module.exports = {
  spaceId: process.env.CONTENTFUL_SPACE_ID,
  managementToken: process.env.CONTENTFUL_MANAGEMENT_TOKEN, // Content management token
  environment: process.env.CONTENTFUL_ENVIRONMENT || 'master',
  outputPath: './@types/generated/contentful.d.ts',
};
