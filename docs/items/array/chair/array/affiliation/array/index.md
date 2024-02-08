!!! warning "This document is not official Crossref documentation"
# Elements
PATH = items/array/chair/array/affiliation/array(1)  
Occurs 4 961 times  
{ .annotate }

1. A route to an element, for example:  
   The route "items/array/chair/array/affiliation/array" corresponds to navigating through the JSON indices as  
   ["items"][0]["chair"][0]["affiliation"][0]  

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
   9[affiliation]
   10[0]
   11[1]
   12[2]
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
```


## Department
See more information: [items/array/chair/array/affiliation/array/department](department/index.md)  
Occurs 40 timess  

| **Row** | **Length**<br>`Any` | **Count**<br>`Int64` |
|--------:|--------------------:|---------------------:|
| **1**   | 1                   | 40                   |

## Id
See more information: [items/array/chair/array/affiliation/array/id](id/index.md)  
Occurs 9 timess  

| **Row** | **Length**<br>`Any` | **Count**<br>`Int64` |
|--------:|--------------------:|---------------------:|
| **1**   | 1                   | 9                    |

## Name
See more information: [items/array/chair/array/affiliation/array/name](name/index.md)  
Occurs 4 960 timess  
Unique values: > 999  

!!! note "Due to current limitations, only the first 1,000 unique values are counted."

| **Row** | **Value**<br>`String`      | **Count**<br>`Int64` |
|--------:|---------------------------:|---------------------:|
| **1**   | Pennsylvania State U.      | 47                   |
| **2**   | U. of Michigan             | 42                   |
| **3**   | Cornell U.                 | 41                   |
| **4**   | Washington U. in St. Louis | 38                   |
| **5**   | Boston College             | 36                   |
| **6**   | INSEAD                     | 34                   |
| **7**   | University of Washington   | 32                   |
| **8**   | Harvard U.                 | 32                   |
| **9**   | Case Western Reserve U.    | 30                   |
| **10**  | U. of Southern California  | 28                   |
| ... | ... | ... |

