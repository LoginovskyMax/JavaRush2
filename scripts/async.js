console.log(1);

Promise.resolve().then(() => console.log("1.1"));

setTimeout(() => {
    console.log(2);
}, 0);

Promise.resolve().then(() => console.log("3"));
Promise.resolve().then(() => console.log("5"));
Promise.resolve().then(() => console.log("6"));

console.log(4);

// const myPromise = new Promise((resolve, reject) => {
//       const isSuccess = false;

//       setTimeout(() => {
//         if (isSuccess) {
//           resolve("Data loaded!"); // Переход в Fulfilled
//        } else {
//           reject(new Error("Network Error")); // Переход в Rejected
//        }
//       }, 1000);
// });

function getUsers(){
    const usersPromise = new Promise((res, rej)=> {
          setTimeout(() => {
            // rej('errpor from posts')
            res({
              users: [
                'Alice','Petr'
            ]
           })
          }, 1000)
  
    })
    return usersPromise
}

async function getDataFromPromise(promise){
    try{
      const data = await promise()
      console.log('Промис завершился получаю данный');
      console.log(data);
    } catch(err){
        console.log(err);
    }
}

// getDataFromPromise(getUsers)

function getPosts(users){
    const postsPromise = new Promise((res, rej)=> {
        setTimeout(() => {
        if(users.length){
           res('Our posts')
        } else {
            rej('Error')
        }
        }, 2000);
    })
    return postsPromise
}

// Promise.all([getUsers(), getPosts([])])
//     .then(([users, posts]) => {
//         console.log(users);
//         console.log(posts);
//     })
//     .catch((err) => {
//         console.log(err);
//     })

// Promise.allSettled([getUsers(), getPosts([])])
//     .then(([users, posts]) => {
//         console.log(users);
//         console.log(posts);
//     })
//     .catch((err) => {
//         console.log(err);
//     })

// getUsers()
//    .then((data) => {
//       return getPosts(data.users)
//    })
//    .then((posts) => {
//     console.log(posts);
//    })
//    .catch((err) => {
//     console.log(err);
//    })
//    .finally(() => {
//     console.log('get posts function end');
//    })


// myPromise
//    .then((data) => {
//    console.log('promisss end success');
//    console.log(data);
// })
// .catch((err) => {
//    console.log(err.message);
// })
// .finally(()=>{
//     console.log('promiss end');
// })

const arrPromises = [getPosts(['alice']), getUsers()]
// console.log(arrPromises);

async function loadAll(){
//    for (let promis of arrPromises){
//     const answer = await promis
//     console.log(answer);
//    }

    for await (let promis of arrPromises){
      console.log(promis);
   }
}

// loadAll()

