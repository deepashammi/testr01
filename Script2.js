// JavaScript source code
<html>
    <head></head>
    <body>
        <form name="calculator">
            <table>
                <tr>
                   <td>
                        <input type="text" name="display" id="display" disabled>
                   </td>        
                </tr>
                    <tr>
                        <td><input type="button" name="one" value="1" onclick="calculator.display.value +='1'"></td>
                        <td><input type="button" name="two" value="2" onclick="calculator.display.value +='2'"></td>
                    </tr>
             </table>
        </form>
     </body>               
