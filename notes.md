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

