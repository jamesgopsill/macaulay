import { macaulay } from "../src/index"
import { MacaulayNotation } from "../src/interfaces"

test("Await Test", async () => {
	const n: MacaulayNotation[] = [
		{
			x: 0.5,
			power: 1,
			force: () => 10,
		},
	]

	const res = await macaulay(n, 0, 1, 100)
	expect(res.err).toBe(null)
})

test("Async Test", async () => {
	const n: MacaulayNotation[] = [
		{
			x: 0.5,
			power: 1,
			force: () => 10,
		},
	]

	macaulay(n, 0, 1, 100).then((res) => expect(res.err).toBe(null))
})

test("Test linear force", async () => {
	const n: MacaulayNotation[] = [
		{
			x: 0.5,
			power: 1,
			force: (x) => 10 * x,
		},
	]

	const res = await macaulay(n, 0, 1, 100)
	expect(res.err).toBe(null)
})

test("Step up step down", async () => {
	const n: MacaulayNotation[] = [
		{
			x: 0.3,
			power: 0,
			force: () => 10,
		},
		{
			x: 0.6,
			power: 0,
			force: () => -10 ,
		},
	]

	const res = await macaulay(n, 0, 1, 100)
	expect(res.err).toBe(null)
})
