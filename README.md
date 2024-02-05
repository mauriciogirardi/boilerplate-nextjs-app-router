## Boilerplate Next.js App with Router

This project is a versatile and feature-rich boilerplate for building modern web applications using Next.js. It comes pre-configured with various tools and technologies to streamline your development process. Whether you're starting a new project or looking to enhance an existing one, this boilerplate provides a solid foundation for Next.js applications with a focus on maintainability, scalability, and best practices.

### Features

- **Next.js 14.0.4:** Leverage the latest features and improvements in the Next.js framework.
- **React 18:** Harness the power of the latest React version for building dynamic user interfaces.
- **Zod 3.22.4:** Enjoy efficient and type-safe runtime validation for your application's data.
- **@t3-oss/env-nextjs 0.7.1:** Simplify environment variable management in your Next.js projects.
- **Storybook 7.6.7:** Develop and showcase your UI components in isolation with Storybook.
- **Vitest 1.1.3:** Enhance your testing workflow with a fast, lightweight test runner for JavaScript and TypeScript.
- **Husky 8.0.0 and lint-staged 15.2.0:** Enforce code quality through pre-commit hooks and staged file linting.
- **Tailwind CSS 3.3.0:** Craft beautiful and responsive UIs effortlessly with the utility-first CSS framework.
- **Prettier 3.1.1:** Maintain a consistent and clean codebase with Prettier's opinionated code formatting.
- **ESLint 8.0.0:** Ensure code consistency and catch common errors with the ESLint linter.
- **Cypress 13.6.2:** Facilitate end-to-end testing with the fast, easy, and reliable testing framework.

### Scripts

```bash
  # Run the development server.
  pnpm dev

  # Build the Next.js application for production.
  pnpm run build

  # Start the production server.
  pnpm start

  # Lint the project using Next.js and ESLint configurations.
  pnpm lint

  # Run tests using the Vitest test runner.
  pnpm test
  pnpm test:watch
  pnpm test:watch:ui
  pnpm test:coverage

  # Open coverage on the browser
  pnpm coverage

  # Launch the Storybook development environment.
  pnpm run storybook

  # Build the Storybook project for deployment.
  pnpm run build-storybook

  # Use Plop to generate boilerplate code and files.
  pnpm generate
```

### Getting Started

```bash
# Clone this repository.
git clone https://github.com/mauriciogirardi/boilerplate-nextjs-app-router.git

# Install dependencies with pnpm install.
pnpm install

# Run
pnpm dev

```

### Start new project using this boilerplate

```bash
 # pnpm
 pnpm dlx create-next-app --example https://github.com/mauriciogirardi/boilerplate-nextjs-app-router

# npm
npx create-next-app --example https://github.com/mauriciogirardi/boilerplate-nextjs-app-router
```

### Environment

```bash
# In the file . gitignore uncomment this line so your env does not go to the repository.

# .env*.local

NEXT_PUBLIC_BASE_URL="http://localhost:3000"
APP_URL="http://localhost:3000/api"
NODE_ENV="developemnt"
SITE_NAME="Boilerplate"
```

Customize and extend the boilerplate to suit your specific project requirements.

Feel free to explore the rich ecosystem of technologies included in this boilerplate and leverage them to create exceptional web applications. Happy coding! 🚀
