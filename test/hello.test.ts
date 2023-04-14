import { hello } from "../src/index";

describe("hello", () => {
    it("hello world ", () => {
        expect(hello("World")).toBe("Hello World, excitement awaits~");
    });

    it("hello terry", () => {
        expect(hello("terry")).toBe("Hello terry, excitement awaits~");
    });
});
