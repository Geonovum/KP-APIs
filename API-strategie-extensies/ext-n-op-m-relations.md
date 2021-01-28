## Many-to-many relations ##

Below we see a typical example of a many-to-many relation. Books can be written by one or more authors. 

```json
GET /books

[
    {
        "self": "/books/1",
        "title": "Title 1",
        "authors": ["/authors/1", "/authors/2"]
    },
    {
        "self": "/books/2",
        "title": "Title 2",
        "authors": ["/authors/2"]
    }
]
```
And, vice versa, authors can have written zero or more books. In this case author 3 has not yet published a book.

```json
GET /authors

[
    {
        "self": "/authors/1",
        "name": "Name 1",
        "books": ["/books/1"]
    },
    {
        "self": "/authors/2",
        "name": "Name 2",
        "books": ["/books/1", "/books/2"]
    },
    {
        "self": "/authors/3",
        "name": "Name 3",
        "books": []
    },
]
```

If we want to include author 3 as a co-author of book 1, we have to perform two PATCH operations. 

```json
PATCH /books/1

{
    "authors": ["/authors/1", "/authors/2", "/authors/3"]
}

PATCH /authors/3

{
    "books": ["/books/1"]
}
```

However, it is not desirable to have two separate patch operations that are not part of a save transaction. Fortunately there is a way to solve this problem by introducing an extra resource which handles the relationship between books and authors, see the `/books-authors` resource below. It can be compared with a cross table as used in relational databases.

In the example given below, we go back to the situation before we excecuted the two patch operations.

```json
GET /books-authors

[
    {
        "self": "/books-authors/1",
        "book": "/books/1",
        "author": "/authors/1"
    },
    {
        "self": "/books-authors/2",
        "book": "/books/1",
        "author": "/authors/2"
    },
    {
        "self": "/books-authors/3",
        "book": "/books/2",
        "author": "/authors/2"
    }
]
```
With this new `/books-authors` resource it is easy to link author 3 to book 1 in one transaction.

```
POST /books-authors

{
    "self": "/books-authors/1",
    "book": "/books/1",
    "author": "/authors/3"
}
```

Another advantage is that the semantics directly relate to the CRUD-model of REST:
- By using `POST`, we _create_ a new relation.
- By using `DELETE`, we _delete_ an existing relation.

Otherwise, we would have used `PATCH` for both creating and deleting relations between books and authors which is less explicit and clean.


<div class="rule" id="api-99">
  <p class="rulelab"><strong>API-99</strong>: If there is a many-to-many relation between resources <code>/{R1}</code> and <code>/{R2}</code>, then use a cross resource <code>/{R1}-{R2}</code> for handling the relations between them.</p>
</div>
