!!! warning "This document is not official Crossref documentation"
# Asserted-by
PATH = items/array/relation/is-compiled-by/array/asserted-by(1)  
Occurs 3 times  
Unique values: 1  
{ .annotate }

1. A route to an element, for example:  
   The route "items/array/relation/is-compiled-by/array/asserted-by" corresponds to navigating through the JSON indices as  
   ["items"][0]["relation"]["is-compiled-by"][0]["asserted-by"]  

```mermaid
graph LR
   1[items]
   2[0]
   3[1]
   4[2]
   5[relation]
   6[is-compiled-by]
   7[0]
   8[1]
   9[2]
   10[asserted-by]
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
| **1**   | object                | 3                    |

