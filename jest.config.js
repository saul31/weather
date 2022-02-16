module.exports = {
  preset: 'jest-preset-angular',

  globals: {
    'ts-jest': {
      tsConfig: '<rootDir>/src/tsconfig.spec.json',
      stringifyContentPathRegex: '\\.html$',
      astTransformers: [
        'jest-preset-angular/build/InlineFilesTransformer',
        'jest-preset-angular/build/StripStylesTransformer'
      ],
      isolatedModules: true // mandatory for a boost of perfomance
    }
  },
  setupFilesAfterEnv: ["./jest-setup.ts"],
  roots: [''],
}