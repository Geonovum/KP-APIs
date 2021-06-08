# Many-to-many relations ##

## Introduction ##

Below, we see an example of a many-to-many relation between resources in a REST API. Books can have more than one author and authors can have published more than one book. 

```json
GET /books
```
Response:
```json
[
    {
        "self": "/books/1",
        "id": 1,
        "title": "Title 1",
        "authors": ["/authors/1", "/authors/2"]
    },
    {
        "self": "/books/2",
        "id": 2,
        "title": "Title 2",
        "authors": ["/authors/2"]
    }
]
```

Note: for readability we use the convention that the first forward slash `"/"` in the uri stands for `".../"`. For instance, `"/books/1"` stands for `".../books/1"` and this again stands for a complete filled in absolute uri like  `"https://mybooks.com/api/v1/books/1"`.

In the response given below, we see that author 3 has not yet published a book.

```
GET /authors
```
Response:
```json
[
    {
        "self": "/authors/1",
        "id": 1,
        "name": "Name 1",
        "books": ["/books/1"]
    },
    {
        "self": "/authors/2",
        "id": 2,
        "name": "Name 2",
        "books": ["books/1","/books/2"]
    },
    {
        "self": "/authors/3",
        "id": 3,
        "name": "Name 3",
        "books": []
    },
]
```

Now the publisher wants to add author 3 as co-author of book 1. 

This document outlines three possible solutions to achieve this. A first possible solution that may come to our mind is having the consumer application perform the following two PATCH operations. 

<!-- In the next section, we first dive info the case where safe synchronization can be assumed; thereafter we will outline the case where safe synchronization is not available.  -->

```json
PATCH /books/1
{
    "authors": ["/authors/1", "/authors/2", "/authors/3"]
}
```

```json
PATCH /authors/3
{
    "books": ["/books/1"]
}
```

However, this approach has the following disadvantages:
1. The problem of having the two resources synchronized has been laid down by the consumer application which makes the API less developer-friendly.
2. It is not desirable to have two separate patch operations that are not part of a save transaction. 

We can solve the first problem by making the API do the synchronization for you. For instance, when the first PATCH operation on the books resource is executed then the API updates the authors resource automatically such that the relation between the book resource and the author resource is synchronized.  It could also be the other way round, so when the book list in the authors resource is updated, than the API should take care that the book resource is synchronized as well.

_**Design Rule API-XX**: When two resources are in a many-to-many relation, make sure that both resources are synchronized automatically by the API._

It is not always possible to guarantee that the synchronization between the resources is safe. For instance, the related resources could be part of different API's or could be running on different servers.  When both the books and the authors resource live in the same API and share the same database than the API can synchronize the resources internally in a save way. However, when the two resources are part of two different API's that may also run on different machines and do not share the same database, than synchronization becomes more difficult.

In the next section, we first dive into the case where safe synchronization can be assumed.

## Related resources that can be safely synchronized ##

In this section we assume that the related resources can be safely synchronized. For instance the related resources are part of the same API and share the same database.

### Solution 1: use the PATCH operation

In this solution the consumer application sends the following PATCH operation for adding author 3 as co-author of book 1:

```json
PATCH /books/1
{
    "authors": ["/authors/1", "/authors/2", "/authors/3"]
}
```

As a side effect the API automatically updates the author resource.

```
GET /authors/3
```
Response:
```json
{
    "self": "/authors/3",
    "id": 3,
    "name": "Name 3",
    "books": ["/books/1"]
}
```


### Solution 2: use sub-resources

One can also manipulate the relations by using sub-resources. For instance, the PUT operation given below would be the analog version of the  PATCH operation given in solution 1 above.

Add an existing author to a book:

```
PUT /books/1/authors/3
```
Response:
```json
{
    "self": "/books/1",
    "id": 1,
    "title": "Title 1",
    "authors": ["/authors/1", "/authors/2", "/authors/3"]
}
```

In this approach, the request body of the PUT operations is empty. This is a special way to express that path id `3` at the end of the URL refers to the existing author 3 resource which is to be linked to the books resource.

Note that the PUT operation has a side-effect such that the authors resource is automatically synchronized:

```
GET /authors/3
```
Response:
```json
{
    "self": "/authors/3",
    "id": 3,
    "name": "Name 3",
    "books": ["/books/1"]
}
```

Another example: adding a new author to book 1.

```json
POST  /books/1/authors
{
    "name": "New author name",
}
```
Response:
```json
{
    "self": "/authors/4",
    "id": 4,
    "name": "New author name",
    "books": ["/books/1"]
}
```

The books resource should then be automatically synchronized:

```
GET /books/1
```
Response:
```json
{
    "self": "/books/1",
    "id": 1,
    "title": "Title 1",
    "authors": ["/authors/1", "/authors/2", "/authors/3", "/authors/4"]
}
```

In this approach, the sub-resources can also be accessed as top-level end-points:

```
GET  /authors/4
```
Response:
```json
{
    "self": "/authors/4",
    "id": 4,
    "name": "New name",
    "books": ["/books/1"]
}
```

The other way round, we can also add a book to an author. It is symmetric.
For adding an existing book to an author, the following operation is performed:
```
PUT /authors/4/books/1
```

In case a new book is added to an author:

```json
POST /authors/4/books
{
    "title": "New book title",
}
```
Response:
```json
{
    "self": "/books/3",
    "id": 3,
    "title": "New book title",
    "authors": ["/authors/4"]
}
```

<i>**Best Practice BP-XX**: When two resources `/r1` and `/r2` are in a many-to-many relation, and both the following two cases are satisfied,

- both resources can be safely synchronized without transaction problems (for instance when they are part of the same API running on the same machine), and 
- the relation does not have properties on its own, 

then use the one resource as a sub-resource of the other (related) resource, `/r1/{id}/r2`, and vice versa `/r2/{id}/r1` to manage the relationship.</i>


## Related resources that can not be safely synchronized ##

In the previous section we assumed that the related resources can be safely synchronized. Automated synchronization may work well when the two related resources are part of the same API, but when they are part of different API's or are located on different servers than there can be a transaction problem. 

### Solution 1: use multiple patch operations

This solution is similar to the first solution of the previous section. In this case the synchronization with the author resource resource is done by a second PATCH operation that is sent from the API that hosts the books resource to the other API that hosts the authors resource. It is assumed that this second PATCH operation is sent in an reliable way, for instance with some kind of resend (and deduplication) mechanism.

<!--
This problem may be tackled by the use of a reliable protocol to synchronize the resources that are spread over the network. For instance, the second PATCH operation of the example in the Introduction section must then be sent in a reliable way. So if the call fails the API should support some resend (and deduplication)  mechanism to ensure save delivery of the request message. In this is the case, we can still assume that the resources can be safely synchronized and the reader is referred to the previous section. -->


### Solution 2: use cross resources
However, what to do when there is no reliable messaging infrastructure at hand such that the resources can be  synchronized in a safe way? 

A possible solution is the introduction of an extra resource which handles the relationship between books and authors. We call it a cross-resource because it has similarities with the cross-table known from relational databases. However is not the intension to use the cross resource as a means to reveal the underlying database model. In this case the cross resource in merely used to manage the relationship in a central place for avoiding transaction problems.

See the `/books-authors` resource below (in this example we go back to the situation before we added author 3 as co-author of book 1).

```
GET /books-authors
```
Response:
```json
[
    {
        "self": "/books-authors/1",
        "id": 1,
        "book": "/books/1",
        "author": "/authors/1"
    },
    {
        "self": "/books-authors/2",
        "id": 2,
        "book": "/books/1",
        "author": "/authors/2"
    },
    {
        "self": "/books-authors/3",
        "id": 3,
        "book": "/books/2",
        "author": "/authors/2"
    }
]
```

With this new `/books-authors` resource it is easy to link author 3 to book 1 in one transaction by using the `POST` operation.

```json
POST /books-authors
{
    "book": "/books/1",
    "author": "/authors/3"
}
```
Response:
```json
{
    "self": "/books-authors/4",
    "id": 4,
    "book": "/books/1",
    "author": "/authors/3"
}
```

In the above examples the book and the author are related by using hyperlinks, but one could also use identifiers instead. For instance:

```json
POST /books-authors
{
    "book_id": 2,
    "author_id": 3
}
```
Response:
```json
[
    {
        "id": 1,
        "book_id": 1,
        "author_id": 1
    },
    {
        "id": 2,
        "book_id": 1,
        "author_id": 2
    },
    {
        "id": 3,
        "book_id": 2,
        "author_id": 2
    },
    {
        "id": 4,
        "book_id": 1,
        "author_id": 3
    },
    {
        "id": 5,
        "book_id": 2,
        "author_id": 3
    }
]
```


We can also now remove a relation in one transaction by using the `DELETE` operation. For instance:

```json
DELETE /books-authors/4
```

One can also delete multiple relations in one operation by using a query parameter. In the following request all relations involving book 1 are deleted. 

```json
DELETE /books-authors?book_id=1
```

In the above example, we assumed that the relation is modelled with id's and not with hyperlinks. In a situation with hyperlinks the multiple delete operation would look like this:

```json
DELETE /books-authors?book=%2Fbooks%2F1
```

In this case we need to use URL-encoding for the URL value in the query parameter to escape the slashes in the URL. So `%2Fbooks%2F1` is the URL encoding of `/books/1`.

Another advantage is that the semantics directly relate to the CRUD-model of REST:
- By using `POST`, we _create_ a new relation.
- By using `DELETE`, we _delete_ an existing relation.

<i>**Best Practice BP-XX**: If there is a many-to-many relation between resources `/r1` and `/r2`, and both resources can **not** be safely synchronized without transaction problems, then use a cross-resource `/r1-r2` for handling the relations between them.</i>

## Relations with properties

Relations can have properties of their own. For instance authors can have certain royalties on their books. In the example given below we have added the property "royalties" that expresses the percentage of the book sails that is paid to the author.

```
GET /books-authors/2
```
Response:
```json
[
    {
        "self": "/books-authors/2",
        "id": 2,
        "book": "/books/1",
        "author": "/authors/2",
        "royalties": "0.15"
    }
]
```

One can use a `PUT` or a `PATCH` operation for updating this field. In the example given below, the royalties for author 2 with respect to book 1 have been increased.

```json
PATCH /books-authors/2

{
    "royalties": "0.20"
}
```

Often one does not know in advance whether or not a relation needs to be extended with properties in the future. In that case, it is wise to model the relation as a cross-resource right away. 

<i>**Design Rule API-XX**: If there is a (many-to-many) relation between resources `/r1` and `/r2` and this relation has properties of its own, then use a cross-resource `/r1-r2` for handling the relations between them.</i>

<!--
To do:
- Many-to-many relations distributed over multiple API's.
-->