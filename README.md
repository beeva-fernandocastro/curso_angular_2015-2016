# Curso_angular_2015-2016

**KATA 1 (NIVEL BÁSICO)**

**Contenido del bloque teórico:**

* Introducción
    
* Data binding
    
* Controladores
    
* Ámbitos
    
* Inyección de dependencias
    
* Directivas nativas
    
* Buenas prácticas
    

**Contenido del bloque práctico:**

Comenzaremos un ejercicio básico para construir un formulario, utilizando para ello las directivas nativas imprescindibles de Angular. Se trabajará de forma individual.


**KATA 2 (NIVEL INTERMEDIO)**

**Contenido del bloque teórico:**

* Control de errores (formularios)
    * Estados
    * Tipos de errores
    
* Directivas personalizadas
    * ¿Qué son?
    * Nomenclatura
    * Definición desde la plantilla
    * Propiedades de configuración

**Contenido del bloque práctico:**

Partiendo del ejercicio realizado en la kata 1, subiremos un poco el nivel de dificultad: añadiremos errores a los campos del formulario, y construiremos una directiva personalizada que servirá como componente para agilizar el desarrollo.


**KATA 3 (NIVEL AVANZADO)**

**Contenido del bloque teórico:**

* Servicios
    * Nativos
    * Personalizados (provider, constant, value, factory, service)
    
* Filtros
    * Nativos
    * Personalizados

* Transclusión

* Herencia de directivas


**Contenido del bloque práctico:**

Partiendo del ejercicio realizado en la kata 2, construiremos el modelo de datos mediante una clase, utilizando para ello servicios. Además, añadiremos filtros en diferentes partes del formulario.



**REQUISITOS TECNOLÓGICOS**

En este repositorio se proporcionará el esqueleto del cual partir para realizar el ejercicio 1. Los alumnos deberán hacerse un Fork de dicho esqueleto.
Para los siguientes ejercicios se partirá siempre del ejercicio anterior del propio alumno. Aún así, se entregará la solución de cada ejercicio para poder partir de ahí si se desea.

Para poder asistir a las katas de Angular será necesario:
* Traer el ordenador
* Tener instalados los siguientes programas:
    * Git
    * Grunt
    * NPM (una vez instalado, npm install)
    * Bower (una vez instalado, bower update)
    * Node

Seguiremos los siguientes pasos para lanzar la aplicación:
* Hacemos un fork (desde la aplicación Web de Git) para copiar el repositorio en nuestra cuenta
* Desde consola de comandos hacemos un clone del repositorio a nuestra carpeta local (git clone https://github.com/beeva-xxxx/curso_angular_2015-2016.git)
* Accedemos a la carpeta donde se encuentra el fichero **bower.json**
* Cambiamos de rama a la que corresponda según la kata (git branch kata-levelx)
* Arrancamos el servidor con **grunt serve**
* En cualquier navegador: **http://localhost:9000**
