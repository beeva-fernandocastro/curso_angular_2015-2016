'use strict';

var _ = require('lodash');

// Get list of things
exports.index = function (req, res) {
  res.json({
    configurationTypes: [
      {
        label: 'Deportivo',
        value: 'sport'
      },
      {
        label: 'Personalizado',
        value: 'normal'
      }
    ],
    bodyEngines: [
      {
        label: 'Sedan',
        value: 'sedan',
        type: ['normal']
      },
      {
        label: 'Coupe',
        value: 'coupe',
        type: 'normal'
      },
      {
        label: 'Deportivo',
        value: 'sport',
        type: 'sport'
      }
    ],
    engines: [
      {
        label: '100Cv 1.8 Disel',
        value: '100cv_1.8_diesel',
        type: ['normal']
      },
      {
        label: '110Cv 2.0 Disel',
        value: '110cv_2.0_diesel',
        type: 'normal'
      },
      {
        label: '120Cv 2.0 Gasolina',
        value: '120cv_2.0_oil',
        type: 'normal'
      },
      {
        label: '250Cv 2.2 Gasolina',
        value: '250cv_2.2_oil',
        type: 'sport'
      }
    ],
    transmissions: [
      {
        label: 'Manual',
        value: 'manual',
        type: 'sport'
      },
      {
        label: 'Automático',
        value: 'automatic',
        type: ['normal']
      }
    ],
    finishes: [
      {
        label: 'Deportivo',
        value: 'sport',
        type: 'sport'
      },
      {
        label: 'Ejecutivo',
        value: 'executive',
        type: ['normal']
      }
    ],
    tires: [
      {
        label: '15 pulgadas',
        value: '15',
        type: ['normal']
      },
      {
        label: '16 pulgadas',
        value: '16',
        type: 'normal'
      },
      {
        label: '17 pulgadas',
        value: '17',
        type: 'normal'
      },
      {
        label: '18 pulgadas',
        value: '18',
        type: 'sport'
      }
    ],
    colors: [
      {
        label: 'Rojo',
        value: 'red'
      },
      {
        label: 'Azul',
        value: 'blue'
      },
      {
        label: 'Negro',
        value: 'black'
      }
    ],
    colorsSport: [
      {
        label: 'Metalizado',
        value: 'metal'
      },
      {
        label: 'Mate',
        value: 'matt'
      },
      {
        label: 'Satinado',
        value: 'satin'
      }
    ],
    extras: [
      {
        label: 'GPS',
        value: 'gps',
        type: 'sport'
      },
      {
        label: 'Asientos de cuero',
        value: 'leather_seats',
        type: 'sport'
      },
      {
        label: 'Luces de Xenón',
        value: 'xenon',
        type: 'sport'
      },
      {
        label: 'Techo solar',
        value: 'sunroof',
        type: 'sport'
      }
    ]
  });
};
