const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
  'proof reason weapon core talk whip lumber knee fan jeans iron tackle',
  'https://rinkeby.infura.io/mjulFzL41uCr2cl0dgPv'
)

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account', accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode, arguments: ['Hi there!'] })
    .send({ gas: '1000000', from: accounts[0] });

  console.log('Contract deployed to', result.options.address);
};
try {
  deploy();
}
catch (e) {
  console.log(e)
}


// const provider = new HDWalletProvider(
//   'call glow acoustic vintage front ring trade assist shuffle mimic volume reject',
//   'https://rinkeby.infura.io/orDImgKRzwNrVCDrAk5Q'
// );
// const web3 = new Web3(provider);
//
// const deploy = async () => {
//   const accounts = await web3.eth.getAccounts();
//
//   console.log('Attempting to deploy from account', accounts[0]);
//
//   const result = await new web3.eth.Contract(JSON.parse(interface))
//     .deploy({ data: bytecode, arguments: ['Hi there!'] })
//     .send({ gas: '1000000', from: accounts[0] });
//
//   console.log('Contract deployed to', result.options.address);
// };
// deploy();
