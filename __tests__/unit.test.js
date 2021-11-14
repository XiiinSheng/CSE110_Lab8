// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
// test isPhoneNumber
test('test is parenthesis phone number', () => {
  expect(functions.isPhoneNumber("(111)111-1111")).toBe(true);
});

test('test is dash phone number', () => {
  expect(functions.isPhoneNumber("123-456-7890")).toBe(true);
});

test('test is not phone number format', () => {
  expect(functions.isPhoneNumber("1111111111")).toBe(false);
});

test('test is not 10-digit phone number', () => {
  expect(functions.isPhoneNumber("123-123-123")).toBe(false);
});

// test isEmail
test('test is email with number account', () => {
  expect(functions.isEmail("12345@ucsd.com")).toBe(true);
});

test('test is email with char domain', () => {
  expect(functions.isEmail("real@email.edu")).toBe(true);
});

test('test is not email with .ending', () => {
  expect(functions.isEmail("fake@email")).toBe(false);
});

test('test is not email with too.long.ending', () => {
  expect(functions.isEmail("nothing@is.real.here")).toBe(false);
});
// test isStrongPassword
test('test abcde is strong password', () => {
  expect(functions.isStrongPassword("abcde")).toBe(true);
});

test('test a1b2C is strong password', () => {
  expect(functions.isStrongPassword("a1b2C")).toBe(true);
});

test('test 11111 is not strong password', () => {
  expect(functions.isStrongPassword("11111")).toBe(false);
});

test('test aaaaaaaaaaaaaaaaaaaaaaa is not a strong password', () => {
  expect(functions.isStrongPassword("aaaaaaaaaaaaaaaaaaaaaaa")).toBe(false);
});
// test isDate
test('test 11/11/1111 is date', () => {
  expect(functions.isDate("11/11/1111")).toBe(true);
});

test('test 01/01/2021 is date', () => {
  expect(functions.isDate("01/01/2021")).toBe(true);
});

test('test 11/11/11 is not date', () => {
  expect(functions.isDate("11/11/11")).toBe(false);
});

test('test 11/11 is not date', () => {
  expect(functions.isDate("11/11")).toBe(false);
});
// test isHexColor
test('test #9f2f11 is hex color', () => {
  expect(functions.isHexColor("#9f2f11")).toBe(true);
});

test('test #000 is hex color', () => {
  expect(functions.isHexColor("#000")).toBe(true);
});

test('test #1234 is not hex color', () => {
  expect(functions.isHexColor("#1234")).toBe(false);
});

test('test #0000000 is not hex color', () => {
  expect(functions.isHexColor("#0000000")).toBe(false);
});