const { asyncHandler } = require('express-async-handler')

const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Get Goals' })
})

const setGoals = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400)
    throw new Error('Please add a Text')
  }
  res.status(200).json({ message: 'Set Goals' })
})

const updateGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update goal ${req.params.id}` })
})

const deleteGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete  goal ${req.params.id}` })
})

module.exports = {
  getGoals,
  setGoals,
  updateGoals,
  deleteGoals,
}
