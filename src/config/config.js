import avatar from '../assets/images/avatar.png';

export const config = {
    // SERVER_URL: "http://localhost:8001",
    SERVER_URL: "http://194.233.84.190:8001",
    FAKE_TWITTER_ID: "@Dream",
    FAKE_TWITTER_PHOTO: avatar,
    FAKE_TWITTER_HISTORY: [
        {
            date: "2023-02-11T00:00:00",
            action: "Tweet with hashtag #bernardboys"
        },
        {
            date: "2023-02-11T00:00:00",
            action: "Tweet with hashtag #bernardboys"
        },
        {
            date: "2023-02-12T00:00:00",
            action: "Tweet with hashtag #bernardboys"
        },
        {
            date: "2023-02-12T00:00:00",
            action: "Tweet with hashtag #bernardboys"
        },
        {
            date: "2023-02-12T00:00:00",
            action: "Tweet with hashtag #bernardboys"
        },
        {
            date: "2023-02-13T00:00:00",
            action: "Tweet with hashtag #bernardboys"
        },
    ],
    BLOCKFROST_API_URL: "https://cardano-preprod.blockfrost.io/api/v0/",
    // BLOCKFROST_API_URL: "https://cardano-mainnet.blockfrost.io/api/v0/",
    BLOCKFROST_API_KEY: "preprodZ13VI826tyUZZQVvcM00I9mCd90Rikdh",
    // BLOCKFROST_API_KEY: "mainnetBarCr4bVgOBTWDFhRsmwc3VNdpSlSARz",
    CARDANO_NETWORK: 0,
    // CADANO_NETWORK: 1,
    PREVIEW_OR_PREPROD: "Preprod",
    CARDANOSCAN_URL: "https://preprod.cardanoscan.io/",
    // CARDANOSCAN_URL: "https://explorer.cardano.org/en",
    MNEMONIC: "leg online alien fix slim code rebel pulp marine saddle member grant roast athlete credit dance uncle suspect welcome alter victory unfold mom shadow",
    OWNER_WALLET: "addr_test1qzy3ug6zaegwtgvpagsz8n3z4gwzlmxda9kmph5j3afdklu0jcsx8c2k3343fsa8cz4ca6drtdvyejuxaytc53ysqlnsh59a44",
    USAGE_FEE: 1.5,
    OWNER_PROFIT: 1,
}