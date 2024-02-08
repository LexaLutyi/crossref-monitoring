!!! warning "This document is not official Crossref documentation"
# Requires
PATH = items/array/relation/requires(1)  
Occurs 2 times  
{ .annotate }

1. A route to an element, for example:  
   The route "items/array/relation/requires" corresponds to navigating through the JSON indices as  
   ["items"][0]["relation"]["requires"]  

```mermaid
graph LR
   1[items]
   2[0]
   3[1]
   4[2]
   5[relation]
   6[requires]
    1 --> 2
    1 --> 3
    1 --> 4
    3 --> 5
    5 --> 6
```


## Properties of Array
See information about elements: [items/array/relation/requires/array](array/index.md)  
Distribution of lengths:  

| **Row** | **Length**<br>`Any` | **Count**<br>`Int64` |
|--------:|--------------------:|---------------------:|
| **1**   | 1                   | 2                    |

