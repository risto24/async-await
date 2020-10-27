const sampleResolve = (value) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(value * 2);
      // reject('test')
    }, 2000);
  })
};

const sampleFunction = async() => {
  const returnValue = await sampleResolve(10)
  .then((res) => {
    console.log(res);
  }).catch((err) => {
    console.log(err)
  });
  console.log(returnValue); 
};

sampleFunction();
