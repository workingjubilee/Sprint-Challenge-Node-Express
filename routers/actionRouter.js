const express = require("express");

const Actions = require('../data/helpers/actionModel.js')

const router = express.Router();


// | Field       | Data Type | Metadata                                                                                         |
// | ----------- | --------- | ------------------------------------------------------------------------------------------------ |
// | id          | number    | no need to provide it when creating posts, the database will automatically generate it.          |
// | project_id  | number    | required, must be the id of an existing project.                                                 |
// | description | string    | up to 128 characters long, required.                                                             |
// | notes       | string    | no size limit, required. Used to record additional notes or requirements to complete the action. |
// | completed   | boolean   | used to indicate if the action has been completed, not required                                  |

// Crud
router.post('/', async (req, res) => {
  const { project_id } = req.body;
  const { description } = req.body; // 128 character limit
  const { notes } = req.body; // no size limit
  const { completed } = req.body || false;
  const action = { project_id, description, notes, completed };

  if ( !project_id || !description || !notes ) {
    res.status(400).send("Action needs project_id as integer and text for description and notes.\n You may include completed as a true or false.")
  } else {

    try {
      const newAction = await Actions.insert(action);
      res.status(200).json(newAction);

    } catch {
      res.status(500).send("Post request failed.")
    }

  };
});

// cRud
router.get('/:id', async (req,res) => {
  const { id } = req.params;

  try {
    const action = await Actions.get(id);
    res.status(200).json(action);
  } catch {
    res.status(500).send("Get request failed.")
  }

});

// crUd
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { project_id } = req.body;
  const { description } = req.body; // 128 character limit
  const { notes } = req.body; // no size limit
  const { completed } = req.body || false;
  const action = { project_id, description, notes, completed };

  if ( !project_id || !description || !notes ) {
    res.status(400).send("Action needs project_id as integer and text for description and notes.\n You may include completed as a true or false.")
  } else {

    try {
      const changedAction = await Actions.update(id, action);
      res.status(200).json(changedAction);

    } catch {
      res.status(500).send("Put request failed.")
    }

  };
});

// cruD
router.delete('/:id', async (req,res) => {
  const { id } = req.params;

  try {
    const deletedAction = await Actions.remove(id);

    if (deletedAction === 0) {
      res.status(404).send("Deletion target not found.")
    }
    else {
      res.status(200).json(deletedAction);
    }
    
  } catch {
    res.status(404).send("Deletion target not found.")
  }

});

module.exports = router;