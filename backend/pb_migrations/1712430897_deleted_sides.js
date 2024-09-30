/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("anjru4524xwqmyt");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "anjru4524xwqmyt",
    "created": "2024-04-06 19:06:03.983Z",
    "updated": "2024-04-06 19:06:03.983Z",
    "name": "sides",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ssl7lo0a",
        "name": "side1",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "couuadul",
        "name": "side2",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
})
