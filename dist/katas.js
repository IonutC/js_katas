'use strict';

define(function () {

    //filter words based on regex
    function filterWords(phrase) {
        return phrase.replace(/(bad|mean|ugly|horrible|hideous)/ig, 'awesome');
    }

    //remove the numbers from a string
    var FilterNumbers = function FilterNumbers(str) {
        return str.split('').filter(function (c) {
            return isNaN(parseInt(c));
        }).join('');
    };

    //sum the numbers from a string
    function sumFromString(str) {
        var match;
        //in case there is an empty string
        if (!str) return 0;
        match = str.match(/\d+/gi);
        //in case there are no digits in the string
        if (!match) return 0;
        //if there is only one digit push a 0 for reduce
        if (match.length === 1) match.push(0);
        return match.reduce(function (prev, curr) {
            return parseInt(prev) + parseInt(curr);
        });
    }

    //n to int
    function toInteger(n) {
        if (!Math.trunc(n) || n === Infinity) return 0;
        return Math.trunc(n);
    }

    //reverse array
    function reverse(arr) {
        var len = arr.length,
            left = null,
            right = null;

        for (left = 0; left < len / 2; left += 1) {
            right = len - 1 - left;
            var temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;
        }
        return arr;
    }

    //insert dashes to odd numbers and * for even numbers
    function insertDash(num) {
        return num.toString().replace(/[13579](?=[13579])/g, "$&-").replace(/[2468](?=[2468])/g, "$&*");
    }
    //return the factorial number of n => n!
    var factorialFactory = function factorialFactory(n) {
        var f = 1;

        if (n === null || typeof n === "string") return 0;else if (n <= -1) return null;

        for (var x = 2; x <= n; x++) f = f * x;

        return f;
    };

    //swap caps to lower and vice-versa
    var swap = function swap(str) {
        var tmpUpper = [];

        str.split("").filter(function (s) {
            var tmp = "",
                tmp2 = "";
            if (s === s.toLowerCase()) tmp = tmp + s.toUpperCase();else tmp2 = tmp2 + s.toLowerCase();

            tmpUpper.push(tmp.concat(tmp2));
        });

        return tmpUpper.join("");
    };

    var duplicateCount = function duplicateCount(str) {
        if (str === "" || str.length === 0) return 0;
        str = str.toLowerCase().split("");
        var counts = {},
            count = 0;
        str.forEach(function (x) {
            return counts[x] = (counts[x] || 0) + 1;
        });
        for (var _str in counts) {
            if (counts[_str] > 1) count += 1;
        }return count;
    };

    var reverseWords = function reverseWords(str) {
        var st = [];
        str.split(" ").forEach(function (s) {
            st.push(s.split("").reverse().join(""));
        });
        return st.join(" ");
    };

    return {
        filterWords: filterWords,
        filterNumbers: FilterNumbers,
        sumFromString: sumFromString,
        toInteger: toInteger,
        reverse: reverse,
        insertDash: insertDash,
        factorialFactory: factorialFactory,
        swap: swap,
        duplicateCount: duplicateCount,
        reverseWords: reverseWords
    };
});