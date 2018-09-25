/**
 * Overrides string's startsWith method with custom implementation.
 * @param {string} prefix
 * @returns true if this string starts with the prefix. 
 */
String.prototype.startsWith = function (prefix) {
    // If prefix is either or larger than original string
    // then return false
    var prefixStr = String(prefix);
    if (prefixStr == null) {
        return false;
    }
    if (prefixStr.length > this.length) {
        return false;
    }
    // Traverse from the start of both strings and match each character
    // at position i in both strings.
    for (var i = 0; i < prefixStr.length; i++) {
        // If any mismatching character found then return false
        if (prefixStr.charAt(i) != this.charAt(i)) {
            return false;
        }
    }
    return true;
};

/**
 * Overrides string's endsWith method with custom implementation.
 * @param {string} suffix
 * @returns true if this string ends with the suffix. 
 */
String.prototype.endsWith = function (suffix) {
    // If suffix is either or larger than original string
    // then return false
    var suffixStr = String(suffix);
    if (suffixStr == null) {
        return false;
    }
    if (suffixStr.length > this.length) {
        return false;
    }

    // Traverse from the end of both strings and match each character
    // at position i and j in both strings.
    for (var i=suffixStr.length-1, j=this.length-1; i > -1 && j > -1; i--, j--) {
        // If any mismatching character found then return false
        if (suffixStr.charAt(i) != this.charAt(j)) {
            return false;
        }
    }
    return true;
};