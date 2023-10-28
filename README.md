# Rick and Morty Table

Uses [Vite](https://vitejs.dev/) and [Vitest](https://vitest.dev/) to create a modern [React](https://react.dev/) app compatible with [Create React App](https://create-react-app.dev/)

- Styling done using [TainwindCSS](https://tailwindcss.com/)
- state-management using [Redux](https://redux.js.org/)
- Table management using [ReactTableV8](https://tanstack.com/table/v8/)
- Data-Fetching [Axios](https://axios-http.com/)
- Deployed to [Vercel](https://vercel.com/)

## Get Started

### Demo app at [Vercel](https://rick-morty-table.vercel.app/)

1. Clone Repository

```sh
git clone https://github.com/Namishk/rickMortyTable.git
```

2. Install Dependancy

```sh
Yarn install
```

OR

```sh
npm install
```

## Scripts

- `dev`/`start` - start dev server and open browser
- `build` - build for production
- `preview` - locally preview production build
- `test` - launch test runner

## Techenical Choices

- Tailwind is used because easier to manage as compaired to vanilla CSS along with optimisation of build bundle.

- React Table is lightweight and easier to manage to add features like sorting.

- Vercel free and simple deployment platform for deploying apps.

## Challanges Faced

- I had very little experience with Redux to getting hands on and getting used to it took a bit itme

## Known Bugs

- one Character can be added to favourites multiple times but on deletion it removes all the instances.
