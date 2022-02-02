function dummyImgNameGenerator(max:number){
  let res = [];
  for(let i=0 ; i<max ; i++){
    res[i] = i+1+''
  }
  return res
}

export default function dummyArts(){
  return [
    {
      folderName: 'personal-art',
      name: 'Personal Art',
      imgNames: dummyImgNameGenerator(12)
    },
    {
      folderName: 'commission-art',
      name: 'Commission Art',
      imgNames: dummyImgNameGenerator(6)
    },
    {
      folderName: 'commission-art-anthro',
      name: 'Commission Art Anthro',
      imgNames: dummyImgNameGenerator(8)
    },
  ]
}