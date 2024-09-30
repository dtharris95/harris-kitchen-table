/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "gpfk7i7dz16dukr",
    "created": "2024-08-28 15:12:10.686Z",
    "updated": "2024-08-28 15:12:10.686Z",
    "name": "menu_subheadings",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "gptpj0eg",
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
  const collection = dao.findCollectionByNameOrId("gpfk7i7dz16dukr");

  return dao.deleteCollection(collection);
})
