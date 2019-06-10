const selectedPhotos = []; 

function getSelectedPhotos(categoriesSelected)
{       
    // console.log("GetSelected fotos in gallery");
    // console.log(categoriesSelected);
    if(categoriesSelected.length == 0)
        return;

  selectedPhotos.length = 0;    

  for (let i = 0; i < categoriesSelected.length; i++) {
   
    AddPhotosInFolder(categoriesSelected[i].id+"/1_1",1,1,categoriesSelected[i].folder_1_1);
    AddPhotosInFolder(categoriesSelected[i].id+"/3_2",3,2,categoriesSelected[i].folder_3_2);
    AddPhotosInFolder(categoriesSelected[i].id+"/2_3",2,3,categoriesSelected[i].folder_2_3);            
    AddPhotosInFolder(categoriesSelected[i].id+"/4_3",4,3,categoriesSelected[i].folder_4_3);      
    AddPhotosInFolder(categoriesSelected[i].id+"/3_4",3,4,categoriesSelected[i].folder_3_4);      
    AddPhotosInFolder(categoriesSelected[i].id+"/5_4",5,4,categoriesSelected[i].folder_5_1);    
  } 

  shuffle(selectedPhotos);
};

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function changeDimensions(indexToChange,_width,_heigth)
{       
  indexToChange.forEach((element)=>
  {     
    selectedPhotos[element].width = _width;
    selectedPhotos[element].height = _heigth;      
  });    
}  

function AddPhotosInFolder(folder,_width,_height,_number_of_photos)
{            
  for (let index = 0; index < _number_of_photos; index++) {            
    let indexPhoto = index+1;
    selectedPhotos.push(
    {        
      src: 'img/' + folder + "/"+ "Foto" + indexPhoto + ".jpg",               
      width: _width,
      height: _height
    }    
    )
  }  
}


export { selectedPhotos, getSelectedPhotos};