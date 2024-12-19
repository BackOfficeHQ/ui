# Back Office UI

Back Office UI is the user interface library for the back office system.

## Features

- **Customizable Components**: Easily adaptable components to suit your needs.
- **Responsive Design**: Optimized for all screen sizes.
- **Storybook Integration**: Preview and interact with components in isolation.
- **Modern Stack**: Built with React, TailwindCSS, and Storybook for seamless development.

## Installation

To install and use Back Office UI in your project, follow these steps:

1. **Install the package**:
    ```sh
    npm install @backoffice-hq/ui
    ```

2. **Import and use components**:
    ```jsx
    import { Button } from '@backofficehq/ui';

    const App = () => (
        <Button onClick={() => alert('Clicked!')}>Click Me</Button>
    );

    export default App;
    ```

## Documentation

For full documentation, including component usage and examples, visit the [Documentation Site](https://design.backoffice.co.th).

To run the documentation site locally:
```sh
pnpm docs:dev
```

## Contributing

We welcome contributions! Please read our [contributing guidelines](CONTRIBUTING.md) for detailed instructions on how to report issues, suggest features, or submit pull requests.


## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Thank you for using Back Office UI! If you have any questions or feedback, feel free to reach out through our [GitHub Issues](https://github.com/BackOfficeHQ/ui/issues). 💼
