var area = document.getElementById('area');
var input = document.getElementById('input');

input.onchange = function(event){
    var input = this;
 
    // if (input.files && input.files[0]) {
    //     var reader = new FileReader();
    
    //     reader.onload = function(e) {
        
    //     }
 
    //     reader.readAsDataURL(input.files[0]);
    // }

    previewFile(input.files);
};

area.addEventListener('dragenter', function(event){
    area.classList.add('show');
    console.log('dragenter');
    event.preventDefault();
});

area.addEventListener('dragleave', function(event){
    area.classList.remove('show');
    console.log('dragleave');
    event.preventDefault();
});

area.addEventListener('dragover', function(event){
    console.log('dragover');
    event.preventDefault();
});

area.addEventListener('drop', function(event){
    console.log('drop');

    let dt = event.dataTransfer;
    let files = dt.files;
  
    previewFile(files);

    event.preventDefault();
});

function previewFile(files){
    if(input.files && input.files[0]){
        ([...files]).forEach(function(file){
            let reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onloadend = function() {
              let img = document.createElement('img');
              img.src = reader.result;
              area.appendChild(img);
            }
        });
    } 
}

function handleFiles(files) {
    
}
