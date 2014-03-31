//This handles retrieving data and is used by controllers. 3 options (server, factory, provider) with 
//each doing the same thing just structuring the functions/data differently.
app.service('customersService', function () {
    this.getCustomers = function () {
        return customers;
    };

    this.getPlaylists = function () {
        return playlists;
    };

    this.getMedications = function () {
        return medications;
    };

    this.getPatients = function () {
        return patients;
    };

    this.getTasks = function () {
        return tasks;
    };

    this.getVitals = function () {
        return vitals;
    };

    this.getLabs = function () {
        return labs;
    };

    this.getConditions = function () {
        return conditions;
    };

    this.getDiagnoses = function () {
        return diagnoses;
    };

    this.getProcedures = function () {
        return procedures;
    };

    this.getImmunizations = function () {
        return immunizations;
    };

    this.getGoals = function () {
        return goals;
    };

    this.insertCustomer = function (firstName, lastName, city) {
        var topID = customers.length + 1;
        customers.push({
            id: topID,
            firstName: firstName,
            lastName: lastName,
            city: city
        });
    };

    this.deleteCustomer = function (id) {
        for (var i = customers.length - 1; i >= 0; i--) {
            if (customers[i].id === id) {
                customers.splice(i, 1);
                break;
            }
        }
    };

    this.getCustomer = function (id) {
        for (var i = 0; i < customers.length; i++) {
            if (customers[i].id === id) {
                return customers[i];
            }
        }
        return null;
    };

    var patients = [
        {
            id: 1, lastName: 'Johnson', firstName: 'Betsy', age: 74, program: 'Care Management', insurer: 'Aetna PPO Basic 70/30', primaryDoctor: 'Harry N. David, MD', hotspot: true, diagnoses: 'COPD', gender: 'Female',
            managers: [
                'Miriam Kakeba',
                'Joyce Rosenovich'
            ],
            tasks: {
                time: 'Anytime Tomorrow', today: false, type: 'Outreach', status: 'Open', step: '3rd'
            },
            playlist: {
                title: 'Adult Weight Management', patients: 14, steps: 7, effectiveness: 28, goal: 'Reduce Patients BMI between 18 and 25%', stepPosition: 4, stepDescription: 'Brochure: Low Glycemic Foods'
            }
        },
        {
            id: 2, lastName: 'McCormick', firstName: 'John', age: 70, primaryDoctor: 'Dr. George A. Beller', diagnoses: 'Toxocariasis', hotspot: true, gender: 'Male'
        },
        {
            id: 3, lastName: 'Rodriguez', firstName: 'Marco', age: 68, primaryDoctor: 'Dr. John P. DiMarco', diagnoses: 'Acariasis', hotspot: true, gender: 'Male'
        }
    ];

    var medications = [
        {
            title: 'Celecoxib', dosage: 'Capsule (hard, soft, etc.) 200mg'
        },
        {
            title: 'Glipizide/Metformin HCL', dosage: 'Tablet 2.5-250mg'
        },
        {
            title: 'Metformin HCL', dosage: 'Tablet 100mg'
        }
    ];

    var goals = [
        {
            title: 'Adult Weight Management', goal: 'Lose 40 lbs by July 15th, 2014', task: '3/1/14 : Class &ndash; In-home Exercise'
        },
        {
            title: 'Diabetes 1', goal: 'Reduce HgA1C to healthy range', task: '4/15/14 : HgA1C Appointment'
        }
    ];

    var vitals = [
        {
            title: 'Body mass index (BMI) [Ratio]', result: 25, lowRange: 10, highRange: 20, date: '1/21/2014', source: 'CT'
        },
        {
            title: 'Body weight stated', result: 120, lowRange: 110, highRange: 130, date: '8/2/2013', source: 'PCP'
        },
        {
            title: 'Body height stated', result: 64, date: '6/2/2013', source: 'CT', healthRange: 'N/A'
        },
        {
            title: 'Diastolic blood pressure', result: 70, healthRange: 80, date: '4/5/2013', source: 'PCP'
        },
        {
            title: 'Systolic blood pressure', result: 115, healthRange: 120, date: '3/2/2013', source: 'CT'
        }
    ];

    var labs = [
        {
            title: 'HgA1C Blood Sugar Test', result: 6.9, lowRange: 4, highRange: 5.6
        },
        {
            title: 'Lipoprotein.beta.subparticle [Entitic length]', result: 20.8, healthRange: 20.8
        },
        {
            title: 'Something, Something, Something, Darkside', result: 10, healthRange: 100
        }

    ];

    var playlists = [
        {
            title: 'Adult Weight Management', patients: 14, steps: 7, effectiveness: 28, goal: 'Reduce Patients BMI between 18 and 25%', stepPosition: 4, stepDescription: 'Brochure: Low Glycemic Foods', hotspot: true
        },
        {
            title: 'Diabetes 101', patients: 8, steps: 8, effectiveness: 33, goal: 'HgA1c results between 8 and 9%', stepPosition: 6, stepDescription: 'Class: Better Glucose Monitoring', hotspot: true
        },
        {
            title: 'End of Life Issues', patients: 22, steps: 9, effectiveness: 53, goal: 'HgA1c results between 8 and 9%', stepPosition: 1, stepDescription: 'Class: Leaving a Safe Financial Legacy', hotspot: false
        }
    ];

    var tasks = [
        {
            lastName: 'Mildred', firstName: 'Joel', time: 'Today at 12pm',today: true, type: 'Outreach', status: 'Open', physician: 'Dr. Henry Real', playlist: 'Adult Weight Management', step: '3rd', hotspot: true
        },
        {
            lastName: 'Beachlerie', firstName: 'Diana', time: 'Anytime Today', today: true, type: 'Consent Letter', status: 'Open', physician: 'Dr. Sharon Jones', playlist: 'Diabetes 101', step: '4th', hotspot: true
        },
        {
            lastName: 'Smith', firstName: 'Eaton', time: 'Anytime Today', today: true, type: 'New Cond. Start', status: 'Open', physician: 'Dr. Brian C. Knowles', playlist: 'None selected', hotspot: false
        },
        {
            lastName: 'Johnson', firstName: 'Betsy', time: 'Anytime Tomorrow', today: false, type: 'Outreach', status: 'Open', physician: 'Harry N. David, MD', playlist: 'Adult Weight Management', step: '3rd', hotspot: true
        }
    ];

    var conditions = [
        {
            title: 'Cholesterol Secondary', risk: 'Moderate'
        },
        {
            title: 'Coronary Artery Disease', risk: 'High'
        },
        {
            title: 'Hypertension Adult', risk: 'Low'
        }
    ];

    var diagnoses = [
        {
            description: 'Other disorder of menstration and other abnormal bleeding from'
        },
        {
            description: 'Lumbosacral spondylosis without myelopathy'
        },
        {
            description: 'Malignant neoplasm of bladder, part unspecified'
        },
        {
            description: 'Spinal stenosis of lumbar region, without neurogenic claudication'
        },
        {
            description: 'Paroxysmal superaventricular tachycardia'
        }
    ];

    var procedures = [
        {
            title: 'Screen Clinicial Depression', total: 1, hotspot: true
        },
        {
            title: 'Assay of Glycated Protein', total: 6
        },
        {
            title: 'Collection of Venous Blood Venipuncture', total: 1
        },
        {
            title: 'Comprehensive Metabolic Panel', total: 8
        },
        {
            title: 'Creatine Other Source', total: 1
        }
    ];

    var immunizations = [
        {
            title: 'Administration of Influenza vaccine', total: 3
        },
        {
            title: 'IMADM PRQ ID SUBQ/IM NJXS 1 Vaccine', total: 6
        },
        {
            title: 'Influenza virus vaccine trivalent 3 yrs plus IM', total: 1
        },
        {
            title: 'Pneumococcal Polysac vaccine 23-V 2', total: 8
        },
        {
            title: 'IMADM Intransl/Oral 1 Vaccine', total: 1
        }
    ];

    var customers = [
        {
            id: 1, firstName: 'Lee', lastName: 'Carroll', address: '1234 Anywhere St.', city: 'Phoenix',
            orders: [
                { product: 'Basket', price: 29.99, quantity: 1, orderTotal: 29.99 },
                { product: 'Yarn', price: 9.99, quantity: 1, orderTotal: 39.96 },
                { product: 'Needes', price: 5.99, quantity: 1, orderTotal: 5.99 }
            ]
        },
        {
            id: 2, firstName: 'Jesse', lastName: 'Hawkins', address: '89 W. Center St.', city: 'Atlanta',
            orders: [
                { product: 'Table', price: 329.99, quantity: 1, orderTotal: 329.99 },
                { product: 'Chair', price: 129.99, quantity: 4, orderTotal: 519.96 },
                { product: 'Lamp', price: 89.99, quantity: 5, orderTotal: 449.95 },
            ]
        },
        {
            id: 3, firstName: 'Charles', lastName: 'Sutton', address: '455 7th Ave.', city: 'Quebec',
            orders: [
                { product: 'Call of Duty', price: 59.99, quantity: 1, orderTotal: 59.99 },
                { product: 'Controller', price: 49.99, quantity: 1, orderTotal: 49.99 },
                { product: 'Gears of War', price: 49.99, quantity: 1, orderTotal: 49.99 },
                { product: 'Lego City', price: 49.99, quantity: 1, orderTotal: 49.99 }
            ]
        },
        {
            id: 4, firstName: 'Albert', lastName: 'Einstein', address: '8966 N. Crescent Dr.', city: 'New York City',
            orders: [
                { product: 'Baseball', price: 9.99, quantity: 5, orderTotal: 49.95 },
                { product: 'Bat', price: 19.99, quantity: 1, orderTotal: 19.99 }
            ]
        },
        {
            id: 5, firstName: 'Sonya', lastName: 'Williams', address: '55 S. Hollywood Blvd', city: 'Los Angeles'
        },
        {
            id: 6, firstName: 'Victor', lastName: 'Bryan', address: '563 N. Rainier St.', city: 'Seattle',
            orders: [
                { product: 'Speakers', price: 499.99, quantity: 1, orderTotal: 499.99 },
                { product: 'iPod', price: 399.99, quantity: 1, orderTotal: 399.99 }
            ]
        },
        {
            id: 7, firstName: 'Lynette', lastName: 'Gonzalez', address: '25624 Main St.', city: 'Albuquerque',
            orders: [
                { product: 'Statue', price: 429.99, quantity: 1, orderTotal: 429.99 },
                { product: 'Picture', price: 1029.99, quantity: 1, orderTotal: 1029.99 }
            ]
        },
        {
            id: 8, firstName: 'Erick', lastName: 'Pittman', address: '33 S. Lake Blvd', city: 'Chicago',
            orders: [
                { product: 'Book: AngularJS Development', price: 39.99, quantity: 1, orderTotal: 39.99 },
                { product: 'Book: Basket Weaving Made Simple', price: 19.99, quantity: 1, orderTotal: 19.99 }
            ]
        },
        {
            id: 9, firstName: 'Alice', lastName: 'Price', address: '3354 Town', city: 'Cleveland',
            orders: [
                { product: 'Webcam', price: 85.99, quantity: 1, orderTotal: 85.99 },
                { product: 'HDMI Cable', price: 39.99, quantity: 2, orderTotal: 79.98 }
            ]
        },
        {
            id: 10, firstName: 'Gerard', lastName: 'Tucker', address: '6795 N. 53 W. Bills Dr.', city: 'Buffalo',
            orders: [
                { product: 'Fan', price: 49.99, quantity: 4, orderTotal: 199.96 },
                { product: 'Remote Control', price: 109.99, quantity: 1, orderTotal: 109.99 }
            ]
        },
        {
            id: 11, firstName: 'Shanika', lastName: 'Passmore', address: '459 S. International Dr.', city: 'Orlando'
        }
    ];

});