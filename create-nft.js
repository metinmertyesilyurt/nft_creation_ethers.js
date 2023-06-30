const { ethers, ContractFactory } = require("ethers")
require("dotenv").config()
const fs = require("fs")

const abi = JSON.parse(fs.readFileSync("nftabi.json").toString())
const bytecode = JSON.parse(fs.readFileSync("nftbytcode.json").toString())

const provider = new ethers.EtherscanProvider(
  "matic-matic",
  process.env.ETHERSCAN_API
)

const signer = new ethers.Wallet(process.env.PRIVATE_KEY, provider)
const addressMinter = signer.address

const main = async () => {
  const gasp0 = await (await provider.getFeeData()).gasPrice

  const options = {
    gasLimit: 3000000,
    gasPrice: gasp0,
  }
  const factory = new ethers.ContractFactory(abi, bytecode.object, signer)
  try {
    const contract = await (
      await factory.deploy(
        "MyNFT",
        "MNFT",
        addressMinter,
        1,
        "", // image link
        options
      )
    ).waitForDeployment()
  } catch (error) {
    console.error("Error deploying contract:", error)
  }
}

main()
