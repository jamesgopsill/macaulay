# Macaulay Notation

This package converts macaulay notation into shear force and bending moment plot data for subsequent plotting and analysis.

# Getting Started

To install the package, you will need node installed. You can then use either `npm` or `yarn` to install the package.

`npm install macaulay` or `yarn add macaulay`

You can then use it in your app like so.

Let's say you have the following notation.


```typescript
import { macaulay, MacaulayNotation } from "macaulay"

const MacaulayNotation = [
	{
		force: () => 1, // provide a force as a function of x
		x: 0.5, // When along the x-axis the element turns on
		power: 1. // The power to multiply it with
	},
	// Keep adding your notation to the array until you have a completed your equation.
]

// Give the package your notation, min and max x domain you want to calculate across and the number of datapoints.
const res = await macaulay(notation, 0., 1. 100)

console.log(res.x, res.shear, res.bending, res.err)
```


The result will be in the form of:

```typescript

interface MacaulayResult {
	x: number[]
	shear: number[]
	bending: number[]
	err: Error | null
}

```

If the `err` is `null` then the computation was successful. Otherwise it will contain an error object that you can interrogate further to determine what the issue was.

# Applications

This package is being used in the Macaulay Plotter static website making it easy for people to plot their shear force and bending moment diagrams.
