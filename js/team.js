let imgBox = document.querySelectorAll('.imgBox');
let contentBox = document.querySelectorAll('.contentBox');

for (let i = 0; i < imgBox.length; i++) {
    imgBox[i].addEventListener("click", function(){
        for (let i = 0; i < contentBox.length; i++) {
            contentBox[i].className = 'contentBox';
        }
        document.getElementById(this.dataset.id).className = 'contentBox active';

        for (let i = 0; i < imgBox.length; i++){
            imgBox[i].className='imgBox';
        }
        this.className = 'imgBox active';
    })

}