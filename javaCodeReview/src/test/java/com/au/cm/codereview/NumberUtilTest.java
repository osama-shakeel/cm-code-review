package com.au.cm.codereview;

import org.junit.Assert;
import org.junit.Test;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.LongStream;

/**
 * Test class of NumberUtil
 */
public class NumberUtilTest {

    /**
     * Test finding divisors for even number 60.
     * The method is expected to return 1L, 2L, 3L, 4L, 5L, 6L, 10L, 12L, 15L, 20L, 30L, 60L
     */
    @Test
    public void testDivisors_whenEvenNumber() {
        // Prepare test data.
        List<Long> divisors = Arrays.asList(1L, 2L, 3L, 4L, 5L, 6L, 10L, 12L, 15L, 20L, 30L, 60L);

        List<Long> resultDivisors = NumberUtil.findDivisors(60L);
        Assert.assertNotNull("Divisors cannot be null", resultDivisors);
        Assert.assertEquals("Divisors found are not the same as expected",
                divisors, resultDivisors);
    }

    /**
     * Test finding divisors for odd number 21.
     * The method is expected to return 1L, 3L, 7L, 21L
     */
    @Test
    public void testDivisors_whenOddNumber() {
        // Prepare test data.
        List<Long> divisors = Arrays.asList(1L, 3L, 7L, 21L);

        List<Long> resultDivisors = NumberUtil.findDivisors(21L);
        Assert.assertNotNull("Divisors cannot be null", resultDivisors);
        Assert.assertEquals("Divisors found are not the same as expected",
                divisors, resultDivisors);
    }

    /**
     * Test finding divisors of a negative number
     */
    @Test(expected = IllegalArgumentException.class)
    public void testFindDivisors_whenNegativeNumber() {
        NumberUtil.findDivisors(-1L);
        Assert.fail("IllegalArgumentException is expected to be thrown");
    }

    /**
     * Test finding divisors of a number: 0
     */
    @Test(expected = IllegalArgumentException.class)
    public void testFindDivisors_whenNumberZero() {
        NumberUtil.findDivisors(0L);
        Assert.fail("IllegalArgumentException is expected to be thrown");
    }

    /**
     * Test finding common numbers when the input array is empty
     */
    @Test
    public void testFindCommonNumbers_whenEmptyArray() {
        List <Long> resultList = NumberUtil.findMostCommonNumbers(new long[]{});
        Assert.assertNotNull(resultList);
        Assert.assertTrue(resultList.isEmpty());
    }

    /**
     * Test finding common numbers when the input array is null
     */
    @Test
    public void testFindCommonNumbers_whenNullArray() {
        List <Long> resultList = NumberUtil.findMostCommonNumbers(null);
        Assert.assertNotNull(resultList);
        Assert.assertTrue(resultList.isEmpty());
    }

    /**
     * Test finding common numbers when the input array has no common number.
     * Since all numbers in the input are unique hence the same list is returned.
     */
    @Test
    public void testFindCommonNumbers_whenNoCommonNumberInArray() {
        // Prepare test data
        long[] numArray = new long[]{1L, 3L, 7L, 21L};

        List <Long> resultList = NumberUtil.findMostCommonNumbers(numArray);
        Assert.assertNotNull(resultList);
        Assert.assertTrue(!resultList.isEmpty());
        Collections.sort(resultList);
        Assert.assertEquals(resultList, LongStream.of(numArray).boxed().collect(Collectors.toList()));
    }

    /**
     * Test finding common numbers when the input array with few common numbers.
     * Since only 1 is common therefore only 1 is returned
     */
    @Test
    public void testFindCommonNumbers_whenFewCommonNumbersInArray() {
        // Prepare test data
        long[] numArray = new long[]{1L, 3L, 7L, 21L, 1L, 3L};

        List <Long> resultList = NumberUtil.findMostCommonNumbers(numArray);
        Assert.assertNotNull(resultList);
        Assert.assertTrue(!resultList.isEmpty());
        Collections.sort(resultList);
        Assert.assertEquals(resultList, Arrays.asList(1L, 3L));
    }

    /**
     * Test finding common numbers when the input array with many common numbers.
     * Since 5 and 4 are the most common therefore 5 and 4 are returned.
     */
    @Test
    public void testFindCommonNumbers_whenManyCommonNumbersInArray() {
        // Prepare test data
        long[] numArray = new long[]{5L, 4L, 3L, 2L, 4L, 5L, 1L, 6L, 1L, 2L, 5L, 4};

        List <Long> resultList = NumberUtil.findMostCommonNumbers(numArray);
        Assert.assertNotNull(resultList);
        Assert.assertTrue(!resultList.isEmpty());
        Collections.sort(resultList);
        Assert.assertEquals(resultList, Arrays.asList(4L, 5L));
    }
}
