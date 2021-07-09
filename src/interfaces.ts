/**
 * INotation is the format expected for each element of a macaulay equation.
 */
export interface MacaulayNotation {
	/** Force being applied. Can be a function of x.*/
	force: (x: number) => number
	/** Distance at which the force acts */
	x: number
	/** Power indicates whether it is a point load or UDL */
	power: number
}

/**
 * IReturn is the format for the return object from our Macaulay function.
 */
export interface MacaulayReturn {
	/** Position along the axis */
	x: number[]
	/** Shear force */
	shear: number[]
	/** Bending moment */
	bending: number[]
	/** Whether an error occurred suring the computation. */
	err: Error | null
}
