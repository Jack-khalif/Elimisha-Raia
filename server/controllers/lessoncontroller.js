const Lesson = require('../models/Lesson');

const getLessonsByAge = async (req, res) => {
    try {
        const lessons = await Lesson.find({ ageRange: req.params.age });
        res.json(lessons);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { getLessonsByAge };
const getLessonById = async (req, res) => {
    try {
        const lesson = await Lesson.findById(req.params.id);
        if (!lesson) {
            return res.status(404).json({ message: 'Lesson not found' });
        }
        res.json(lesson);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};