(function() {
    var almCalculatorUzi = angular.module('almCalculatorUzi', []);

    almCalculatorUzi.controller('aimTimeCalculator', function($scope) {
        $scope.skillAccuracyLevel = 0;
        $scope.aimTimeAC = 1;
        $scope.shotAccuracy = 0;
        $scope.totalALM = 0;
        $scope.targetRange = 1;
        $scope.scopeTable4B = table4B;
        $scope.situationValue = 0;

        $scope.calculate = function() {
            // Calculate Aim Time ALM
            for (var i = 0; i < tableWeaponUzi.aimTimeMod.length; i++) {
                if ($scope.aimTimeAC == tableWeaponUzi.aimTimeMod[i].AC) {
                    $scope.shotAccuracy = $scope.skillAccuracyLevel + tableWeaponUzi.aimTimeMod[i].Modifier;
                    i = tableWeaponUzi.aimTimeMod.length;
                } else if ($scope.aimTimeAC > tableWeaponUzi.aimTimeMod[tableWeaponUzi.aimTimeMod.length - 1].AC) {
                    $scope.shotAccuracy = tableWeaponUzi.aimTimeMod[tableWeaponUzi.aimTimeMod.length - 1].Modifier;
                } else {
                    $scope.shotAccuracy = "Not Valid";
                }
            }
            // Calculate Target Range ALM
            for (var i = 0; i < table4A.length; i++) {
                if ($scope.targetRange == table4A[i].range) {
                    $scope.rangeALM = table4A[i].alm;
                    i = table4A.length;
                } else if ($scope.targetRange > table4A[i].range && $scope.targetRange < table4A[i + 1].range) {
                    $scope.rangeALM = table4A[i].alm;
                    i = table4A.length;
                } else if ($scope.targetRange > table4A[table4A.length - 1].range) {
                    $scope.rangeALM = table4A[table4A.length - 1].alm;
                } else {
                    $scope.rangeALM = "Not Valid";
                }
            };
            // Calculate Firing Stance/Situation ALM

            // Calculate Total ALM
            $scope.totalALM = $scope.shotAccuracy + $scope.rangeALM;
        };
    });

    var tableWeaponUzi = {
        'name': "Uzi",
        'cartridge': "9mm Parabellum",
        'category': "Sub-Machinegun",
        'origin': "Israel",
        'desc': "Sturdy, reliable weapon popular with police and secret service.",
        'length': [{
            'stock': "Unfolded",
            'L': 26
        }, {
            'stock': "Folded",
            'L': 19
        }],
        'weight': 9.0,
        'reloadTime': 8,
        'rateOfFire': 5,
        'selfLoading': "yes",
        'chamberTime': 0,
        'ammunitionCapacity': 32,
        'ammunitionWeight': 1.3,
        'feedDevice': "Magazine",
        'knockDown': 4,
        'sustainedAutomaticBurst': 3,
        'aimTimeMod': [{
            'AC': 1,
            'Modifier': -23
        }, {
            'AC': 2,
            'Modifier': -12
        }, {
            'AC': 3,
            'Modifier': -9
        }, {
            'AC': 4,
            'Modifier': -8
        }, {
            'AC': 5,
            'Modifier': -6
        }, {
            'AC': 6,
            'Modifier': -5
        }, {
            'AC': 7,
            'Modifier': -4
        }, {
            'AC': 8,
            'Modifier': -3
        }],
        'penetrationDC': [{
            'pType': "FMJ",
            'PDC': [{
                'range': 10,
                'PEN': 2.5,
                'DC': 3
            }, {
                'range': 20,
                'PEN': 2.3,
                'DC': 3
            }, {
                'range': 40,
                'PEN': 2.0,
                'DC': 3
            }, {
                'range': 70,
                'PEN': 1.5,
                'DC': 2
            }, {
                'range': 100,
                'PEN': 1.2,
                'DC': 2
            }, {
                'range': 200,
                'PEN': .5,
                'DC': 1
            }, {
                'range': 300,
                'PEN': .2,
                'DC': 1
            }, {
                'range': 400,
                'PEN': .1,
                'DC': 1
            }]
        }, {
            'pType': "JHP",
            'PDC': [{
                'range': 10,
                'PEN': 2.4,
                'DC': 5
            }, {
                'range': 20,
                'PEN': 2.2,
                'DC': 5
            }, {
                'range': 40,
                'PEN': 1.9,
                'DC': 4
            }, {
                'range': 70,
                'PEN': 1.5,
                'DC': 3
            }, {
                'range': 100,
                'PEN': 1.1,
                'DC': 2
            }, {
                'range': 200,
                'PEN': .5,
                'DC': 1
            }, {
                'range': 300,
                'PEN': .2,
                'DC': 1
            }, {
                'range': 400,
                'PEN': .1,
                'DC': 1
            }]
        }, {
            'pType': "AP",
            'PDC': [{
                'range': 10,
                'PEN': 3.6,
                'DC': 3
            }, {
                'range': 20,
                'PEN': 3.3,
                'DC': 3
            }, {
                'range': 40,
                'PEN': 2.8,
                'DC': 3
            }, {
                'range': 70,
                'PEN': 2.2,
                'DC': 2
            }, {
                'range': 100,
                'PEN': 1.7,
                'DC': 2
            }, {
                'range': 200,
                'PEN': .7,
                'DC': 1
            }, {
                'range': 300,
                'PEN': .3,
                'DC': 1
            }, {
                'range': 400,
                'PEN': .1,
                'DC': 1
            }]
        }],
        'minimumArc': [{
            'range': 10,
            'MA': .2
        }, {
            'range': 20,
            'MA': .4
        }, {
            'range': 40,
            'MA': .9
        }, {
            'range': 70,
            'MA': 1
        }, {
            'range': 100,
            'MA': 2
        }, {
            'range': 200,
            'MA': 4
        }, {
            'range': 300,
            'MA': 6
        }, {
            'range': 400,
            'MA': 9
        }],
        'ballisticAccuracy': [{
            'range': 10,
            'BA': 46
        }, {
            'range': 20,
            'BA': 37
        }, {
            'range': 40,
            'BA': 28
        }, {
            'range': 70,
            'BA': 21
        }, {
            'range': 100,
            'BA': 16
        }, {
            'range': 200,
            'BA': 7
        }, {
            'range': 300,
            'BA': 1
        }, {
            'range': 400,
            'BA': -2
        }],
        'timeOfFlight': [{
            'range': 10,
            'TOF': 0
        }, {
            'range': 20,
            'TOF': 1
        }, {
            'range': 40,
            'TOF': 2
        }, {
            'range': 70,
            'TOF': 4
        }, {
            'range': 100,
            'TOF': 6
        }, {
            'range': 200,
            'TOF': 13
        }, {
            'range': 300,
            'TOF': 21
        }, {
            'range': 400,
            'TOF': 31
        }]
    }

    var table4A = [{
        'range': 1,
        'alm': 33
    }, {
        'range': 2,
        'alm': 28
    }, {
        'range': 3,
        'alm': 25
    }, {
        'range': 4,
        'alm': 23
    }, {
        'range': 5,
        'alm': 22
    }, {
        'range': 6,
        'alm': 20
    }, {
        'range': 7,
        'alm': 19
    }, {
        'range': 8,
        'alm': 18
    }, {
        'range': 9,
        'alm': 17
    }, {
        'range': 11,
        'alm': 16
    }, {
        'range': 12,
        'alm': 15
    }, {
        'range': 14,
        'alm': 14
    }, {
        'range': 16,
        'alm': 13
    }, {
        'range': 19,
        'alm': 12
    }, {
        'range': 22,
        'alm': 11
    }, {
        'range': 25,
        'alm': 10
    }, {
        'range': 30,
        'alm': 9
    }, {
        'range': 35,
        'alm': 8
    }, {
        'range': 40,
        'alm': 7
    }, {
        'range': 45,
        'alm': 6
    }, {
        'range': 50,
        'alm': 5
    }, {
        'range': 55,
        'alm': 4
    }, {
        'range': 65,
        'alm': 3
    }, {
        'range': 75,
        'alm': 2
    }, {
        'range': 85,
        'alm': 1
    }, {
        'range': 100,
        'alm': 0
    }, {
        'range': 115,
        'alm': -1
    }, {
        'range': 130,
        'alm': -2
    }, {
        'range': 150,
        'alm': -3
    }, {
        'range': 170,
        'alm': -4
    }, {
        'range': 200,
        'alm': -5
    }, {
        'range': 230,
        'alm': -6
    }, {
        'range': 250,
        'alm': -7
    }, {
        'range': 300,
        'alm': -8
    }, {
        'range': 350,
        'alm': -9
    }, {
        'range': 400,
        'alm': -10
    }, {
        'range': 450,
        'alm': -11
    }, {
        'range': 500,
        'alm': -12
    }, {
        'range': 600,
        'alm': -13
    }, {
        'range': 700,
        'alm': -14
    }, {
        'range': 800,
        'alm': -15
    }, {
        'range': 950,
        'alm': -16
    }, {
        'range': 1100,
        'alm': -17
    }, {
        'range': 1250,
        'alm': -18
    }, {
        'range': 1400,
        'alm': -19
    }, {
        'range': 1650,
        'alm': -20
    }, {
        'range': 1900,
        'alm': -21
    }, {
        'range': 2150,
        'alm': -22
    }, {
        'range': 2500,
        'alm': -23
    }, {
        'range': 2850,
        'alm': -24
    }, {
        'range': 3300,
        'alm': -25
    }, {
        'range': 3800,
        'alm': -26
    }, {
        'range': 4350,
        'alm': -27
    }]

    var table4B = [{
        'id': 1,
        'desc': "Standing",
        'alm': 0
    }, {
        'id': 2,
        'desc': "Standing & Braced",
        'alm': 4
    }, {
        'id': 3,
        'desc': "Kneeling",
        'alm': 3
    }, {
        'id': 4,
        'desc': "Kneeling & Braced",
        'alm': 5
    }, {
        'id': 5,
        'desc': "Prone",
        'alm': 6
    }, {
        'id': 6,
        'desc': "Prone & Braced",
        'alm': 7
    }, {
        'id': 7,
        'desc': "Using Sling for Support",
        'alm': 1
    }, {
        'id': 8,
        'desc': "Firing from the Hip",
        'alm': -6
    }, {
        'id': 9,
        'desc': "Firing Rifle with One Hand",
        'alm': -7
    }, {
        'id': 10,
        'desc': "Firing Pistol with One Hand",
        'alm': -4
    }, {
        'id': 11,
        'desc': "Folding Stock Not Used",
        'alm': -4
    }, {
        'id': 12,
        'desc': "Firing Pistol Double Action",
        'alm': -3
    }, {
        'id': 13,
        'desc': "Deployed Bipod Not Braced",
        'alm': -2
    }, {
        'id': 14,
        'desc': "Bipod Mounted Weapon",
        'alm': 3
    }, {
        'id': 15,
        'desc': "Tripod Mounted Weapon",
        'alm': 5
    }, {
        'id': 16,
        'desc': "Turret Mounted Weapon",
        'alm': 11
    }, {
        'id': 17,
        'desc': "Pistol with Shoulder Stock",
        'alm': 3
    }]

})();
