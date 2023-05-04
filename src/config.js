const blockfrostApiKey = {
    0: "testnetKQbRyYNFoszeZMEir4duRzAQ1gA71SbI", // testnet
    1: "mainnetIbYG7wECGWgG87xegwxQAGJfAKhh5C4r" // mainnet
}

export default blockfrostApiKey;

/* development */
export const apiKey = process.env.REACT_APP_BLOCKFROST_API_KEY;
export const cardanoUrl = process.env.REACT_APP_BLOCKFROST_API_URL;

export const urls = {
  root: "http://cardano-marketplace.io/",
  cardanoscan: process.env.REACT_APP_CARDANOSCAN_URL,
  ipfs: "https://infura-ipfs.io/ipfs/"
}
