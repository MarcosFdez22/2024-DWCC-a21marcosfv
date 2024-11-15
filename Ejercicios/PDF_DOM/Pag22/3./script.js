//3. Dado o seguinte código, ¿por que segue aparecendo o “Texto” despois de borrar a
//táboa?
//<table id="taboa">
//Texto
//<tr>
//<td>Test</td>
//</tr>
//</table>
//let taboa = document.getElementById("taboa");
//taboa.remove();

//Por que el texto no esta dentro de la etiqueta de la tabla
let taboa = document.getElementById("taboa");
taboa.remove();
