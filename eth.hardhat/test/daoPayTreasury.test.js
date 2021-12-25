const { expect } = require("chai");
const { ethers } = require("hardhat");



var factoryAddr = process.env.DAOPAYTREASURY;
var toAddr = process.env.ETH_W2;
var ownerAddr = process.env.ETH_W1;


let DaoPayTreasury;
let wkStreamAddr, engAddr;
let res, res2, id, description, recipient, value, approved, paid;
let dtoken, daoBal;
let dw, engDw;
let wkName, ownerStr, pendingReq;
let totalReq, pendingBal, totalBal;

describe("DaoPayTreasury", function () {
  it("Should return the new DaoPayTreasury with 2 workstreams", async function () {
    //create a factory and deploy
    const DaoPayTreasury = await ethers.getContractFactory("DaoPayTreasury");
    dpTreasury = await DaoPayTreasury.deploy(1000);
    await dpTreasury.deployed();

    //create 2 new workstream
    var newWorkstream = await dpTreasury.createDaoWorkstream("BizDev", toAddr);
    await newWorkstream.wait();
    newWorkstream = await dpTreasury.createDaoWorkstream("Engineering", toAddr);
    await newWorkstream.wait();
    const addr = await dpTreasury.getDaoWorkstreams();
    wkStreamAddr = addr[0].toString();
    engAddr = addr[1].toString();
  });

  it("Token and approvals for 2 workstreams", async function () {
    //get token
    const tokAddr = await dpTreasury.getDaoToken();
    const DaoToken = await ethers.getContractFactory("DAOToken");
    dtoken = await DaoToken.attach(tokAddr.toString());
    daoBal = await dtoken.balanceOf(ownerAddr);
    expect(await dtoken.balanceOf(ownerAddr)).to.equal("1000");
    res = await dpTreasury.getDaoTokenOwnerBalance();
    console.log("daobal ", res[0], res[1]);

    //approve balance for workstream
    daoBal = await dtoken.approve(wkStreamAddr,1000);
    expect(await dtoken.allowance(ownerAddr, wkStreamAddr)).to.equal("1000");
    daoBal = await dtoken.approve(engAddr,1000);
    expect(await dtoken.allowance(ownerAddr, engAddr)).to.equal("1000");
    daoBal = await dtoken.approve(factoryAddr,1000);
    expect(await dtoken.allowance(ownerAddr, factoryAddr)).to.equal("1000");
  });

  it("Validate 2 workstreams", async function () {
    //attach to workstream
    const [owner, addr1, addr2] = await ethers.getSigners();
    const DaoWorkstream = await ethers.getContractFactory("DaoWorkstream");

    dw = await DaoWorkstream.attach(wkStreamAddr);
    expect(await dw.getWorkstreamName()).to.equal("BizDev");
    expect(await dw.getRequestLength()).to.equal("0");

    engDw = await DaoWorkstream.attach(engAddr);
    expect(await engDw.getWorkstreamName()).to.equal("Engineering");
    expect(await engDw.getRequestLength()).to.equal("0");

    res2 = await dw.getSummary();
    wkName = res2[0].toString(); ownerStr = res2[1].toString(); pendingReq = res2[2].toString();
    totalReq = res2[3].toString(); pendingBal = res2[4].toString(); totalBal = res2[5].toString();
    expect(wkName).to.equal("BizDev");
    expect(ownerStr).to.equal(toAddr);
    expect(pendingReq).to.equal("0");
    expect(totalReq).to.equal("0");
    expect(pendingBal).to.equal("0");
    expect(totalBal).to.equal("0");
});

    //create 2 new requests
  it("Create 2 requests on bizdev", async function () {
    res = await dw.createRequest("buy a car", "5", "0xe495cC8F3e4414319f09c770D0a1A43D8Ae4801f");
    expect(await dw.getRequestLength()).to.equal("1");
    res = await dw.createRequest("buy a punk", "7", "0xe495cC8F3e4414319f09c770D0a1A43D8Ae4801f");
    expect(await dw.getRequestLength()).to.equal("2");

    //pay both request
  //  (id, description, recipient, value, approved, paid) =
    res = await dw.getRequest(0);
    id = res[0].toString(); description = res[1].toString(); recipient = res[2].toString();
    value = res[3].toString(); approved = res[4].toString(); paid = res[5].toString();
    expect(approved).to.equal("false");
    expect(description).to.equal("buy a car");
    expect(paid).to.equal("false");
    expect(value).to.equal("5");

    res = await dw.getRequest(1);
    id = res[0].toString(); description = res[1].toString(); recipient = res[2].toString();
    value = res[3].toString(); approved = res[4].toString(); paid = res[4].toString();
    expect(approved).to.equal("false");
    expect(description).to.equal("buy a punk");
    expect(paid).to.equal("false");
    expect(value).to.equal("7");
  });

  it("Check balances", async function () {
    expect(await dw.totalBalance()).to.equal("12");
    expect(await dw.pendingBalance()).to.equal("12");
    expect(await dw.pendingRequestCount()).to.equal("2");
  });

  it("Approve and pay requests - bizdev", async function () {
    res = await dw.approveRequest(0);
    res = await dw.payRequest(0);
    //expect(res[0]).to.equal("true");
    res = await dw.getRequest(0);
    id = res[0].toString(); description = res[1].toString(); recipient = res[2].toString();
    value = res[3].toString(); approved = res[4].toString(); paid = res[4].toString();
    dpTreasury.payContributor(recipient, value);
    expect(approved).to.equal("true");
    expect(paid).to.equal("true");
    daoBal = await dtoken.balanceOf(ownerAddr);
    expect(await dtoken.balanceOf(ownerAddr)).to.equal("995");
    //console.log("dao bal is ", daoBal.toString());
  });
  it("Check balances after adding a new request", async function () {
    res = await dw.createRequest("buy a house", "1", "0xe495cC8F3e4414319f09c770D0a1A43D8Ae4801f");
    expect(await dw.getRequestLength()).to.equal("3");

    expect(await dw.totalBalance()).to.equal("13");
    expect(await dw.pendingBalance()).to.equal("8");
    expect(await dw.pendingRequestCount()).to.equal("2");
  });
  it("Check balances after adding a new request - engg", async function () {
    res = await engDw.createRequest("buy google", "9", "0xe495cC8F3e4414319f09c770D0a1A43D8Ae4801f");
    expect(await engDw.getRequestLength()).to.equal("1");

    expect(await engDw.totalBalance()).to.equal("9");
    expect(await engDw.pendingBalance()).to.equal("9");
    expect(await engDw.pendingRequestCount()).to.equal("1");
  });
  it("approve and pay request - engg", async function () {
    res = await engDw.approveRequest(0);
    res = await engDw.payRequest(0);
    res = await engDw.getRequest(0);
    id = res[0].toString(); description = res[1].toString(); recipient = res[2].toString();
    value = res[3].toString(); approved = res[4].toString(); paid = res[4].toString();
    expect(approved).to.equal("true");
    expect(paid).to.equal("true");
    daoBal = await dtoken.balanceOf(ownerAddr);
    expect(await dtoken.balanceOf(ownerAddr)).to.equal("986");
  });
});
