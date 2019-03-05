exports.success = (res, entity, status) => {
  if (entity) {
    res.status(status || 200).json(entity)
  }
  return null
}
