/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "av5ctxi8e9ox2up",
    "created": "2024-09-15 14:33:21.238Z",
    "updated": "2024-09-15 14:33:21.238Z",
    "name": "homepage",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "wdwstlcf",
        "name": "mainHeading",
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
        "id": "hfztueww",
        "name": "subHeadings",
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
        "id": "loulvlqa",
        "name": "description",
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
  const collection = dao.findCollectionByNameOrId("av5ctxi8e9ox2up");

  return dao.deleteCollection(collection);
})
