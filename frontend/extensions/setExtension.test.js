import './setPrototypeExtending'

test("Set equalities", () => {
    expect.assertions(2)
    let a = new Set([2, 1, 3])
    let b = new Set([1, 3, 2])
    let c = new Set([2, 1])

    expect(a.equals(b)).toBeTruthy()
    expect(a.equals(c)).toBeFalsy()
})
