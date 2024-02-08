!!! warning "This document is not official Crossref documentation"
# Elements
PATH = items/array/editor/array/affiliation/array/department/array(1)  
Occurs 17 times  
Unique values: 12  
{ .annotate }

1. A route to an element, for example:  
   The route "items/array/editor/array/affiliation/array/department/array" corresponds to navigating through the JSON indices as  
   ["items"][0]["editor"][0]["affiliation"][0]["department"][0]  

```mermaid
graph LR
   1[items]
   2[0]
   3[1]
   4[2]
   5[editor]
   6[0]
   7[1]
   8[2]
   9[affiliation]
   10[0]
   11[1]
   12[2]
   13[department]
   14[0]
   15[1]
   16[2]
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
```

| **Row** | **Value**<br>`String`                                      | **Count**<br>`Int64` |
|--------:|-----------------------------------------------------------:|---------------------:|
| **1**   | Radiology                                                  | 5                    |
| **2**   | Breast Imaging                                             | 2                    |
| **3**   | Pediatrics Radiology                                       | 1                    |
| **4**   | Institute of Evolutionary Biology                          | 1                    |
| **5**   | Radiology Department, University of Vermont Medical Center | 1                    |
| **6**   | Interventional Radiology                                   | 1                    |
| **7**   | Feline Outreach                                            | 1                    |
| **8**   | Urology and Medicine                                       | 1                    |
| **9**   | Gastrointestinal Radiology                                 | 1                    |
| **10**  | Neuroradiology                                             | 1                    |
| **11**  | Head & Neck Radiology                                      | 1                    |
| **12**  | Medical Physics                                            | 1                    |

