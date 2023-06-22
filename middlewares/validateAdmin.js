const validateAdmin = (req, res, next) => {
  try {
    const { user } = req;
    if (user.role != "admin") {
      const error = new Error("Credenciales chucu no sos admin");
      error.status = 400;
      throw error;
    }
    next();
  } catch (error) {
    next(error);
  }
};

export default validateAdmin