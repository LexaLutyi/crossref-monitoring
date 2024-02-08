!!! warning "This document is not official Crossref documentation"
# Id
PATH = items/array/relation/has-expression/array/id(1)  
Occurs 2 times  
Unique values: 2  
{ .annotate }

1. A route to an element, for example:  
   The route "items/array/relation/has-expression/array/id" corresponds to navigating through the JSON indices as  
   ["items"][0]["relation"]["has-expression"][0]["id"]  

```mermaid
graph LR
   1[items]
   2[0]
   3[1]
   4[2]
   5[relation]
   6[has-expression]
   7[0]
   8[1]
   9[2]
   10[id]
    1 --> 2
    1 --> 3
    1 --> 4
    3 --> 5
    5 --> 6
    6 --> 7
    6 --> 8
    6 --> 9
    8 --> 10
```

| **Row** | **Value**<br>`String` | **Count**<br>`Int64` |
|--------:|----------------------:|---------------------:|
| **1**   | 2791-6022             | 1                    |
| **2**   | 2149-6544             | 1                    |
