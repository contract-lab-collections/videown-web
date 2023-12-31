import store from "./utils/store";

let defaultConfig = {  
  videoApiUrl: "/cmps",
  // videoApiUrl:"http://192.168.14.211:8081",
  apiUrl:'/vd',
  // apiUrl:'http://192.168.14.211:5001',
  // apiUrl: "/vd",
  // apiUrl:"http://www.videown.net/vd",
  contractAddress: "cXjLqWWG5HNHD5VkxFq7DWrC1TJz44MTLYU4DdJMtX2wsomRn", //"cXkTiNhkhh9hEZS45g3ZNRre1nYVza927yY6eDk9Qrte1rBZE",
  // nodeURL: "wss://testnet-rpc1.cess.cloud/ws/", //"ws://192.168.14.211:9944", //"ws://localhost:9944"
  // nodeURL:"wss://devnet-rpc.cess.cloud/ws/"
  nodeURL:"wss://testnet-rpc1.cess.cloud/ws/"
};

export default {
  sitename: "Videown",
  isUpgrading: false,
  videoApiUrl: getConfig("videoApiUrl"),
  apiUrl: getConfig("apiUrl"),
  contractAddress: getConfig("contractAddress"),
  wsnode: {
    nodeURL: getConfig("nodeURL"), //"ws://localhost:9944"
    keyringOption: { type: "sr25519", ss58Format: 42 },
  },
};
function getConfig(key) {
  let json = store.get("webconfig");
  if (!json) {
    return defaultConfig[key];
  }
  return json[key] || defaultConfig[key];
}
