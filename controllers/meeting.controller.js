const { Router } = require('express');
const meetingService = require('../services/meeting.service');

const router = Router();

router.get('/:id', async (req, res) => {
    // TODO: return business details.
    res.send('business');
});

module.exports = router;