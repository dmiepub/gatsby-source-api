const axios = require(`axios`)
const httpExceptionHandler = require(`./http-exception-handler`)

/**
 * High-level function to coordinate fetching data from Data Api
 */
async function fetch({ site, verbose, typePrefix }) {

  let entities = []
  try {
    let res = await axios({
      method: `get`,
      url: `${site}`,
    })
    entities = res.data
  } catch (e) {
    httpExceptionHandler(e)
  }

  return entities
}
module.exports = fetch
