!!! warning "This document is not official Crossref documentation"
# Currency
PATH = items/array/project/array/award-amount/currency(1)  
Occurs 52 198 times  
Unique values: 11  
{ .annotate }

1. A route to an element, for example:  
   The route "items/array/project/array/award-amount/currency" corresponds to navigating through the JSON indices as  
   ["items"][0]["project"][0]["award-amount"]["currency"]  

```mermaid
graph LR
   1[items]
   2[0]
   3[1]
   4[2]
   5[project]
   6[0]
   7[1]
   8[2]
   9[award-amount]
   10[currency]
    1 --> 2
    1 --> 3
    1 --> 4
    3 --> 5
    5 --> 6
    5 --> 7
    5 --> 8
    7 --> 9
    9 --> 10
```

| **Row** | **Value**<br>`U{Nothing, String}` | **Count**<br>`Int64` |
|--------:|----------------------------------:|---------------------:|
| **1**   | EUR                               | 36 034               |
| **2**   | GBP                               | 12 549               |
| **3**   | nothing                           | 2 351                |
| **4**   | USD                               | 1 170                |
| **5**   | AUD                               | 83                   |
| **6**   | INR                               | 4                    |
| **7**   | CHF                               | 2                    |
| **8**   | ZAR                               | 2                    |
| **9**   | SGD                               | 1                    |
| **10**  | CAD                               | 1                    |
| **11**  | NOK                               | 1                    |

