const { Router } = require('express');
const meetingService = require('../services/meeting.service');

const router = Router();

router.get('/:id', async (req, res) => {
    // TODO: return business details.
    res.send('business');
});

module.exports = router;

// GET /meeting
router.get('/', async (req, res, next) => {
    let meetings
    try {
        meetings = await getMeetings();
    }
    catch (error) {
        next(error);
    }
    res.send(meetings);
});
// GET /meeting/:id
router.get('/:id', async (req, res, next) => {
    const id = req.params.id;
    let meeting;
    try {
        meeting = await getMeatingById(id);
        console.log("user " + meeting);
    }
    catch (error) {
        next(error);
    }
    res.send(meeting);
});
// POST /meeting
router.post('/', async (req, res) => {
    const newMeeting = req.body;
    try {
        await addUserMeeting(newMeeting.date,newMeeting.wheight);
        message: { 'success create new meeting' }
    }
    catch (err) {
        console.error(err);
    }
    res.send();
});
// PUT /meeting/:id

// DELETE /meeting/:id
router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    try {
        Users.findByIdAndDelete(id);
        console.log('success!')
    } catch (err) {
        console.error(err)
    }
    res.send();
})
