function buildSaveArray(){
    //...
    var saveArray = [];
    save_options(saveArray)
}
function save_options(saveArray){

}


// Saves options to chrome.storage
function save_options() {
    keywordsArray: saveArray
  chrome.storage.sync.set({}, function () {
    // Update status to let user know options were saved.
    var status = document.getElementById("status");
    status.textContent = "Options saved.";
    setTimeout(function () {
      status.textContent = "";
    }, 750);
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  chrome.storage.sync.get({
    keywordsArray: []
  }, function(items) {
    buildOptDisplay(items.keywordsArray)
  });
}

function buildOptDisplay(items){
    for (var i = 0; i < items.length; i++){
         
    }
}

function createRowWithOptions(obj){
    var keywordRow = document.querySelector('.keyword-row').innerHTML;
    //document.querySelector('.keywords-holder').innerHTML += keywordRow;
    var newRow = document.createElement('div');
    newRow.className = 'keyword-row';
    var timestamp = Date.now();
    newRow.dataset.id = timestamp;
    newRow.innerHTML = keywordRow;
    document.querySelector('.keywords-holder').appendChild(newRow);

    var newEle = document.querySelector('.keywords-holder .keyword-row[data-id="'+timestamp+'"]');
    newEle.querySelector('keyword input').value = obj.keyword;
    newEle.querySelector('type select').value = obj.type;
    if(obj.type == '1'){
        newEle.querySelector('.replace').style.display='block';
        newEle.querySelector('.replace input').value =obj.replace;
    }

}

// add listener to add keyword button
document.querySelector('.add-keyword').addEventListener('click', function () {
    var obj = {};
    obj.keyword = 'example';
    obj.type = '1';
    obj.replace = 'string';
    createRowWithOptions(obj)
  });

document.addEventListener("DOMContentLoaded", restore_options);
document.getElementById("save").addEventListener("click", buildSaveArray);
