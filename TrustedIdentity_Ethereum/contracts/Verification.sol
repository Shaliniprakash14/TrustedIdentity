pragma solidity ^0.5.0;

contract Verification{
    uint public taskCount =0;

    struct Task{
        uint id;
        string content;
        bytes32 hashID;
        bool status;
    }

    mapping(uint => Task) public tasks;

    event TaskCreated(
        uint id,
        string content,
        bytes32 hashID,
        bool status

    );


    constructor() public{
        createTask("PAN",0x04d738f8bae31ec1f54935d60896891f928a7ec12a2ffd635e79dbaf4c584aee);
    }

    function createTask(string memory _content,bytes32 _hashID) public {
        taskCount++;
        tasks[taskCount] = Task(taskCount,_content,_hashID,true);
        emit TaskCreated(taskCount ,_content,_hashID,true);
    }



}