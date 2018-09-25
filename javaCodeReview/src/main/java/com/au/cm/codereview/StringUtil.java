package com.au.cm.codereview;

/**
 * Requirement 1:
 * Class that contains utility method(s) for String
 */
public class StringUtil {

    /**
     * Requirement 1:
     * Utility method to check if the provided string
     * is null or empty.
     * @param str String instance to check for null/emptiness.
     * @return true if the string instance is null or empty otherwise false.
     */
    public static boolean IsNullOrEmpty(String str) {
        boolean isStringNullEmpty = true;

        // If string is not null then check if its empty
        // otherwise report string is empty = true.
        if (str != null) {

            // If string length is zero then report string is empty = true;
            isStringNullEmpty = str.length() == 0;
        }

        return isStringNullEmpty;
    }

    // method to print the divisors
    static void printDivisors(int n) {
        // Note that this loop runs till square root
        for (int i = 1; i <= Math.sqrt(n); i++) {
            if (n % i == 0) {
                // If divisors are equal, print only one
                if (n / i == i)
                    System.out.printf("%d ", i);

                else // Otherwise print both
                    System.out.printf("%d %d ", i, n / i);
            }
        }
    }
}
