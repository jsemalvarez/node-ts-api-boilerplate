console.log('Hola Mundo :)');

const persona = {
  name: 'josema',
  saludo: (message: string) => {
    return message;
  },
  apodos: ['chino', 'josema', 'josema', 'josema', 'josema', 'josema', 'josema', 'josema', 'josema', 'josema'],
};

console.log(persona);

const prettierOptions = {
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  useTabs: false,
  printWidth: 80,
  arrowParens: 'always',
  bracketSpacing: true,
  bracketSameLine: false,
  trailingComma: 'all',
};

console.log(prettierOptions);

const num1: number = 1;
const num2: number = 2;
if (num1 === num2) {
  console.log('son iguales');
}
