
exports.update_client = function(data, callback){

  const client = data.client;
  
  client.getAnswer('rings').then( (rings) => {
    console.log(client.name, " now has ", rings, " rings");
  })

  callback(null, {});
}

