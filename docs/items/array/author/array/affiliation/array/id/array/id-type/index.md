!!! warning "This document is not official Crossref documentation"
# Id-type
PATH = items/array/author/array/affiliation/array/id/array/id-type(1)  
Occurs 99 389 times  
Unique values: 3  
{ .annotate }

1. A route to an element, for example:  
   The route "items/array/author/array/affiliation/array/id/array/id-type" corresponds to navigating through the JSON indices as  
   ["items"][0]["author"][0]["affiliation"][0]["id"][0]["id-type"]  

```mermaid
graph LR
   1[items]
   2[0]
   3[1]
   4[2]
   5[author]
   6[0]
   7[1]
   8[2]
   9[affiliation]
   10[0]
   11[1]
   12[2]
   13[id]
   14[0]
   15[1]
   16[2]
   17[id-type]
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
    13 --> 14
    13 --> 15
    13 --> 16
    15 --> 17
```

| **Row** | **Value**<br>`String` | **Count**<br>`Int64` |
|--------:|----------------------:|---------------------:|
| **1**   | ROR                   | 95 788               |
| **2**   | ISNI                  | 2 730                |
| **3**   | wikidata              | 871                  |

