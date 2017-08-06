# RESTful API
Created by following the teamtreehouse "Rest API with Express" course.
The API uses node/express with mongo/mongoose as db.

The plan now is to create a front end with React, and possibly an android app.


The API allows users to submit questions, submit answers for each question and vote individual answers up or down.

## How to use
To install, download the files and npm install the dependencies.
Start the app with "npm start".

Receive a list of question in JSON via a GET request to "/questions".

Ask a question with a POST request to "/questions".
For example:
```json
{
  "text": "Is this an example question?"
}
```
Will return
```json
{
  "__v": 0,
  "text": "Is this an example question?",
  "_id": "5918b607a428001866146411",
  "answers": [],
  "createdAt": "2017-05-14T19:54:47.625Z"
}
```

To continue this example, a get request to
"/questions/5918b607a428001866146411"
will return:
```json
{
  "_id": "5918b607a428001866146411",
  "text": "Is this an example question?",
  "__v": 0,
  "answers": [],
  "createdAt": "2017-05-14T19:54:47.625Z"
}
`

A POST request to
"/questions/5918b607a428001866146411/answers/"
which contains:
```json
{
  "text": "Yes it is!"
}
```

Will produce:
```json
{
  "_id": "5918b607a428001866146411",
  "text": "Is this an example question?",
  "__v": 1,
  "answers": [
    {
      "text": "Yes it is!",
      "_id": "5918b76ca428001866146412",
      "votes": 0,
      "updatedAt": "2017-05-14T20:00:44.425Z",
      "createdAt": "2017-05-14T20:00:44.425Z"
    }
  ],
  "createdAt": "2017-05-14T19:54:47.625Z"
}
```

A PUT request to
"/questions/5918b607a428001866146411/answers/5918b7f1a428001866146413"
with:
```json
{
  "text": "Yep!"
}
```
Will return:
```json
{
  "_id": "5918b607a428001866146411",
  "text": "Is this an example question?",
  "__v": 3,
  "answers": [
    {
      "text": "Yep!",
      "_id": "5918b7f1a428001866146413",
      "votes": 0,
      "updatedAt": "2017-05-14T20:05:59.326Z",
      "createdAt": "2017-05-14T20:02:57.026Z"
    }
  ],
  "createdAt": "2017-05-14T19:54:47.625Z"
}
```

Finally, a DELETE request to
"/questions/5918b607a428001866146411/answers/5918b7f1a428001866146413"
will return
```json
{
  "_id": "5918b607a428001866146411",
  "text": "Is this an example question?",
  "__v": 4,
  "answers": [],
  "createdAt": "2017-05-14T19:54:47.625Z"
}
```
