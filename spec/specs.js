describe("factorial", function() {
    it("returns a number", function() {
        expect(factorial(2)).to.be.a("number");
    });

    it("returns a number greater than the input", function() {
        expect(factorial(5)).to.be.above(5);
    });

    it("returns the factorial of 0 is 1", function() {
        expect(factorial(0)).to.equal(1);
    });

    it("returns null when users enters a negative number", function() {
        expect(factorial(-3)).to.equal(null);
    });

    it("returns the factorial of 5 is 120", function() {
        expect(factorial(5)).to.equal(120);
    });
});
