/**
 * Math Utilities for Question Generation
 */
window.GenUtils = {
    // Random integer between min and max (inclusive)
    randomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },

    // GCD of two numbers
    gcd(a, b) {
        a = Math.abs(a);
        b = Math.abs(b);
        while (b) {
            a %= b;
            [a, b] = [b, a];
        }
        return a;
    },

    // LCM of two numbers
    lcm(a, b) {
        if (a === 0 || b === 0) return 0;
        return Math.abs(a * b) / this.gcd(a, b);
    },

    // Simplify a fraction
    simplify(n, d) {
        const common = this.gcd(n, d);
        return [n / common, d / common];
    },

    // Format fraction for display
    formatFraction(n, d) {
        if (d === 1) return `${n}`;
        if (d === 0) return "undefined";
        return `${n}/${d}`;
    },

    // Random non-zero integer
    randomNonZero(min, max) {
        let val = 0;
        while (val === 0) val = this.randomInt(min, max);
        return val;
    },

    // Pick a random item from an array
    pick(arr) {
        return arr[this.randomInt(0, arr.length - 1)];
    }
};
