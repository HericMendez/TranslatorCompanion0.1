function clearAll() {

    var n = confirm("Clear all input fields?");
    if (n == true) {
        document.getElementById("original-text").value = "";
        document.getElementById("edited-text").value = "";
        document.getElementById("show-result").innerHTML = "";
        window.alert("All clear, Boss!");
    }

}

function clearString(text) {
    document.getElementById(text).value = '';

}

function copyText(element) {
    var copyText = document.getElementById(element);
    copyText.select();

    document.execCommand("copy");
    alert(`The text:\n"${copyText.value}"\nwas copied to clipboard!`);
}


function stringSize() {
    var text1 = document.getElementById("original-text").value;
    var text2 = document.getElementById("edited-text").value;

    const checkBox = document.querySelector("#ignore-tag").checked;

    if(checkBox==true){
        var text1_trimmed = text1.replace(/(<([^>]+)>)/gi, "");
        var charCount1 = text1_trimmed.length;

        var text2_trimmed = text2.replace(/(<([^>]+)>)/gi, "");
        var charCount2 = text2_trimmed.length;
        
    }else{
        var charCount1 = text1.length;
        var charCount2 = text2.length;
    }

    var resultMsg = '';

    if (charCount1 < charCount2) {
        resultMsg = `Translation exceeds original text in ${charCount2 - charCount1} characters.`;
    } else if (charCount1 > charCount2) {
        resultMsg = `Smaller than original text in ${charCount1 - charCount2} characters.`;
    } else {
        resultMsg = `Translation equals the original number of characters.`
    }

    var maxChar = document.getElementById('max-char').value;
    var warningMsg = '';
    if (charCount2 > maxChar) {
        warningMsg = `WARNING! Translated text exceeds the character max. limit! 
        Please reduce output text in al least ${charCount2 - maxChar} characters.`
    } else {
        warningMsg = `The number of characters is within the max. limit.`;
    }

    /*window.alert(`Original: ${charCount1} characters\nEdited: 
    ${charCount2} characters\n${resultMsg}\n${warningMsg}`);*/

    var showResult = document.getElementById('show-result');
    showResult.innerHTML =
    `<div id="result">
        <fieldset>
            <legend><strong>Result:</strong></legend>
            </legend>
            Original: ${charCount1} characters <br>
            Edited: ${charCount2} characters <br>
            ${resultMsg}<br>
            <strong>${warningMsg}</strong><br>

        </fieldset>
        
</div>`;
}

