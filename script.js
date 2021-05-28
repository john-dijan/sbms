function yop(){
    document.getElementsByClassName('background')[0].style.display='none';
}

function och(){
    document.getElementsByClassName('background')[0].style.display='grid';
}

function bre(){
    let x=document.getElementsByClassName('nuw');
    let len=x.length;
    let bel=document.getElementsByClassName('kw').length;
    for (let i=0; i < len; i++){
        document.getElementsByClassName('nuw')[i].style.background='#3D3D9A';
    }
    for (let p=0; p < bel; p++){
        document.getElementsByClassName('kw')[p].style.color='white';
    }
}