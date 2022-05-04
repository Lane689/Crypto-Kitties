// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./IERC721.sol";
import "../node_modules/@openzeppelin/contracts/utils/math/SafeMath.sol";
import "..//node_modules/@openzeppelin/contracts/access/Ownable.sol"; 

  contract Kittycontract is IERC721, Ownable {
    
     using SafeMath for uint256;

    uint256 public constant LIMIT_GEN0_CAT = 10;
    string public TokenName = "KittyCoin";
    string public TokenSymbol = "KTC";
    uint256 TokenAmount;
    event Birth(address owner, uint256 newKittyID, uint256 momId, uint256 dadId, uint256 gens);

     mapping (uint256 => address) kittyIndexToOwner;   //owner of token
     mapping (address => uint256) ownerShipTokenCount; //token balance

     struct Kitty{
         uint256 gens; 
         uint64 birthTime;
         uint32 momId;
         uint32 dadId;
         uint16 generation;
     }

     Kitty[] kitties;

     function createKitty (uint256 _momId, uint256 _dadId, uint256 _generation, uint256 _gens,  address _owner  ) private returns (uint256) { // vraca cat ID 

        // kreiramo novi struct object using the name of the struct, pa zagrade kao function call, pa onda viticaste kao object 
        Kitty memory _kitty = Kitty({gens: _gens, birthTime: uint64(block.timestamp), momId: uint32(_momId), dadId: uint32(_dadId), generation: uint16(_generation)});
        
        uint256 newKittyID = kitties.length; // will be the index position before push the new kitty
        kitties.push(_kitty); // we push the new kitty, the index should be the same than newKittyID;

        emit Birth(_owner, newKittyID, _momId, _dadId, _gens);

        _transfer(address(0), _owner, newKittyID);

        return newKittyID; 
     }

    uint256 public counterCat;

    function createKittyGen0(uint256 _gens) public onlyOwner returns(uint256){
        require(counterCat < LIMIT_GEN0_CAT);
        counterCat++;

        return createKitty(0,0,0, _gens, msg.sender);
    }

    function getKitty(uint256 _tokenId) external view returns(uint256 momId, uint256 dadId, uint256 generation, uint256 gens, uint256 birthTime){
        
        return(kitties[_tokenId].momId, kitties[_tokenId].dadId, kitties[_tokenId].generation, kitties[_tokenId].gens, kitties[_tokenId].birthTime);
    }

    function balanceOf(address owner) override external view returns (uint256 balance){
       return ownerShipTokenCount[owner];
    }

    function totalSupply() override external view returns (uint256 total){
         total = TokenAmount;
    }

    function name() override external view returns (string memory tokenName){
         tokenName = TokenName;
    }

    function symbol() override external view returns (string memory tokenSymbol){
         tokenSymbol = TokenSymbol;
    }

    function ownerOf(uint256 tokenId) override external view returns (address owner){
        return kittyIndexToOwner[tokenId];
    }

    function transfer(address to, uint256 tokenId) override external{
        require(to != address(0), "cannot be the zero address");
        require(to != address(this), "can not be the contract address");
        require(kittyIndexToOwner[tokenId] == msg.sender);

        _transfer(msg.sender, to, tokenId);

        emit Transfer(msg.sender, to, tokenId);
    }

    function _transfer(address _from, address _to, uint256 _tokenId) internal {
        ownerShipTokenCount[_to]++;

        kittyIndexToOwner[_tokenId] = _to;

        if(_from != address(0)){
            ownerShipTokenCount[_from]-- ;
        }
        emit Transfer(_from, _to, _tokenId);
    }



}