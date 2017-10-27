let axios = require('axios');
let SOCISS_API = 'http://127.0.0.1:1337';

module.exports = {
  getCourseByCode : getCourseByCode
};

/**
* @name getCourse
* @description
*
* @param  {object} req HTTP Request
* @param  {object} res HTTP Response
* @return {object}     Sociss course object.
*/
function getCourseByCode(req, res) {
  let authorization_header = req.headers['authorization'];

  let _configs = {
    method : 'get',
    url : SOCISS_API + `/timeline/course/${req.params.courseCode}`,
    headers: { 'Authorization': authorization_header }
  };

  axios(_configs)
  .then(response => {
    res.render('course', {
      timeline : response.data,
      course : response.data.course
    });
  })
  .catch(error => {
    res.status(500).send(error);
  });
}
