# Reproduction of `ws does not work in the browser`

## Steps

- Create a `.env` and set `DATABASE_URL` to a pooled neon connection string
- `npx prisma generate` or `npx prisma migrate` I believe..
- `npm run dev`
- Check the terminal for the error
