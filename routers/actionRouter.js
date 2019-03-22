const express = require("express");

const Actions = require('../data/helpers/projectModel.js')

const router = express.Router();


// | Field       | Data Type | Metadata                                                                                         |
// | ----------- | --------- | ------------------------------------------------------------------------------------------------ |
// | id          | number    | no need to provide it when creating posts, the database will automatically generate it.          |
// | project_id  | number    | required, must be the id of an existing project.                                                 |
// | description | string    | up to 128 characters long, required.                                                             |
// | notes       | string    | no size limit, required. Used to record additional notes or requirements to complete the action. |
// | completed   | boolean   | used to indicate if the action has been completed, not required                                  |

// // Crud
// router.post();

// // cRud
// router.get();

// // crUd
// router.put();

// // cruD
// router.delete();

module.exports = router;