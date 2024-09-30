/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("vui31zamx2jlx6q");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "vui31zamx2jlx6q",
    "created": "2024-08-28 15:14:15.571Z",
    "updated": "2024-08-28 15:14:15.571Z",
    "name": "contact_subheaders",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ykocu2ux",
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
