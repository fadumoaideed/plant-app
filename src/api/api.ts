fetch('http://localhost:3001/plants')
  .then((res) => res.json())
  .then((result) => {
    // we received our list of posts
    console.log(result);
  });
