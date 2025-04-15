module.exports = {
    default: {
      require: [
        "./tests/steps/**/*.ts",
        "./tests/supports/world.ts", // Corrected path
        "./tests/supports/hooks.ts",
      ],
      requireModule: ["ts-node/register"], // Enable TypeScript support
      format: ["progress-bar"],
      paths: ["./tests/features/**/*.feature"], // Feature file locatio
    },
    publishQuiet: true,
  };