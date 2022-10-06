# Zod Tutorial

<a href="https://totaltypescript.com/tutorials/zod"><img src="https://res.cloudinary.com/total-typescript/image/upload/v1662635438/zod-tutorial/card_2x_ywsvl1.png" alt="zod tutorial" /></a>

This Zod tutorial will give you everything you ever needed to know about [Zod](https://github.com/colinhacks/zod) - an amazing library for building type-safe AND runtime-safe applications.

## Quickstart

```sh
# Installs all dependencies
yarn install

# Starts the first exercise
yarn exercise 01

# Runs linting and tests on the solution
yarn solution 01
```

## How to take the tutorial

You'll notice that the tutorial is split into exercises. Each exercise is split into a `*.problem.ts` and a `*.solution.ts`.

To take an exercise:

1. Go into `*.problem.ts`
2. Run `yarn exercise 01`, where `01` is the number of the exercise you're on.

The `exercise` script will run TypeScript typechecks and a test suite on the exercise.

This tutorial encourages **active, exploratory learning**. In the video, I'll explain a problem, and **you'll be asked to try to find a solution**. To attempt a solution, you'll need to:

1. Look for any 🕵️‍♂️ emojis to give you a hint on what to change
1. Check out [Zod's docs](https://zod.dev)
1. Try to find something that looks relevant.
1. Give it a go to see if it solves the problem.

You'll know if you've succeeded because the tests will pass.

**If you succeed**, or **if you get stuck**, check out the `*.solution.ts`. You can see if your solution is better or worse than mine!

You can run `yarn solution 01` to run the tests and typechecking on the solution.

## Acknowledgements

Say thanks to Matt on [Twitter](https://twitter.com/mattpocockuk) or by joining his [Discord](https://discord.gg/8S5ujhfTB3). Consider signing up to his [Total TypeScript course](https://totaltypescript.com).

## Reference

### `yarn exercise 01`

Alias: `yarn e 01`

Run the corresponding `*.problem.ts` file.

### `yarn solution 01`

Alias: `yarn s 01`

Run the corresponding `*.solution.ts` file. If there are multiple, it runs only the first one.
