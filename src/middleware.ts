import { NextRequest } from 'next/server';

import { db } from './db';

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api)(.*)'],
};

export default async function middleware(req: NextRequest) {
  const posts = await db.post.findMany();

  return new Response(JSON.stringify(posts), {
    headers: { 'content-type': 'application/json' },
  });
}
