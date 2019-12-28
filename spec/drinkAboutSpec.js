describe ("my whatCanIDrink function", function() {
    beforeEach(function () {
        drink = new whatCanIDrink();
    })
    
    describe("Checks age", function() {
        it("should be defined", function() {
            expect(whatCanIDrink).toBeDefined();
        })

        it("should return an error if age is not a number", function() {
            var result = whatCanIDrink("yes");
            expect(result).toBe("Sorry, I can't tell what drink because that age is incorrect!");
            })
        
        it("should return an error if age is less than zero", function() {
            var result = whatCanIDrink(-1);
            expect(result).toBe("Sorry, I can't tell what drink because that age is incorrect!");
            })
        it("should return \"Drink Toddy\" when called as whatCanIDrink(11)", function() {
            var result = whatCanIDrink(11);
            expect(result).toBe("Drink Toddy");
        })
        it("should return \"Drink Coke\" when called as whatCanIDrink(14)", function() {
            var result = whatCanIDrink(14);
            expect(result).toBe("Drink Coke");
        })
        it("should return \"Drink Coke\" when called as whatCanIDrink(16)", function() {
            var result = whatCanIDrink(16);
            expect(result).toBe("Drink Coke");
        })
        it("should return \"Drink Beer\" when called as whatCanIDrink(18)", function() {
            var result = whatCanIDrink(18);
            expect(result).toBe("Drink Beer");
        })
        it("should return \"Drink Beer\" when called as whatCanIDrink(20)", function() {
            var result = whatCanIDrink(20);
            expect(result).toBe("Drink Beer");
        })
        it("should return \"Drink Whisky\" when called as whatCanIDrink(21)", function() {
            var result = whatCanIDrink(21);
            expect(result).toBe("Drink Whisky");
        })
        it("should return \"Drink Whisky\" when called as whatCanIDrink(25)", function() {
            var result = whatCanIDrink(25);
            expect(result).toBe("Drink Whisky");
        })
        it("should return \"Drink Whisky\" when called as whatCanIDrink(47)", function() {
            var result = whatCanIDrink(47);
            expect(result).toBe("Drink Whisky");
        })
        it("should return \"Drink Whisky\" when called as whatCanIDrink(81)", function() {
            var result = whatCanIDrink(81);
            expect(result).toBe("Drink Whisky");
        })
        it("should return \"Drink Whisky\" when called as whatCanIDrink(117)", function() {
            var result = whatCanIDrink(117);
            expect(result).toBe("Drink Whisky");
        })
        it("should return \"Drink Whisky\" when called as whatCanIDrink(129)", function() {
            var result = whatCanIDrink(129);
            expect(result).toBe("Drink Whisky");
        })
        it("should return an error if age is 130", function() {
            var result = whatCanIDrink(130);
            expect(result).toBe("Sorry, I can't tell what drink because that age is incorrect!");
        })
        it("should return an error if age is greater than 130", function() {
            var result = whatCanIDrink(143);
            expect(result).toBe("Sorry, I can't tell what drink because that age is incorrect!");
        })

        it("should contain \"Drink\" when called as whatCanIDrink(34)", function() {
            var result = whatCanIDrink(34).indexOf("Drink");
            expect(result).not.toEqual(-1);
        })
    })
})