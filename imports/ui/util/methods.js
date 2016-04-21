// XXX: I think we are/should update ValidatedMethod to do this
const callMethod = (method, args, done) => {
  try {
    method.call(args, done);
  } catch (error) {
    done(error);
  }
};

export { callMethod };
