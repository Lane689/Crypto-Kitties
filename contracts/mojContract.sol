// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./IERC721.sol";
import "../node_modules/@openzeppelin/contracts/access/Ownable.sol";

contract mojKittyContract is IERC721, Ownable {

    string public constant _name = "BeSmartCoin";
    string public constant _symbol = "BSC";
    uint256 public constant LIMIT_GEN0_CREATIONS = 10;
    uint256 _totalSupply;


    event Birth(address owner, uint256 kittenId, uint256 mumId, uint256 dadId, uint256 genes);

    struct Kitty{
        uint256 genes;
        uint64 BirthTime;
        uint32 mumId;
        uint32 dadId;
        uint16 generation;
    }

    Kitty[] kitties;

    mapping(address => uint256) ownerOfNFT;
    mapping(uint256 => address) pointerToOwner;

    uint256 public gen0Counter;

    function createKittyGen0(uint256 _genes) public onlyOwner {
        require(gen0Counter < LIMIT_GEN0_CREATIONS);
        gen0Counter++;
        
        _createKitty(0, 0, _genes, 0, msg.sender);
    }

    function _createKitty(uint256 _mumId, uint256 _dadId, uint256 _genes, uint256 _generation, address _owner) private returns(uint256) {

        Kitty memory _kitty = Kitty({
            genes: _genes,
            BirthTime: uint64(block.timestamp),
            mumId: uint32(_mumId),
            dadId: uint32(_dadId), 
            generation: uint16(_generation)
        });

        kitties.push(_kitty);
        uint256 newKittenId = kitties.length -1 ; 

        emit Birth(_owner, newKittenId, _mumId, _dadId, _genes);

        _transfer(address(0), _owner, newKittenId); // birth of the cat, creation of the cat from nowhere

        return newKittenId;
    }

     function getCat(uint256 tokenId) public view returns(uint256, uint64, uint32, uint32, uint16){
         // returns from struct
        return (kitties[tokenId].genes, kitties[tokenId].BirthTime, kitties[tokenId].mumId, kitties[tokenId].dadId, kitties[tokenId].generation);
    }

    function balanceOf(address owner) override external view returns (uint256 balance){
        require(owner != address(0), "ERC721: address zero is not a valid owner");
        return ownerOfNFT[owner];
    }

    function totalSupply() override public view returns (uint256 total){
        return _totalSupply;
    }

    function name() override external view returns (string memory tokenName){
        return _name;
    }

    function symbol() override external view returns (string memory tokenSymbol){
        return _symbol;
    }

    function ownerOf(uint256 tokenId) override external view returns (address owner){
        require(owner != address(0), "ERC721: owner query for nonexistent token");
        return pointerToOwner[tokenId];
    }

    // only from msg.sender to recipient
    function transfer(address to, uint256 tokenId) override external{
        require(to != address(0), "ERC721: owner query for nonexistent token");
        require(to != address(this), "ERC721: can not be contract address");
        //require(pointerToOwner[tokenId] == msg.sender);
        require(_owns(msg.sender, tokenId));


        emit Transfer(msg.sender, to ,tokenId);
    }

    function _transfer(address _from, address _to, uint256 tokenId) internal {
        ownerOfNFT[_to]++; // increasing token count of the recipient

        pointerToOwner[tokenId] = _to; 

        if(_from != address(0)) {
            ownerOfNFT[_from]--; // decreasing token count of the sender
        }

        emit Transfer(_from, _to, tokenId);
    }

    // returns T or F if pointerToOwner = the person who claim the ownership 
    function _owns(address owner, uint256 tokenId) internal view returns(bool){
       return pointerToOwner[tokenId] == owner;  
    }
}

