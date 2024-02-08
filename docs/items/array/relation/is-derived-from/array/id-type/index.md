!!! warning "This document is not official Crossref documentation"
# Id-type
PATH = items/array/relation/is-derived-from/array/id-type(1)  
Occurs 306 times  
Unique values: 5  
{ .annotate }

1. A route to an element, for example:  
   The route "items/array/relation/is-derived-from/array/id-type" corresponds to navigating through the JSON indices as  
   ["items"][0]["relation"]["is-derived-from"][0]["id-type"]  

```mermaid
graph LR
   1[items]
   2[0]
   3[1]
   4[2]
   5[relation]
   6[is-derived-from]
   7[0]
   8[1]
   9[2]
   10[id-type]
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
| **1**   | issn                  | 235                  |
| **2**   | doi                   | 46                   |
| **3**   | uri                   | 22                   |
| **4**   | other                 | 2                    |
| **5**   | ecli                  | 1                    |

