class EasyHTTP {
  //make an http GET request
  async get(url) {
    try {
    } catch (err) {
      throw new Error(`Unable to get users ${err.message}`);
    }
  }

  async post(url, data1) {
    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data1)
      });
      const data = await res.json();
      return data;
    } catch (err) {}
  }
}
