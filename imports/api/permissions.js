// check that the userId specified owns the documents
const ownsDocument = (userId, doc) => doc && doc.userId === userId;

export { ownsDocument };
