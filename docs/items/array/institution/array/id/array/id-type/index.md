!!! warning "This document is not official Crossref documentation"
# Id-type
PATH = items/array/institution/array/id/array/id-type(1)  
Occurs 9 620 times  
Unique values: 3  
{ .annotate }

1. A route to an element, for example:  
   The route "items/array/institution/array/id/array/id-type" corresponds to navigating through the JSON indices as  
   ["items"][0]["institution"][0]["id"][0]["id-type"]  

```mermaid
graph LR
   1[items]
   2[0]
   3[1]
   4[2]
   5[institution]
   6[0]
   7[1]
   8[2]
   9[id]
   10[0]
   11[1]
   12[2]
   13[id-type]
    1 --> 2
    1 --> 3
    1 --> 4
    3 --> 5
    5 --> 6
    5 --> 7
    5 --> 8
    7 --> 9
    9 --> 10
    9 --> 11
    9 --> 12
    11 --> 13
```

| **Row** | **Value**<br>`String` | **Count**<br>`Int64` |
|--------:|----------------------:|---------------------:|
| **1**   | ROR                   | 6 495                |
| **2**   | ISNI                  | 1 796                |
| **3**   | wikidata              | 1 329                |

