import idZero from './src/id.js'

const assert = (condition) => {
	if (!condition) throw new Error('Assertion failed')
}

// Test that the IDs actually are psuedorandom to some basic extent.
// Returns the number of IDs generated to cause the first collision.
// Returns +Infinity if no collision occurred within 1e6 generations.
const testCollision = (length) => {
	const GENERATION_LIMIT = 1e6
	const previousGenerations = new Set()

	for (let i = 0; i < GENERATION_LIMIT; i += 1) {
		const id = idZero(length)

		if (previousGenerations.has(id)) {
			return previousGenerations.size + 1
		} else {
			previousGenerations.add(id)
		}
	}

	return Number.POSITIVE_INFINITY
}

const PATTERN = /^[a-z0-9]+$/
let generated

// Test length 10
generated = idZero(10)
assert(generated.length === 10)
assert(PATTERN.test(generated))

assert(testCollision(10) > 1e5)

// Test length 1
generated = idZero(1)
assert(generated.length === 1)
assert(PATTERN.test(generated))

assert(testCollision(1) > 5)

// Test length 100
generated = idZero(100)
assert(generated.length === 100)
assert(PATTERN.test(generated))
// Primitive assertion that the string is genuinely alphabetic, not just hexadecimal
// (i.e. it contains alphabetic characters other than a–e).
assert(/[g-z]/.test(generated))

assert(testCollision(100) > 1e6)
