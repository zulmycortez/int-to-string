const Number = require('./number')
const convert = require('./intToString')

postNumber = (req, res) => {
  const input = req.params.number
  const obj = new Number({ number: input })

  obj
    .save()
    .then(() => {
      return res.status(201).json({
        success: true,
        message: 'Number posted',
        string: convert.intToString(obj.number)
      })
    })
    .catch(error => {
      return res.status(500).json({
        error: error,
        message: 'Number did not post',
      })
    })
}

getNumbers = (req, res) => {
  Number.find({}, (error, number) => {
    if (error) {
      return res.status(400).json({ success: false, error: error })
    }
    return res.status(200).json({ success: true, data: number })
  })
  .catch(error => {
    return console.log(error)
  })
}

module.exports = {
  postNumber,
  getNumbers
}