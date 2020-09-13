---
description: An overview of the key components in the Mapeo core infrastructure.
---

# Architecture Overview

Behind the scenes of the user interfaces for working with mapping and monitoring data, you'll find Mapeo's core infrastructure. 

**Schema**

1. **Observation.** Mapeo extends the OpenStreetMap specification to add 'Observations' -- a new data type that is like a node or point, but with extra metadata and media. 
2. **Field.** Called a 'question' \(ODK\) or 'tag' \(OSM\), a Field is how we structure metadata about Observations and OSM Elements. 
3. **Preset.** Called a 'Category' in the Mapeo interface, but in code we call this a 'preset.' This type defines a set of Fields and an Icon.
4. **Filter.** An expression that can be applied on the values in one or more Field across a set of observations. 

**Database** 

KappaDB is one of the fundamental primitives of Mapeo Core that handles indexing of data that isn't media \(i.e., it does not handle images\).KappaDB is a flexible database for peer-to-peer applications that we released in 2017, and is considered stable. If you haven't yet, go ahead and [try the workshop](https://github.com/kappa-db/workshop) to familiarize yourself with how it works.

**Replication**

Mulitfeed, hypercore, how dat works link. 

**Media**

Some words about blob store.

![](../.gitbook/assets/frame-1.png)

