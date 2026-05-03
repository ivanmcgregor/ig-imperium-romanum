# Website der IG Imperium Romanum

## Setup

This site is using [Next.js](https://nextjs.org/) to generate static assets during the build and 

### Getting Started

install dependencies:
```bash
npm install
```

run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Data maintenance

This website is set up to be easily extendable without too much technical knowledge. The areas that change most often are optimized the most.

### Calendar

The calendar on the home page and on the detail page is automatically generated based on the events located in `./src/data/calendar.ts`. The data is typed, so if you make mistakes, typescript will let you know (if you use an editor that supports typing like VS Code).

### Galleries

The fotos of Galleries need to be added to `./public/Galerien`. For them to be used, they must be added to `./src/data/galerien.ts`

While maintaining some galleries I had an issue that the webp could not be edited anymore. Hence I recommend to work with jpeg and only convert when the images need no editing anymore. The script will also resize the images to a maximum height and width.

To convert `.jpg`/`.jpeg` files to `.webp` manually, you can run

```bash
node scripts/optimize-images.js
```

On committing, the precommit hook will try to convert any missed new images to webp.

See more detailed steps to maintain galleries in `./src/data/galerien.ts`.


## Next

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
