import {Promise} from 'es6-promise';

async function getTimeFromTheFutureAsync(msInFuture: number) {
  console.log("Started at " + (new Date().toLocaleString()));
  return new Promise<string>((resolve, reject) => {
    setTimeout(() => {
      resolve(new Date().toLocaleString());
    }, msInFuture)
  });
}

async function doWork() {

  // getTimeFromTheFuture().then((result) => {
  //   console.log("time from the future (now present) is: " + result);
  // });

  var result = await getTimeFromTheFutureAsync(5000);
  console.log(result);
}

doWork();
