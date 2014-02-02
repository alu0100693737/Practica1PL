Practica 1 de Procesadores de Lenguaje.

Hecha por Iván Garcia Campos

La siguiente practica utilizará HTML y Javascript para crear una aplicacion Web capaz de realizar la conversion entre Celsius y Farenheit.

Lo primero que se ha desarrollado es la interfaz en formato HTML. Se corresponde con los ficheros practica.html y global.css. Este ultimo fichero contiene el stylesheet de la pagina y se llamará en practica.html a través de un linker

A continuación se ha utilizado Javascript para la funcion calculate() que será capaz de hacer la conversión entre Celsius y Farenheit.

Teniendo ya desarrollada la aplicación, y viendo que se logra el resultado esperado, se han hecho unas ultimas modificaciones de estilo en los resultado para que la visualización fuera mucho mas vistosa.

La segunda parte de la practica buscaba el desarrollo de pruebas a partir de mocha y chai.

Para la realizacion de los test se ha tenido que instalar:

  nodejs
  npm
  mocha
  chai
  
Los comandos han sido los siguientes:
  
  Para instalar nodejs:
  
  sudo apt-get install python-software-properties

  sudo add-apt-repository ppa:chris-lea/node.js

  sudo apt-get update
  
  sudo apt-get install nodejs
  
  Para instalar npm:
  
sudo apt-get install npm
  
  Para instalar mocha y chai:
  
  npm install -g mocha

  npm install -g chai
  
  Para comprobar si estan instaladas todas las herramientas se utilizara:
  
  which y el nombre de la herramienta.

A continuacion creamos una carpeta llamada tests e incluimos en ella los correspondientes ficheros mocha, chai, html y tests. 

Hechas las implementaciones, solo queda darle formato al html y comprobar que las pruebas son correctas. 
  Iván García Campos PL 
