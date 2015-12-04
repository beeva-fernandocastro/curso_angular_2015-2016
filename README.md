# Curso_angular_2015-2016

<h2>KATA 1 (NIVEL BÁSICO)</h2>

<h4>Ejercicio práctico</h4>

El ejercicio trata de una página web con un formulario para pedir presupuesto sobre un modelo específico de coche. El formulario constará de doce campos: types, body engines, engines, transmissions, finishes, tires, colors, colors sport, extras, comments, CP y email. El esqueleto del ejercicio provee un API y un servidor en Node.js. 

<h5>Interfaces de los servicios</h5>

<b>Options GET /api/options</b>

    Request (application/json)
        
    Response 200 (application/json)
        Schema
            {
                $schema": "http://json-schema.org/draft-04/schema#",
                "type": "object",
                "properties":{
                   "configurationTypes": {
                       “type”: "array",
                       “items”: {
                           “type”: “object”,
                           “properties”: {
                               “label”: {
                                   “type”: “string”
                               },
                               “value”: {
                                   “type”: “string”
                               }
                           }
                       }
                   },
                   “bodyEngines”: {
                       “type”: "array",
                       “items”: {
                           “type”: “object”,
                           “properties”: {
                               “label”: {
                                   “type”: “string”
                               },
                               “value”: {
                                   “type”: “string”
                               },
                               “type”: {
                                   “type”: “string”
                               }
                           }
                       }
                   },
                   “engines”: {
                       “type”: "array",
                       “items”: {
                           “type”: “object”,
                           “properties”: {
                               “label”: {
                                   “type”: “string”
                               },
                               “value”: {
                                   “type”: “string”
                               },
                               “type”: {
                                   “type”: “string”
                               }
                           }
                       }
                   },
                   “transmissions”: {
                       “type”: "array",
                       “items”: {
                           “type”: “object”,
                           “properties”: {
                               “label”: {
                                   “type”: “string”
                               },
                               “value”: {
                                   “type”: “string”
                               },
                               “type”: {
                                   “type”: “string”
                               }
                           }
                       }
                   },
                   “finishes”: {
                       “type”: "array",
                       “items”: {
                           “type”: “object”,
                           “properties”: {
                               “label”: {
                                   “type”: “string”
                               },
                               “value”: {
                                   “type”: “string”
                               },
                               “type”: {
                                   “type”: “string”
                               }
                           }
                       }
                   },
                   “tires”: {
                       “type”: "array",
                       “items”: {
                           “type”: “object”,
                           “properties”: {
                               “label”: {
                                   “type”: “string”
                               },
                               “value”: {
                                   “type”: “string”
                               },
                               “type”: {
                                   “type”: “string”
                               }
                           }
                       }
                   },
                   “colors”: {
                       “type”: "array",
                       “items”: {
                           “type”: “object”,
                           “properties”: {
                               “label”: {
                                   “type”: “string”
                               },
                               “value”: {
                                   “type”: “string”
                               }
                           }
                       }
                   },
                   “colorsSport”: {
                       “type”: "array",
                       “items”: {
                           “type”: “object”,
                           “properties”: {
                               “label”: {
                                   “type”: “string”
                               },
                               “value”: {
                                   “type”: “string”
                               }
                           }
                       }
                   },
                   “extras”: {
                       “type”: "array",
                       “items”: {
                           “type”: “object”,
                           “properties”: {
                               “label”: {
                                   “type”: “string”
                               },
                               “value”: {
                                   “type”: “string”
                               },
                               “type”: {
                                   “type”: “string”
                               }
                           }
                       }
                   }
                }
            }
        Body:
            {
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
                        type: 'normal'
                    }
                ],
                engines: [
                    {
                        label: '100Cv 1.8 Disel',
                        value: '100cv_1.8_diesel',
                        type: 'normal'
                    }
                ],
                transmission: [
                    {
                        label: 'Manual',
                        value: 'manual',
                        type: 'sport'
                    }
                ],
                finishes: [
                    {
                        label: 'Deportivo',
                        value: 'sport',
                        type: sport
                    }
                ],
                tires: [
                    {
                        label: 15 pulgadas,
                        value: 15',
                        type: 'normal'
                    }
                ],
                colors: [
                    {
                        label: 'Rojo',
                        value: 'red'
                    }
                ],
                colorsSport: [
                    {
                        label: 'Metalizado',
                        value: 'metal'
                    }
                ],
                extras: [
                    {
                        label: GPS,
                        value: 'gps',
                        type: 'sport'
                    },
                    {
                        label: 'Asientos de cuero',
                        value: 'leather_seats',
                        type: 'sport'
                    }
                ]
            }

<b>Customers POST api/customers</b>

    Request (application/json) 
        Schema
            {
                $schema": "http://json-schema.org/draft-04/schema#",
                "type": "object",
                "properties":{
                   "type": {
                       “type”: "string"
                   },
                   "bodyEngine”: {
                       “type”: “string”
                   },
                   “engine”: {
                       “type”: "string"
                   },
                   “transmission”: {
                       “type”: "string"
                   },
                   “finish”: {
                       “type”: "string"
                   },
                   “tires”: {
                       “type”: "string"
                   },
                   “color”: {
                       “type”: "string"
                   },
                   “colorSport”: {
                       “type”: "string"
                   },
                   “extras”: {
                       “type”: “array”,
                       “items”: {
                           “type”: “string”
                       }
                   },
                   comments: {
                       “type”: "string"
                   },
                   “cp”: {
                       “type”: "string"
                   },
                   “email”: {
                       “type”: "string"
                   }
                }
            }
       Body:
            {
                type: “sport”,
                bodyEngine: “sport”,
                engine: “250cv_2.2_oil”,
                transmission: “manual”,
                finish: “sport”,
                tires: “18”,
                color: “red”,
                extras: [“gps”, “leather_seats”, “xenon”, “sunroof”],
                cp: “28001”,
                email: “alguien@algo.com”
            }
            
    Response 200 (application/json)
    Response 400 (application/json)
                

<b>Instrucciones</b>
* Llamar al servicio GET /api/options para recuperar las opciones que estarán disponibles en el formulario
* Cada posición del array de cada opción es un objeto que tendrá las keys “label” y “value”. Además, podrá tener otra key “type” donde se informará de qué tipo es la opción
* El modelo, y por lo tanto los campos del formulario, empiezan con cada campo establecido al value del objeto de la primera posición de cada opción. Este será el valor por defecto. El valor por defecto del campo type es “normal”
* La etiqueta de los campos en el formulario vendrá informada en la key “label” de cada objeto
* Al inicio, todos los campos del formulario estarán habilitados
* El campo colorSport estará oculto.
* Al cambiar el campo type desde el formulario, si la opción elegida es “sport”, se hará lo siguiente:
    * Deberán establecerse los valores del modelo bodyEngine, engine, transmission, finish, tires, color y extras con las respectivas opciones que sean de tipo “sport”
    * Se deshabilitarán los campos bodyEngine, engine, transmission, finish, tires, color y se mostrará el campo colorSport
* Si cambiamos el campo type a la opción de tipo “normal”, se hará lo siguiente: 
    * Se mantendrá la selección actual de los campos
    * Se habilitarán los campos bodyEngine, engine, transmission, finish, tires, color y extras
    * Se ocultará el campo colorSport
* El formulario tendrá un botón que, al hacer clic sobre él, enviará al servicio POST /api/customers los datos del modelo.
    * Mientras se envían los datos y se espera a la respuesta, aparecerá una modal con el texto “Enviando...”
    * Si todo va bien, el texto de la modal pasará a ser “Hemos recibido correctamente tu solicitud” y se reseteará el formulario con los valores por defecto
    * En caso contrario el texto de la modal será “Ocurrió un error al procesar el formulario”, conservando el formulario con las opciones seleccionadas
    * Tanto si va bien como si va mal la solicitud al servicio, abajo de la modal habrá un botón que, al hacer clic, cerrará la modal

