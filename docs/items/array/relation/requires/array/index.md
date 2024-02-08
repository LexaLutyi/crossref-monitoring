!!! warning "This document is not official Crossref documentation"
# Elements
PATH = items/array/relation/requires/array(1)  
Occurs 2 times  
{ .annotate }

1. A route to an element, for example:  
   The route "items/array/relation/requires/array" corresponds to navigating through the JSON indices as  
   ["items"][0]["relation"]["requires"][0]  

```mermaid
graph LR
   1[items]
   2[0]
   3[1]
   4[2]
   5[relation]
   6[requires]
   7[0]
   8[1]
   9[2]
    1 --> 2
    1 --> 3
    1 --> 4
    3 --> 5
    5 --> 6
    6 --> 7
    6 --> 8
    6 --> 9
```


## Asserted-by
See more information: [items/array/relation/requires/array/asserted-by](asserted-by/index.md)  
Occurs 2 timess  
Unique values: 1  

| **Row** | **Value**<br>`String` | **Count**<br>`Int64` |
|--------:|----------------------:|---------------------:|
| **1**   | subject               | 2                    |

## Id
See more information: [items/array/relation/requires/array/id](id/index.md)  
Occurs 2 timess  
Unique values: 2  

| **Row** | **Value**<br>`String` | **Count**<br>`Int64` |
|--------:|----------------------:|---------------------:|
| **1**   | ABC123                | 1                    |
| **2**   |                       | 1                    |

## Id-type
See more information: [items/array/relation/requires/array/id-type](id-type/index.md)  
Occurs 2 timess  
Unique values: 1  

| **Row** | **Value**<br>`String` | **Count**<br>`Int64` |
|--------:|----------------------:|---------------------:|
| **1**   | other                 | 2                    |

