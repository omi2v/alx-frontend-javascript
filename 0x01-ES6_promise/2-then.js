export default functio handleResponseFromAPI(promise) {
  promise.then(response => {
    return { status: 200, body: "success" };
  }).catch(error => {
    console.error(error);
    return new Error();
  });
}

