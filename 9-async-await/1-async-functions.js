// after introduction of promisses we started using .then
fetchCurrentUser()
  .then(function onUser(user) {
    return Promise.all([
      fetchArchivedOrders(user.id),
      fetchCurrentOrders(user.id)
    ])
  });

// then after intro of generators and iterators we mvoed to 
// yield but this requried external libraries.
runner(function *main(){
  var user = yield fetchCurrentUser();

  var [ archivedOrders, currentOrders ] =
    yield Promise.all([
      fetchArchivedOrders( user.id ),
      fetchCurrentOrders( user.id )
    ])
  
  // ..
});

// finally we got async await
async function main() {
  var user = await fetchCurrentUser();

  var [ archivedOrders, currentOrders ] = await Promise.all([
    fetchArchivedOrders( user.id ),
    fetchCurrentOrders( user.id )
  ])

  // ..
}