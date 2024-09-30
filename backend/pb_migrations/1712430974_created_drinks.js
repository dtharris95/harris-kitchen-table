/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "ofhspx8qr4l9ib8",
    "created": "2024-04-06 19:16:14.261Z",
    "updated": "2024-04-06 19:16:14.261Z",
    "name": "drinks",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "6t4sxbvw",
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
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("ofhspx8qr4l9ib8");

  return dao.deleteCollection(collection);
})
