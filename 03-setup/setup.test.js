let animals = [];

// beforeAll(() => {
//     // This runs before all tests
//     console.log("BEFORE All");
//     animals = ["elephant", "zebra", "bear", "tiger"];
// })

beforeEach(() => {
    // This runs before each test
    console.log("BEFORE EACH");
    animals = ["elephant", "zebra", "bear", "tiger"];
})

afterEach(() => {
    // This runs after each test
    console.log("AFTER EACH");
})

afterAll(() => {
    // This runs after all tests
    console.log("AFTER All");
    animals = ["elephant", "zebra", "bear", "tiger"];
})


describe("animals array", () => {

    // When we put beforeAll inside the describe he just work for the tests inside the describe he is put in
    beforeAll(() => {
        // This runs before all tests
        console.log("BEFORE All");
        animals = ["elephant", "zebra", "bear", "tiger"];
    })

    it("should add animal to end of array", () => {
        animals.push("aligator");
        expect(animals[animals.length - 1]);
    })

    it("should add animal to beginning o array", () => {
        animals.unshift("monkey");
        expect(animals[0]).toBe("monkey");
    })

    it("should have initial lenght of 4", () => {
        expect(animals.length).toBe(4);
    })
})

describe("testing something else", () => {

    // Separated test because the .only
    // it.only("true should be truthy", () => {
    //     expect(true).toBeTruthy()
    // })

    it("true should be truthy", () => {
        expect(true).toBeTruthy()
    })
})