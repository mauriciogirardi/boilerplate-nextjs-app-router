module.exports = {
  '*.{js,jsx,ts,tsx}': (filenames) => [
    `prettier --write ${filenames.join(' ')}`,
    `pnpm lint -- --fix . ${filenames.join(' --file')}`
    // `npm run test ${filenames.join(' --file')}`,
  ]
}
