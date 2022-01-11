// https://eth-ropsten.alchemyapi.io/v2/ma7EafF9YILi6eYiLdoxaKa2NtOzLnbN

require('@nomiclabs/hardhat-waffle')

module.exports = {
    solidity: '0.8.0',
    networks: {
        ropsten: {
            url:'https://eth-ropsten.alchemyapi.io/v2/ma7EafF9YILi6eYiLdoxaKa2NtOzLnbN',
            accounts:['cc8d968485edf5574fab9e1581a73dd185e2b45e568f7259a13782cdf669aeaa']
        }
    }
}