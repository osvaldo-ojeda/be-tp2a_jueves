const logUrlMethod = (req, res, next) => {
  console.log("Url", req.url);
  console.log("Method", req.method);
  next();
};


export default logUrlMethod