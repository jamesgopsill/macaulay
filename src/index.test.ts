import { macaulay } from "./index"
import { MacaulayNotation } from "./interfaces"

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
