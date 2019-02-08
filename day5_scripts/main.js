
exports.update_client = async function(data, callback){

  const client = data.client;
  
  const rings = await client.getAnswer('rings');

  console.log(client.name, " now has ", rings, " rings");

  callback(null, {});
}

