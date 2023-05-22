# Introduction

This document provides rules for publishing geospatial data using Web APIs. Spatial data is 

> data that describes anything with spatial extent (i.e. size, shape or position). Spatial data is also known as location information. [[sdw-bp]]

Geospatial data is more specific in that it is explicitly located relative to the Earth. 

Geospatial data is 'special' data in the sense that it typically indicates the location of things using geometry. This geometry allows geospatial functions such as 'find only the things located within this area' but also requires specific ways of handling. There are international regulations and standards for geospatial data that need to be taken into account in certain cases.

<figure>
    <img alt="castle features shown on map with bounding box" src="media/boundingbox.png"/>
    <figcaption>The red bounding box acts as a filter to find only the castles located within this area</figcaption>
</figure>

The Geospatial Module provides rules for the structuring of geospatial payloads and for functions in APIs to handle geospatial data.
