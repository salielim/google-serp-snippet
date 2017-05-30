// On keyUp, check & preview Title
function titleCheckPreview(){
       checkTitleLength();
       previewTitle();
}

// Title character count more than 70
function checkTitleLength() {
 var strTextTitle = title.value;
 strTextTitle = strTextTitle.replace(/^\s+|\s+$/g,"");

 if(strTextTitle.length > 70) {
  title.style.backgroundColor = "#F88379";
 } else {
  title.style.backgroundColor = "#ffffff";
 }
}

// Title SERP Preview
function previewTitle(){
  var inputBox = document.getElementById('title');
  document.getElementById('seoTitle').innerHTML = inputBox.value;
}

// On keyUp, check & preview Meta Description
function metaCheckPreview(){
       checkMetaLength();
       previewMeta();
}

// Meta Description count more than 150
function checkMetaLength() {
 var strTextMeta = description.value;
 strTextMeta = strTextMeta.replace(/^\s+|\s+$/g,"");

 if(strTextMeta.length > 150) {
  description.style.backgroundColor = "#F88379";
 } else {
  description.style.backgroundColor = "#ffffff";
 }
}

// Meta Description SERP Preview
function previewMeta(){
  var inputBox = document.getElementById('description');
  document.getElementById('metaDescription').innerHTML = inputBox.value;
};