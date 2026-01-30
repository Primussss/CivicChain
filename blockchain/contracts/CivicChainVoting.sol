// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract CivicChainVoting {

    struct Candidate {
        uint256 id;
        string name;
        uint256 voteCount;
    }

    address public admin;
    uint256 public candidatesCount;
    bool public electionActive;

    mapping(uint256 => Candidate) public candidates;
    mapping(address => bool) public hasVoted;

    event CandidateAdded(uint256 id, string name);
    event VoteCast(address voter, uint256 candidateId);
    event ElectionStarted();
    event ElectionEnded();

    modifier onlyAdmin() {
        require(msg.sender == admin, "Only admin allowed");
        _;
    }

    modifier electionOngoing() {
        require(electionActive, "Election is not active");
        _;
    }

    constructor() {
        admin = msg.sender;
        electionActive = false;
    }

    // Start election
    function startElection() public onlyAdmin {
        electionActive = true;
        emit ElectionStarted();
    }

    // End election
    function endElection() public onlyAdmin {
        electionActive = false;
        emit ElectionEnded();
    }

    // Add candidates
    function addCandidate(string memory _name) public onlyAdmin {
        candidatesCount++;
        candidates[candidatesCount] = Candidate(candidatesCount, _name, 0);
        emit CandidateAdded(candidatesCount, _name);
    }

    // Cast vote
    function vote(uint256 _candidateId) public electionOngoing {
        require(!hasVoted[msg.sender], "You have already voted");
        require(_candidateId > 0 && _candidateId <= candidatesCount, "Invalid candidate");

        hasVoted[msg.sender] = true;
        candidates[_candidateId].voteCount++;

        emit VoteCast(msg.sender, _candidateId);
    }

    // Get candidate details
    function getCandidate(uint256 _id) public view returns (uint256, string memory, uint256) {
        Candidate memory c = candidates[_id];
        return (c.id, c.name, c.voteCount);
    }
}
