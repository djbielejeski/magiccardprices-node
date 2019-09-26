const service = module.exports;

service.addOrUpdateSingle = (model, data) => {
  return new Promise((resolve, reject) => {
    const id = data._id ? data._id.toObjectId() : null;

    if (id) {
      // Update
      model.findByIdAndUpdate(id, data,{ new: true },function (error, item) {
          if (error) {
            return reject(error);
          }

          return resolve(item);
        });
    }
    else {
      // Create
      model.create(data, function(error, item) {
        if (error) {
          return reject(error);
        }

        return resolve(item);
      });
    }
  });
};
