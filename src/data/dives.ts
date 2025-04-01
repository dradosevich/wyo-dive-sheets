export const diveDatabase = {
  "categories": {
    "1": "forward",
    "2": "back",
    "3": "reverse",
    "4": "inward",
    "5": "twist"
  },
  
  "positions": {
    "A": "Straight",
    "B": "Pike",
    "C": "Tuck",
    "D": "Free"
  },

  "dives": {
    "forward": {
      "101": {
        "name": "Forward Dive",
        "dd": { "A": 1.4, "B": 1.3, "C": 1.2 }
      },
      "102": {
        "name": "Forward 1 SS",
        "dd": { "A": 1.6, "B": 1.5, "C": 1.4 }
      },
      "103": {
        "name": "Forward 1½ SS",
        "dd": { "A": 2.2, "B": 1.9, "C": 1.6 }
      },
      "104": {
        "name": "Forward 2 SS",
        "dd": { "A": 2.4, "B": 2.2, "C": 2.0 }
      },
      "105": {
        "name": "Forward 2½ SS",
        "dd": { "B": 2.6, "C": 2.4 }
      }
    },
    "back": {
      "201": {
        "name": "Back Dive",
        "dd": { "A": 1.7, "B": 1.6, "C": 1.5 }
      },
      "202": {
        "name": "Back 1 SS",
        "dd": { "A": 1.7, "B": 1.6, "C": 1.5 }
      },
      "203": {
        "name": "Back 1½ SS",
        "dd": { "A": 2.5, "B": 2.0, "C": 1.8 }
      },
      "204": {
        "name": "Back 2 SS",
        "dd": { "B": 2.5, "C": 2.2 }
      },
      "205": {
        "name": "Back 2½ SS",
        "dd": { "B": 3.0, "C": 2.8 }
      }
    },
    "reverse": {
      "301": {
        "name": "Reverse Dive",
        "dd": { "A": 1.8, "B": 1.7, "C": 1.6 }
      },
      "302": {
        "name": "Reverse 1 SS",
        "dd": { "A": 1.8, "B": 1.7, "C": 1.6 }
      },
      "303": {
        "name": "Reverse 1½ SS",
        "dd": { "A": 2.7, "B": 2.1, "C": 1.9 }
      },
      "304": {
        "name": "Reverse 2 SS",
        "dd": { "B": 2.6, "C": 2.3 }
      },
      "305": {
        "name": "Reverse 2½ SS",
        "dd": { "B": 3.2, "C": 2.9 }
      }
    },
    "inward": {
      "401": {
        "name": "Inward Dive",
        "dd": { "A": 1.8, "B": 1.5, "C": 1.4 }
      },
      "402": {
        "name": "Inward 1 SS",
        "dd": { "A": 2.0, "B": 1.7, "C": 1.6 }
      },
      "403": {
        "name": "Inward 1½ SS",
        "dd": { "B": 2.4, "C": 2.2 }
      },
      "404": {
        "name": "Inward 2 SS",
        "dd": { "B": 3.0, "C": 2.8 }
      },
      "405": {
        "name": "Inward 2½ SS",
        "dd": { "B": 3.4, "C": 3.1 }
      }
    },
    "twist": {
      "5111": {
        "name": "Forward Dive, ½ Twist",
        "dd": { "A": 1.8, "B": 1.7, "C": 1.6 }
      },
      "5112": {
        "name": "Forward Dive, 1 Twist",
        "dd": { "A": 2.0 }
      },
      "5121": {
        "name": "Forward 1 SS, ½ Twist",
        "dd": { "D": 1.9 }
      },
      "5122": {
        "name": "Forward 1 SS, 1 Twist",
        "dd": { "D": 2.1 }
      },
      "5124": {
        "name": "Forward 1 SS, 2 Twist",
        "dd": { "D": 2.5 }
      },
      "5131": {
        "name": "Forward 1½ SS, ½ Twist",
        "dd": { "D": 2.0 }
      },
      "5132": {
        "name": "Forward 1½ SS, 1 Twist",
        "dd": { "D": 2.2 }
      },
      "5134": {
        "name": "Forward 1½ SS, 2 Twist",
        "dd": { "D": 2.6 }
      }
    }
  },

  "rules": {
    "minimumDives": 6,
    "requiredCategories": ["forward", "back", "inward"],
    "maxDegreeOfDifficulty": 2.8,
    "voluntaryDiveLimit": 1.8
  }
};