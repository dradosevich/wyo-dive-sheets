const diveDatabase = {
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

document.querySelectorAll('input[name="diveCount"]').forEach(radio => {
    radio.addEventListener('change', (e) => {
        document.querySelectorAll('.dive-form').forEach(form => {
            form.style.display = 'none';
        });
        if (e.target.value === '6') {
            document.getElementById('sixDiveForm').style.display = 'block';
        } else {
            document.getElementById('elevenDiveForm').style.display = 'block';
        }
    });
});

// Add to existing script
let voluntaryCount = 0;
document.querySelectorAll('.dive-type').forEach(radio => {
    radio.addEventListener('change', (e) => {
        if (e.target.value === 'voluntary') {
            if (voluntaryCount >= 5) {
                alert('Maximum 5 voluntary dives allowed');
                e.target.checked = false;
                return;
            }
            voluntaryCount++;
        } else if (e.target.value === 'optional') {
            if (e.target.parentElement.querySelector('[value="voluntary"]').checked) {
                voluntaryCount--;
            }
        }
    });
});

const DIVE_RULES = {
    TOTAL_DD_LIMIT: 9.0,
    SECTIONS: {
        PRELIMS: { start: 0, end: 4, reqVol: 2, reqOpt: 3 },
        SEMIS: { start: 5, end: 7, reqVol: 2, reqOpt: 1 },
        FINALS: { start: 8, end: 10, reqVol: 1, reqOpt: 2 }
    },
    GROUPS: ['forward', 'back', 'inward', 'reverse', 'twist']
};

function validateDiveList() {
    const dives = getDiveList();
    const errors = [];
    
    // Check section requirements
    if (!validateSectionCounts(dives)) {
        errors.push("Invalid voluntary/optional distribution in sections");
    }

    // Check dive groups in first 8 rounds
    if (!validateDiveGroups(dives.slice(0, 8))) {
        errors.push("Must include all dive groups in first 8 rounds");
    }

    // Check total DD for voluntaries
    if (!validateTotalDD(dives)) {
        errors.push("Total DD for voluntaries exceeds 9.0");
    }

    displayErrors(errors);
    return errors.length === 0;
}

function validateSectionCounts(dives) {
    const sections = {
        prelims: dives.slice(0, 5),
        semis: dives.slice(5, 8),
        finals: dives.slice(8)
    };

    return (
        countVoluntaries(sections.prelims) === 2 &&
        countVoluntaries(sections.semis) === 2 &&
        countVoluntaries(sections.finals) === 1
    );
}

function validateDiveGroups(dives) {
    const groups = new Set(dives.map(dive => getDiveGroup(dive.number)));
    return DIVE_RULES.GROUPS.every(group => groups.has(group));
}
function getDiveDD(diveNumber, position) {
    try {
        const categoryKey = diveNumber.toString()[0];
        const cat = diveDatabase.categories[categoryKey];
        if (!cat) {
            throw new Error(`Invalid dive category: ${categoryKey}`);
        }
        if (!diveDatabase.dives[cat][diveNumber]) {
            throw new Error(`Invalid dive number: ${diveNumber}`);
        }
        if (!diveDatabase.dives[cat][diveNumber].dd[position]) {
            throw new Error(`Invalid position ${position} for dive ${diveNumber}`);
        }
        return diveDatabase.dives[cat][diveNumber].dd[position];
    } catch (error) {
        console.error(error.message);
        displayErrors([error.message]);
        return 0.0;
    }
}

function getDiveDescription(diveNumber, position) 
{
    cat = diveDatabase.categories[diveNumber[0]];
    return diveDatabase.dives[cat][diveNumber].name + " " + diveDatabase.positions[position];
}
function validateTotalDD(dives) {
    const voluntaryDD = dives
        .filter(dive => dive.type === 'voluntary')
        .reduce((sum, dive) => sum + getDiveDD(dive.number, dive.position), 0);
    return voluntaryDD <= DIVE_RULES.TOTAL_DD_LIMIT;
}

function getDiveList() {
    const isSixDive = document.getElementById('sixDive').checked;
    const formId = isSixDive ? 'sixDiveForm' : 'elevenDiveForm';
    const maxDives = isSixDive ? 6 : 11;
    const dives = [];

    for (let i = 1; i <= maxDives; i++) {
        const diveInput = document.querySelector(`#${formId} input[type="number"][data-dive="${i}"]`);
        const positionSelect = document.querySelector(`#${formId} select[data-dive="${i}"]`);
        const typeRadio = document.querySelector(`#${formId} input[type="radio"][name="diveType${i}"]:checked`);

        if (diveInput?.value && positionSelect?.value) {
            dives.push({
                number: parseInt(diveInput.value),
                position: positionSelect.value,
                type: typeRadio ? typeRadio.value : 'optional' // default to optional for 6-dive meet
            });
        }
    }

    return dives;
}

function displayErrors(errors) {
    const errorDiv = document.getElementById('validation-errors');
    errorDiv.innerHTML = errors.map(error => `<div class="alert alert-danger">${error}</div>`).join('');
}

// Add event listeners
document.querySelectorAll('.dive-type').forEach(radio => {
    radio.addEventListener('change', validateDiveList);
});

document.querySelectorAll('input[type="number"], select').forEach(input => {
    input.addEventListener('change', validateDiveList);
});

function generateDiveSheet() {
    if (!validateBeforePrint()) {
        return;
    }

    const diveSheet = document.createElement('div');
    diveSheet.className = 'dive-sheet';

    // Add header
    diveSheet.innerHTML = `
        <div class="sheet-header">
            <div class="row">
                <div class="col-6">
                    <h3>Name: ${document.getElementById('diverName').value}</h3>
                    <h4>School: ${document.getElementById('school').value}</h4>
                </div>
                <div class="col-6">
                    <h3>Meet: ${document.getElementById('meetTitle').value}</h3>
                    <h4>Date: ${document.getElementById('meetDate').value}</h4>
                </div>
            </div>
        </div>
        <table class="table table-bordered">
            <thead>
                <tr>
                    <th>Dive/DD</th>
                    <th>J1</th>
                    <th>J2</th>
                    <th>J3</th>
                    <th>J4</th>
                    <th>J5</th>
                    <th>J6</th>
                    <th>J7</th>
                    <th>
                        <div>Award</div>
                        <div>Total</div>
                    </th>
                </tr>
            </thead>
            <tbody>
                ${generateDiveRows()}
            </tbody>
        </table>
    `;

    // Add print-specific styles
    const style = document.createElement('style');
    style.textContent = `
        @media print {
            body * {
                visibility: hidden;
            }
            .dive-sheet, .dive-sheet * {
                visibility: visible;
            }
            .dive-sheet {
                position: absolute;
                left: 0;
                top: 0;
                width: 100%;
                padding: 0.25in;
            }
            .sheet-header {
                margin-bottom: 10px;
            }
            table { 
                border-collapse: collapse; 
                width: 100%;
                font-size: 10pt;
                border: 1px solid black;
                -webkit-print-color-adjust: exact;
            }
            th, td { 
                border: 1px solid black !important; 
                padding: 3px;
                text-align: center;
                vertical-align: middle;
                line-height: 1.2;
            }
            th:last-child, td:last-child { 
                border-left: 2px solid black !important;
                padding: 0 !important;
            }
            td:first-child {
                font-size: 9pt;
                max-width: 150px;
            }
            .award, .total {
                padding: 3px !important;
                min-height: 25px;
                text-align: center;
            }
            .award {
                border-right: 1px solid black !important;
            }
            h3, h4 {
                margin: 3px 0;
                font-size: 11pt;
            }
            @page {
                size: letter portrait;
                margin: 0;
            }
            .table-bordered {
                border: 2px solid black !important;
            }
            .table-bordered > thead > tr > th,
            .table-bordered > tbody > tr > td {
                border: 1px solid black !important;
                print-color-adjust: exact;
            }
        }
    `;

    // Add content to page
    document.head.appendChild(style);
    document.body.appendChild(diveSheet);

    // Trigger print dialog
    window.print();

    // Clean up after printing
    setTimeout(() => {
        document.body.removeChild(diveSheet);
        document.head.removeChild(style);
    }, 100);
}

function generateDiveRows() {
    const diveRows = [];
    const isSixDive = document.getElementById('sixDive').checked;
    const maxDives = isSixDive ? 6 : 11;
    const formId = isSixDive ? 'sixDiveForm' : 'elevenDiveForm';
    
    for(let i = 1; i <= maxDives; i++) {
        console.log(`Looking for dive ${i} in ${formId}`); // Debug line
        const diveInput = document.querySelector(`#${formId} input[type="number"][data-dive="${i}"]`);
        const positionSelect = document.querySelector(`#${formId} select[data-dive="${i}"]`);
        
        console.log('Found elements:', diveInput, positionSelect); // Debug line
        
        if(diveInput && positionSelect && diveInput.value && positionSelect.value) {
            const diveNumber = diveInput.value;
            const position = positionSelect.value;
            const dd = getDiveDD(diveNumber, position) || '0.0';
            
            diveRows.push(`
                <tr>
                    <td>${diveNumber}${position} / ${dd}</br>${getDiveDescription(diveNumber,position)}</td>
                    <td contenteditable="true"></td>
                    <td contenteditable="true"></td>
                    <td contenteditable="true"></td>
                    <td contenteditable="true"></td>
                    <td contenteditable="true"></td>
                    <td contenteditable="true"></td>
                    <td contenteditable="true"></td>
                    <td style="padding: 0 !important;">
                        <div style="display: flex; flex-direction: column; height: 100%;">
                            <div class="award" contenteditable="true" style="height: 50%; border-bottom: 2px solid black !important;"></div>
                            <div class="total" contenteditable="true" style="height: 50%;"></div>
                        </div>
                    </td>
                </tr>
            `);
        }
    }
    return diveRows.join('');
}

function validateBeforePrint() {
    const errors = [];
    
    // Check required fields
    if (!document.getElementById('diverName').value) {
        errors.push('Diver name is required');
    }
    if (!document.getElementById('school').value) {
        errors.push('School is required');
    }
    if (!document.getElementById('meetTitle').value) {
        errors.push('Meet title is required');
    }
    if (!document.getElementById('meetDate').value) {
        errors.push('Meet date is required');
    }

    // Validate dive list
    const dives = getDiveList();
    if (dives.length === 0) {
        errors.push('No dives entered');
    }

    displayErrors(errors);
    return errors.length === 0;
}

// Add event listener to generate button
document.querySelector('.btn-primary').addEventListener('click', generateDiveSheet);