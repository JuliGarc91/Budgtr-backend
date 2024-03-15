# Testing Resources

## POST fx successfully creates new resource with id:6

```bash
curl -X POST http://localhost:8888/transactions/ -H "Content-Type: application/json" -d '{"itemName": "Magenta Yarn", 
        "amount": 3,
        "costPerItemInDollars": 4,
        "date": "January 31 2024",
        "from": "Arts and Crafts Store",
        "category": "textiles"}'
```
### This resource was created and assigned id 6:
 {"itemName":"Magenta Yarn","amount":3,"costPerItemInDollars":4,"date":"January 30 2024","from":"Arts and Crafts Store","category":"textiles","id":6}

Output:
```
{"transactions":[{"id":1,"itemName":"Pink Yarn","amount":3,"costPerItemInDollars":4,"date":"January 1 2024","from":"Arts and Crafts Store","category":"textiles"},{"id":2,"itemName":"Brush Set","amount":1,"costPerItemInDollars":30,"date":"January 1 2024","from":"Arts and Crafts Store","category":"art supplies"},{"id":3,"itemName":"Canvas","amount":3,"costPerItemInDollars":3,"date":"January 1 2024","from":"Arts and Crafts Store","category":"art supplies"},{"id":4,"itemName":"Blue Yarn","amount":3,"costPerItemInDollars":4,"date":"January 10 2024","from":"Arts and Crafts Store","category":"textiles"},{"id":5,"itemName":"Water Color Paints","amount":5,"costPerItemInDollars":10,"date":"January 1 2024","from":"Arts and Crafts Store","category":"art supplies"},{"itemName":"Magenta Yarn","amount":3,"costPerItemInDollars":4,"date":"January 30 2024","from":"Arts and Crafts Store","category":"textiles","id":6}]}%
```

## PUT - input
```bash
curl -X PUT http://localhost:8888/transactions/6 -H "Content-Type: application/json" -d '{"id":6,"itemName": "Magenta Yarn", "amount": 4, "costPerItemInDollars": 4, "date": "January 30 2024", "from": "Arts and Crafts Store", "category": "textiles"}'
```

### Output in terminal:
The object with ID 6 updated amount key from 3 to 4
{"itemName":"Magenta Yarn","amount":4,"costPerItemInDollars":4,"date":"January 30 2024","from":"Arts and Crafts Store","category":"textiles"}

```bash
julissagarcia@Julissas-MacBook-Air backend % >....    
pe: application/json" -d '{"itemName": "Magenta Yarn", 
        "amount": 3,
        "costPerItemInDollars": 4,
        "date": "January 31 2024",
        "from": "Arts and Crafts Store",
        "category": "textiles"}'
{"transactions":[{"id":1,"itemName":"Pink Yarn","amount":3,"costPerItemInDollars":4,"date":"January 1 2024","from":"Arts and Crafts Store","category":"textiles"},{"id":2,"itemName":"Brush Set","amount":1,"costPerItemInDollars":30,"date":"January 1 2024","from":"Arts and Crafts Store","category":"art supplies"},{"id":3,"itemName":"Canvas","amount":3,"costPerItemInDollars":3,"date":"January 1 2024","from":"Arts and Crafts Store","category":"art supplies"},{"id":4,"itemName":"Blue Yarn","amount":3,"costPerItemInDollars":4,"date":"January 10 2024","from":"Arts and Crafts Store","category":"textiles"},{"id":5,"itemName":"Water Color Paints","amount":5,"costPerItemInDollars":10,"date":"January 1 2024","from":"Arts and Crafts Store","category":"art supplies"},{"itemName":"Magenta Yarn","amount":3,"costPerItemInDollars":4,"date":"January 31 2024","from":"Arts and Crafts Store","category":"textiles","id":6}]}%    
julissagarcia@Julissas-MacBook-Air backend % curl -X PUT http://localhost:8888/transactions/6 -H "Content-Type: application/json" -d '{"itemName": "Magenta Yarn", "amount": 4, "costPerItemInDollars": 4, "date": "January 30 2024", "from": "Arts and Crafts Store", "category": "textiles"}'
{"transactions":[{"id":1,"itemName":"Pink Yarn","amount":3,"costPerItemInDollars":4,"date":"January 1 2024","from":"Arts and Crafts Store","category":"textiles"},{"id":2,"itemName":"Brush Set","amount":1,"costPerItemInDollars":30,"date":"January 1 2024","from":"Arts and Crafts Store","category":"art supplies"},{"id":3,"itemName":"Canvas","amount":3,"costPerItemInDollars":3,"date":"January 1 2024","from":"Arts and Crafts Store","category":"art supplies"},{"id":4,"itemName":"Blue Yarn","amount":3,"costPerItemInDollars":4,"date":"January 10 2024","from":"Arts and Crafts Store","category":"textiles"},{"id":5,"itemName":"Water Color Paints","amount":5,"costPerItemInDollars":10,"date":"January 1 2024","from":"Arts and Crafts Store","category":"art supplies"},{"itemName":"Magenta Yarn","amount":4,"costPerItemInDollars":4,"date":"January 30 2024","from":"Arts and Crafts Store","category":"textiles"}]}% 
```
data in http://localhost:8888/transactions/6 after POST and then PUT is:

```js
{
"itemName": "Magenta Yarn",
"amount": 4,
"costPerItemInDollars": 4,
"date": "January 31 2024",
"from": "Arts and Crafts Store",
"category": "textiles",
"id": 6
}
```
after inputting

```bash
curl -X delete http://localhost:8888/transactions/6
```
output in broswer is now:

```js
{
"message": "Transaction with ID 6 not found. :'-("
}
```
# Formatting Date
In the backend changed the key "date" from an ordinary string to an ISO standard date. The value for "date" key now looks like this for example:

```js
{ date: new Date('January 1, 2024') }
```
From 

## Date time string format

"ECMAScript defines a string interchange format for date-times based upon a simplification of the ISO 8601 calendar date extended format. The format is as follows: YYYY-MM-DDTHH:mm:ss.sssZ"

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#date_time_string_format 

https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-date-time-string-format

```
There are many ways to format a date as a string. The JavaScript specification only specifies one format to be universally supported: the date time string format, a simplification of the ISO 8601 calendar date extended format. The format is as follows:

YYYY-MM-DDTHH:mm:ss.sssZ
YYYY is the year, with four digits (0000 to 9999), or as an expanded year of + or - followed by six digits. The sign is required for expanded years. -000000 is explicitly disallowed as a valid year.
MM is the month, with two digits (01 to 12). Defaults to 01.
DD is the day of the month, with two digits (01 to 31). Defaults to 01.
T is a literal character, which indicates the beginning of the time part of the string. The T is required when specifying the time part.
HH is the hour, with two digits (00 to 23). As a special case, 24:00:00 is allowed, and is interpreted as midnight at the beginning of the next day. Defaults to 00.
mm is the minute, with two digits (00 to 59). Defaults to 00.
ss is the second, with two digits (00 to 59). Defaults to 00.
sss is the millisecond, with three digits (000 to 999). Defaults to 000.
Z is the timezone offset, which can either be the literal character Z (indicating UTC), or + or - followed by HH:mm, the offset in hours and minutes from UTC.
```

## Date Errors

error message:

```
react-dom_client.js?v=d666dc30:1859 The specified value "2024-03-13T00:00:00.000Z" does not conform to the required format, "yyyy-MM-dd".
```

second error message after formatting it in user friendly way:

```
"3/12/2024" does not conform to the required format, "yyyy-MM-dd".
```

to fix added this function in the front end:

```js
const formatDateForServer = (dateString) => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};
```
explanation of fx:

`date.getMonth() + 1`: Since the `getMonth()` method returns a zero-based index, we add 1 to it to get the actual month number. (January is 1 for example)

then turn it to string so it's not a number (for the server) using `String()`

`padStart()` makes it so that it is always 2 characters long (it's a string method that's kind of like `toFixed()` except this is for formatting numbers to have digits after a decimal point (and it turns the number to a string but `padStart()` is only for strings)

`getFullYear()` in this case is an absolute value: 

Return value:
An integer representing the year for the given date according to local time. Returns NaN if the date is invalid.

Description:
Unlike `getYear()` (which is deprecated because it doesn't return full years), the value returned by getFullYear() is an absolute number. For dates between the years 1000 and 9999, `getFullYear()` returns a four-digit number, for example, 1995. Use this function to make sure a year is compliant with years after 2000.


