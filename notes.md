# Testing Resources

POST fx successfully creates new resource with id:6

```bash
julissagarcia@Julissas-MacBook-Air backend % curl -X POST http://localhost:8888/transactions/ -H "Content-Type: application/json" -d '{"itemName": "Magenta Yarn", 
        "amount": 3,
        "costPerItemInDollars": 4,
        "date": "January 30 2024",
        "from": "Arts and Crafts Store",
        "category": "textiles"}'
{"transactions":[{"id":1,"itemName":"Pink Yarn","amount":3,"costPerItemInDollars":4,"date":"January 1 2024","from":"Arts and Crafts Store","category":"textiles"},{"id":2,"itemName":"Brush Set","amount":1,"costPerItemInDollars":30,"date":"January 1 2024","from":"Arts and Crafts Store","category":"art supplies"},{"id":3,"itemName":"Canvas","amount":3,"costPerItemInDollars":3,"date":"January 1 2024","from":"Arts and Crafts Store","category":"art supplies"},{"id":4,"itemName":"Blue Yarn","amount":3,"costPerItemInDollars":4,"date":"January 10 2024","from":"Arts and Crafts Store","category":"textiles"},{"id":5,"itemName":"Water Color Paints","amount":5,"costPerItemInDollars":10,"date":"January 1 2024","from":"Arts and Crafts Store","category":"art supplies"},{"itemName":"Magenta Yarn","amount":3,"costPerItemInDollars":4,"date":"January 30 2024","from":"Arts and Crafts Store","category":"textiles","id":6}]}%
```