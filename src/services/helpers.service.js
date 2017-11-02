export const to = window.to = (promise) => {
  return promise.then(result => [null, result]).catch(err => [err, null])
}
