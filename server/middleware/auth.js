import jwt from 'jsonwebtoken';

const auth = async (req, res, next) => {
  try {
    // GoogleOAuth
    const token = req.headers.authorization.split(' ')[1];
    const isCostumAth = token.length < 500; 
    
    let decodedData;

    if(token && isCostumAth) {
      decodedData = jwt.verify(token, 'test');

      req.userId = decodedData?.id;
    }else{
      decodedData = jwt.decode(token);

      req.userId = decodedData?.sub;
    }
    next();
  } catch (error) {
    console.log(error);
  }
}

export default auth;
