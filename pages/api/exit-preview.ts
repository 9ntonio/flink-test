import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Clear the preview data cookies
  res.clearPreviewData();

  // Redirect the user back to the page they came from or to the homepage
  const redirectUrl = req.query.redirectTo || '/';
  res.redirect(redirectUrl as string);
  res.end();
}
