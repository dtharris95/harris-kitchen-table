/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("h9f66bdrv302lvw");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "h9f66bdrv302lvw",
    "created": "2024-08-28 15:13:42.856Z",
    "updated": "2024-08-28 18:35:40.870Z",
    "name": "home_subheaders",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "bx2jhhsf",
        "name": "headingName",
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
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
})
