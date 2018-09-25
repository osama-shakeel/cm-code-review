package com.au.cm.codereview;

import java.util.*;
import java.util.stream.Collectors;

/**
 * Class that contains utility methods for number related operations.
 */
public class NumberUtil {

    /**
     * Requirement 2:
     * Finds the list of all positive divisors of the given positive number.
     * @param number Number to find its divisors.
     * @return A sorted list of divisors of the number.
     * @throws IllegalArgumentException If provided number is not positive.
     */
    public static List<Long> findDivisors(long number) {
        if (number > 0) {
            List <Long> divisors = new ArrayList<>();
            long numSqrt = (long)java.lang.Math.sqrt(number);

            for (long i = 1; i <= numSqrt; i++) {

                // If i is a divisor of number
                if (number % i == 0) {
                    // Add i to the list of divisors
                    divisors.add(i);

                    // Also add div of number / i to the list of divisors
                    // If div and i are not the same.
                    long div = number / i;
                    if (div != i) {
                        divisors.add(div);
                    }
                }
            }
            // Sort the list of divisors before returning
            divisors.sort((Long n1, Long n2) -> (int)(n1 - n2));
            return divisors;
        }
        throw new IllegalArgumentException("Number should be positive.");
    }

    /**
     * Finds the list of most common numbers in the given array: numArray.
     * If the array is null or empty then empty list is returned.
     * @param numArray Array of numbers
     * @return A list of most common numbers in the given array.
     */
    public static List <Long> findMostCommonNumbers(long... numArray) {
        List <Long> commonNums = null;

        // If numbers array is not null/empty then find common numbers
        // otherwise return empty array
        if (numArray != null && numArray.length > 0) {

            // Maintain a map of each number and its count.
            Map <Long, Long> numCountMap = new HashMap<>();

            // Represents the maximum count of any number in the array.
            long maxCount = 0;

            // For each number in the array, save or increment its count in the map.
            for (long num : numArray) {
                Long count = numCountMap.get(num);
                if (count == null) {
                    count = 0L;
                }
                count = count + 1;
                numCountMap.put(num, count);

                // Assign maxCount for any number whose count is found to be
                // the maximum so far in the array.
                if (count > maxCount) {
                    maxCount = count;
                }
            }

            // Extract the most common numbers whose count is the maximum so
            // far in the array
            final long max = maxCount;
            commonNums =
                    numCountMap.entrySet().stream()
                            .filter(entry -> entry.getValue() == max)
                            .map(entry -> entry.getKey()).collect(Collectors.toList());
        }
        return commonNums != null?
                commonNums : Collections.EMPTY_LIST;
    }
}
