// this will connect to eth blockchain
var web3 = new Web3(Web3.givenProvider); 

var instance;
var user; 
var contractAddres = "0x9fbB81F918Fb630CF7F46abcE10F13Fb2F5A72b4";

$(document).ready(function(){
    // Here we start to working on metamask and web3 connection
    // For all web3 apps (dapps) if we wanna use MetaMas we need to call Metamask enable function, it will prompt the user to allow our website to use Metamask acc
    // when the user accept then we call .then() function i callback function that will give us account
    // in almost every case, our acc in MM always have 1 single addres, almost always accounts[0]
    // abi - specification what our contract does,koristi se da library zna what functions are available in the contract, what params they take, 
    //       what they expecting to retrurn, 
    // {} - dodatne opcije, nisu obavezne
    window.ethereum.enable().then(function(accounts){
        instance = new web3.eth.Contract(abi, contractAddres, {from: accounts[0]});
        user = accounts[0];

        console.log(instance);

        //instance.events.Birth().on('data', function(event)

    })
})

function createCat() { 
    var dnaStr = getDna(); 
    instance.methods.createKittyGen0(dnaStr).send({}, function(error, txHash){
        if(error)
            console.log(error);
        else
            console.log(txHash);
    })
}