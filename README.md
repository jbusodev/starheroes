# React + TypeScript + Vite

## Install dependencies

### Requirements

- NodeJS 18.19.1
- Node Package Manager (npm) 10.2.4

to install dependencies, run the following command:

`npm install`

once dependencies are installed, you can run the following command to run the app:

`npm run dev`

## React App fetching and consuming Star Wars data from SWAPI.dev API

As required for the task, the following features were implemented:

- [x] React App fetching Star Wars people data from SWAPI.dev API.
- [x] Accessing characters via `/people` endpoint. Root `/` redirects to `/people` by default.
- [x] Displaying characters in Cards with random images from [picsum.photos](https://picsum.photos)
- [x] Navigating through characters list with Pagination.
- [x] Hovering Cards triggers an animation (image opacity & Card scale).
- [x] Clicking a character's card image displays a modal with character's name, height(in meters), mass(in kg), date added(in dd-MM-yyyy), film appeareances(in N°) and birth year in Card.
- [x] Responsive layout for most smartphones and PC screens. Tablets layout may be improved.

## Known Issues

- Random Images are generated with a random number and may sometimes not correspond to a existing image in picsum photos.
- Modal cannot be closed by clicking on the background as it is normally expected.

## Bonus features

- [x] Dark/Light mode toggle.

## Improvements

- [ ] Improve Tablet Layout.
- [ ] Test and improve accessibility.
- [ ] Navigate to a specific characters' page via URL.
- [ ] Implement sorting and filtering.

## React ESlint Configuration notes

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json', './tsconfig.app.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
