# Buen día!!! 
## Proyecto Backend finware
Dentro de este repositorio encontraras el api para las inversiónes de clientes, lamentablemente no puedo pasar la base de datos en la que estuve trabajando, sin embargo, si es necesario podriamos hacer una llamada para mostrarles el funcionamiento del api con la base de datos integrada, de cualquier manera les adjunto los códigos para crearla en mariaDB por si gustan probarlo completo.
También en el apartado de database está el archivo "dbconnector" en el cual vienen las credenciales y la configuración para la misma.

CREATE TABLE nombre_tabla (
       id INT AUTO_INCREMENT PRIMARY KEY,
       nombres VARCHAR(100) NOT NULL,
       apellidos VARCHAR(150) NOT NULL,
       rfc VARCHAR(13) NOT NULL,
       inversion DECIMAL(10, 2)
     )