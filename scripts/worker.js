function multiply(a, b){
    return a*b
}

// self.onmessage = function(event){
//     console.log('hi');
//     setTimeout(()=>{
//        self.postMessage(`Meaasage from worker ${event.data} ${multiply(2,4)}`)
//     }, 3000)
// }

const ports = []
self.onconnect = function(event){
  const port = event.ports[0]
  ports.push(port)
  port.onmessage = function(e){
    for(const singlePort of ports){
        setTimeout(()=>{
            singlePort.postMessage(`Meaasage from worker port ${e.data}`)
         }, 3000)
    }
  }
}