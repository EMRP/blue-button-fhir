"use strict";

var cases = module.exports = [];

var na = null;

cases[0] = {};

cases[0].resources = [{
    "type": "AdverseReaction",
    "id": "0",
    "body": {
        "resourceType": "AdverseReaction",
        "subject": na,
        "symptom": [{
            "severity": "minor",
            "code": {
                "coding": [{
                    "code": "267036007",
                    "system": "http://snomed.info/sct",
                    "display": "Shortness of Breath"
                }],
                "text": na
            }
        }],
        "didNotOccurFlag": false
    }
}, {
    "type": "AllergyIntolerance",
    "id": "1",
    "body": {
        "resourceType": "AllergyIntolerance",
        "criticality": "medium",
        "sensitivityType": "allergy",
        "recordedDate": "2006-05-01",
        "status": "confirmed",
        "subject": na,
        "substance": {
            "reference": "Substance/2",
            "display": na
        },
        "reaction": [{
            "reference": "AdverseReaction/0",
            "display": na
        }]
    }
}, {
    "type": "Substance",
    "id": "2",
    "body": {
        "resourceType": "Substance",
        "text": na,
        "type": {
            "coding": [{
                "system": "http://www.nlm.nih.gov/research/umls/rxnorm",
                "code": "2670",
                "display": "Codeine"
            }],
            "text": na
        }
    }
}];

cases[0].input = cases[0].resources[1];

cases[0].result = {
    "date_time": {
        "low": {
            "date": "2006-05-01T00:00:00.000Z",
            "precision": "day"
        }
    },
    "observation": {
        "allergen": {
            "name": "Codeine",
            "code": "2670",
            "code_system_name": "RXNORM"
        },
        "status": {
            "name": "Active",
            "code": "55561003",
            "code_system_name": "SNOMED CT"
        },
        "reactions": [{
            "reaction": {
                "name": "Shortness of Breath",
                "code": "267036007",
                "code_system_name": "SNOMED CT"
            },
            "severity": {
                "code": {
                    "name": "Mild",
                    "code": "255604002",
                    "code_system_name": "SNOMED CT"
                }
            }
        }],
        "severity": {
            "code": {
                "name": "Moderate",
                "code": "6736007",
                "code_system_name": "SNOMED CT"
            }
        }
    }
};

cases[1] = {};

cases[1].resources = [{
    "type": "AdverseReaction",
    "id": "0",
    "body": {
        "resourceType": "AdverseReaction",
        "subject": {
            "reference": "Patient/add70d80-2f87-11e4-a02b-699a62c7658f",
            "display": "PAC-PATRU TESTPATRU X"
        },
        "symptom": [{
            "severity": "minor",
            "code": {
                "coding": [{
                    "code": "267036007",
                    "system": "http://snomed.info/sct",
                    "display": "Shortness of Breath"
                }],
                "text": "Shortness of Breath"
            }
        }],
        "didNotOccurFlag": false
    }
}, {
    "type": "AllergyIntolerance",
    "id": "1",
    "body": {
        "resourceType": "AllergyIntolerance",
        "criticality": "medium",
        "sensitivityType": "allergy",
        "recordedDate": "2006-05-01",
        "status": "confirmed",
        "subject": {
            "reference": "Patient/add70d80-2f87-11e4-a02b-699a62c7658f",
            "display": "PAC-PATRU TESTPATRU X"
        },
        "substance": {
            "reference": "#allergen",
            "display": "Codeine"
        },
        "contained": [{
            "resourceType": "Substance",
            "id": "allergen",
            "type": {
                "coding": [{
                    "system": "http://www.nlm.nih.gov/research/umls/rxnorm",
                    "code": "DUMMY_CODE",
                    "display": "Codeine"
                }],
                "text": "Codeine"
            }
        }],
        "reaction": [{
            "reference": "AdverseReaction/0",
            "display": "Shortness of Breath"
        }]
    }
}];

cases[1].input = cases[1].resources[1];

cases[1].result = {
    "date_time": {
        "low": {
            "date": "2006-05-01T00:00:00.000Z",
            "precision": "day"
        }
    },
    "observation": {
        "allergen": {
            "name": "Codeine",
            "code": "DUMMY_CODE",
            "code_system_name": "RXNORM"
        },
        "status": {
            "name": "Active",
            "code": "55561003",
            "code_system_name": "SNOMED CT"
        },
        "reactions": [{
            "reaction": {
                "name": "Shortness of Breath",
                "code": "267036007",
                "code_system_name": "SNOMED CT"
            },
            "severity": {
                "code": {
                    "name": "Mild",
                    "code": "255604002",
                    "code_system_name": "SNOMED CT"
                }
            }
        }],
        "severity": {
            "code": {
                "name": "Moderate",
                "code": "6736007",
                "code_system_name": "SNOMED CT"
            }
        }
    }
};