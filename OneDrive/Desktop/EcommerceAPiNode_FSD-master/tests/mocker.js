function mockResponse() {
  const res = {};//req and response are the plain javascript object
  res.json = jest.fn().mockReturnValue(res);//jest.fn will mke a some sample random fxn,response will return   the response object from category.controller
  res.status = jest.fn().mockReturnValue(res);
  res.send = jest.fn().mockReturnValue(res);
  return res;
}

function mockRequest() {
  const req = {};
  req.body = jest.fn().mockReturnValue(req);
  req.params = jest.fn().mockReturnValue(req);
  return req;
}

module.exports = {
  mockRequest,
  mockResponse
}