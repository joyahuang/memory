import jwt from "jsonwebtoken";
//middleware function: judge if a user has permission to do it
//if user want to like a post
// click the like button => auth middleware (NEXT) => like controller

const Auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const isCustomAuth = token.length < 500;
    let decodedData;

    if (token && isCustomAuth) {
      //if this token is our own token
      decodedData = jwt.verify(token, "test");
      console.log(decodedData);
      req.userId = decodedData?.id;
    } else {
      //if this token is google token
      decodedData = jwt.decode(token);
      req.userId = decodedData?.sub;
    }
    next();
  } catch (error) {
    console.error();
  }
};
export default Auth;
