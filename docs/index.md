---
title: Homepage
---
# Welcome to the Crossref Public Dataset Documentation

## Introduction

Welcome to the unofficial documentation for the Crossref Public Dataset as of April 2023. This project aims to provide an accessible and navigable guide to the expansive dataset provided by Crossref, covering an extensive collection of academic publications including articles, books, and more. Through our documentation, users can gain insights into the dataset's structure, understand the schema, and explore statistics that highlight the dataset's scale and scope.

## About Crossref

Crossref is a not-for-profit membership organization that exists to make scholarly communications better. It does this through a variety of services aimed at providing a shared infrastructure to support more effective scholarly communications. Crossref's citation linking backbone connects users to a wealth of research content, spanning articles, books, conference proceedings, datasets, and more.

!!! note "About the Dataset"
    The Crossref Public Dataset for April 2023 comprises an impressive collection of 28701 compressed JSON files, totaling 173 GB of data and encompassing 143,500,239 items. This dataset represents a rich tapestry of academic and research content, meticulously organized and ripe for exploration.

## Project Overview

Our documentation is not just a static representation of the Crossref Public Dataset. The documentation automatically generates from the dataset's JSON files, ensuring that the structure of our site closely aligns with the dataset's JSON schema. This approach makes it significantly easier for users to understand and explore the dataset's intricacies.

The core of our documentation's efficiency lies in the adoption of online algorithms for statistics collection. Utilizing techniques inspired by the principles of online algorithms ([Online algorithm](https://en.wikipedia.org/wiki/Online_algorithm), [OnlineStats.jl](https://joshday.github.io/OnlineStats.jl/stable/)), we achieve fast computation times (O(N) complexity) and minimal memory usage (O(1)). However, it's important to understand that while this method enhances the performance of our data processing, it inherently limits the scope of the statistics we can provide. The statistics presented are designed to give a quick, yet insightful look into the dataset, focusing on highlighting key trends and patterns without delving into exhaustive detail.

A unique aspect of our project is its commitment to transparency about the dataset's quality. One of our primary objectives is to illuminate the dataset's imperfections, such as incomplete entries, inconsistencies in data types, or spelling errors. This transparency is crucial for researchers and academics, providing them with a realistic understanding of the dataset's reliability and areas where caution is necessary.

We also enrich the documentation with examples of data aggregations that resemble the essence of queries like this:
<div class="grid" markdown>

```sql title="Type Distribution Among Items in the Dataset"
SELECT Type, COUNT(*) 
FROM items 
GROUP BY Type 
ORDER BY COUNT(*);
```

| **Row** | **Value**<br>`String` | **Count**<br>`Int64` |
|--------:|----------------------:|---------------------:|
| **1**   | journal-article       | 99 408 771           |
| **2**   | book-chapter          | 19 488 325           |
| **3**   | proceedings-article   | 7 647 156            |
| ...     | ...                   | ...                  |

</div>

These examples are tailored to showcase the distribution and frequency of various attributes within the dataset. However, it's noteworthy that our statistical accuracy is guaranteed only for attributes with fewer than 1000 unique values. For attributes exceeding this threshold, we provide a snapshot that, while informative, may not capture the complete picture. This limitation is in place to balance between offering meaningful insights and maintaining computational efficiency.

In summary, our documentation aims to offer a user-friendly, insightful, and honest look into the Crossref Public Dataset. By automatically generating content that reflects the dataset's structure, employing efficient statistical methods, and openly addressing data quality issues, we strive to support the scholarly community in making the most out of this vast resource.

## Disclaimer

!!! warning "This document is not official Crossref documentation"
This documentation is unofficial and not affiliated with Crossref. It's a community-driven project aimed at enhancing accessibility to the Crossref public dataset. While we strive for accuracy, the documentation may contain inaccuracies or errors and is subject to updates.

## Contributions

We highly value your input and encourage you to share your feedback and contributions! If you come across any inaccuracies, have suggestions for enhancements, or wish to contribute content, your participation is greatly appreciated.

### How to Contribute:

- **GitHub Issues and Pull Requests:** For direct contributions to the documentation, such as correcting errors, adding examples, or improving explanations, please visit our GitHub repository at [crossref-monitoring](https://github.com/LexaLutyi/crossref-monitoring). You can open an issue to discuss potential changes or submit a pull request with your improvements.

- **Email:** If you prefer to provide feedback privately or have inquiries that you would like to discuss directly, feel free to reach out via email at [samarin_aleksei@icloud.com](mailto:samarin_aleksei@icloud.com).

Whether it's through GitHub or email, your feedback is crucial to enhancing the quality and accuracy of our documentation. We look forward to hearing from you and working together to make this resource better for everyone.


---

We hope this documentation serves as a valuable resource for your research and exploration of the Crossref dataset. Happy exploring!
