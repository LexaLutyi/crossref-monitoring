!!! warning "This document is not official Crossref documentation"
# Sequence
PATH = items/array/chair/array/sequence(1)  
Occurs 32 030 times  
Unique values: 2  
{ .annotate }

1. A route to an element, for example:  
   The route "items/array/chair/array/sequence" corresponds to navigating through the JSON indices as  
   ["items"][0]["chair"][0]["sequence"]  

```mermaid
graph LR
   1[items]
   2[0]
   3[1]
   4[2]
   5[chair]
   6[0]
   7[1]
   8[2]
   9[sequence]
    1 --> 2
    1 --> 3
    1 --> 4
    3 --> 5
    5 --> 6
    5 --> 7
    5 --> 8
    7 --> 9
```

| **Row** | **Value**<br>`String` | **Count**<br>`Int64` |
|--------:|----------------------:|---------------------:|
| **1**   | additional            | 21 500               |
| **2**   | first                 | 10 530               |

