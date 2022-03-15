import { MacaulayNotation, MacaulayResult } from "./interfaces"

export * from "./interfaces"

/**
 * Macaulay is a const function that takes some MacaulayNotation format.
 *
 * @param notation is an array of INotation
 * @param xmin is the starting distance
 * @param xmax is the max distance to reach to
 * @param datapoints is the number of datapoints to capture
 *
 * @returns an MacaulayReturn object featuring the x points, shear and bending moments as well as err that could contain an error if there was an issue calculating the equation.
 */
export const macaulay = async (
	notation: MacaulayNotation[],
	xmin: number,
	xmax: number,
	nPoints: number
): Promise<MacaulayResult> => {
	// Create the linear x space
	const linspace = []
	const step = (xmax - xmin) / nPoints
	for (let i = 0; i <= nPoints; i++) {
		linspace.push(xmin + step * i)
	}

	// calculate the shear force
	const shear = []
	const bending = []
	for (let x of linspace) {
		let s = 0
		let b = 0
		for (let n of notation) {
			if (x > n.x) {
				s += n.force(x) * (x - n.x) ** n.power
				b += n.force(x) * ((x - n.x) ** (n.power + 1) / (n.power + 1))
			}
		}
		shear.push(s)
		bending.push(b)
	}

	const out: MacaulayResult = {
		x: linspace,
		shear: shear,
		bending: bending,
		err: null,
	}

	return out
}
