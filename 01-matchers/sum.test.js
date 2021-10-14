import sum from "./sum.js";


describe("Example tests",  () => {

    it("should add 1 + 2 to equal 3", () => {
        const result = sum(1,2);
        expect(result).toBe(3);
    })

    it("object assignment", () => {
        const obj = {};
        expect(obj).toEqual({});
    })
})

describe("truthy or falsy",  () => {

    it("null", () => {
        const n = null;
        // expect(n).toBeTruthy();
        expect(n).toBeFalsy(); // 0, "", null, undefined are -> Falsy
        expect(n).not.toBeTruthy(); // It's the same as the previous line because it's a Truthy negated by .not
        expect(n).toBeNull();
        expect(n).not.toBeUndefined();
        // Is not recommended have two or more expect in one "it"
    })
});

describe("numbers", () => {
    
    it("two plus two", () => {
        const value = 2 + 2;
        expect(value).toBe(4);
        expect(value).toBeGreaterThan(3);
        expect(value).toBeGreaterThanOrEqual(4);
        expect(value).toBeLessThan(7);
        expect(value).toBeLessThanOrEqual(4);
    })

    it("adding floats", () => {
        const value = 0.1 + 0.2;
        // expect(value).toBeCloseTo(0.29) // this fail
        expect(value).toBeCloseTo(0.299) // this pass
    })
})

describe("strings", () => {

    it("there is no I in team", () => {
        expect("team").not.toMatch(/I/);
    })
})

describe("arrays", () => {

    const shoppingLists = [
        "diapers", "kleenex", "trash bags", "paper towels", "milk"
    ]

    expect(shoppingLists).toContain("milk");
})

function compileAndroidCode() {
    throw new Error("your are using the wrong JDK");
}

describe("exceptions", () => {

    it("compiling android goes as expected", () => {
        // expect(() => compileAndroidCode()).toThrow(Error);
        expect(() => compileAndroidCode()).toThrow("your are using the wrong JDK");
    })
})