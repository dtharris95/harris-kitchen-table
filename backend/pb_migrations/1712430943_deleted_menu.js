/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("6p9uebl7m8kgf72");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "6p9uebl7m8kgf72",
    "created": "2024-04-06 19:15:18.264Z",
    "updated": "2024-04-06 19:15:18.264Z",
    "name": "menu",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "t6l6a4ow",
        "name": "field",
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
