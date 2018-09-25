package com.au.cm.codereview;

import org.junit.Assert;
import org.junit.Test;

/**
 * Requirement 1 Test class.
 * Test class for StringUtil
 */
public class StringUtilTest {

    /**
     * Tests if a non-empty string is null or empty.
     * The method to test is expected to return false.
     */
    @Test
    public void testNullEmptyCheck_whenNonEmptyString() {
        Assert.assertFalse(StringUtil.IsNullOrEmpty("Test"));
    }

    /**
     * Tests if an empty string is null or empty.
     * The method to test is expected to return true.
     */
    @Test
    public void testNullEmptyCheck_whenEmptyString() {
        Assert.assertTrue(StringUtil.IsNullOrEmpty(""));
    }

    /**
     * Tests if a null string is null or empty.
     * The method to test is expected to return true.
     */
    @Test
    public void testNullEmptyCheck_whenNullString() {
        Assert.assertTrue(StringUtil.IsNullOrEmpty(null));
    }
}
