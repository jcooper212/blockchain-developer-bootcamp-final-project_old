const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());


const compiledFactory = require('../../eth/build/contracts/DefiWallieFactory.json');
//const compiledWallie = require('../../eth/build/contracts/DefiWallie.json');

let accounts;
let factory;
let wallieAddress;
let wallie;
let manager;

var comptroller = '0x3d9819210a31b4961b30ef54be2aed79b9c9cd3b'; //comptroller
var ceth = '0x4ddc2d193948926d02f9b1fe9e1daa0718270ed5';  //ceth


beforeEach(async() =>{
  console.log("create factory");
  accounts = await web3.eth.getAccounts();
  factory = await new web3.eth.Contract(JSON.parse(compiledFactory.abi))
    .deploy({data: compiledFactory.bytecode,
      arguments: comptroller, ceth})
    .send({from:accounts[0], gas:'1000000'});

   manager = await factory.methods.owner().call();
   assert.ok(factory.options.address);
   it("first simple test", async function () {
     expect(await this.testContract.owner()).comptroller().to.equal(comptroller);
   });
console.log("owner ", manager);

/***
  await factory.methods.createWallie("Wallie_1").send({
    from: accounts[0],
    gas: '1000000'
  });

  const addrs = await factory.methods.getOwnerWallies().call();
  wallieAddress = addrs[0];

  wallie = await new web3.eth.Contract(
    JSON.parse(DefiWallie.abi), wallieAddress);

    describe('Wallies', () => {
      it('deploy a wallie', () => {
        assert.ok(factory.options.address);
      });
    });
    **/
});
