let Img1 = document.querySelector('.Img1')
let Img2 = document.querySelector('.Img2')
let Img3 = document.querySelector('.Img3')
let Img4 = document.querySelector('.img4')

let activeImg = document.querySelector('.activeImg')


Img1.addEventListener('click', () => {
   let src = activeImg.getAttribute('src')
   let src2 = Img1.getAttribute('src')
   activeImg.setAttribute('src', src2)
   Img1.setAttribute('src', src)
})
Img2.addEventListener('click', () => {
   let src = activeImg.getAttribute('src')
   let src2 = Img2.getAttribute('src')
   activeImg.setAttribute('src', src2)
   Img2.setAttribute('src', src)
})
Img3.addEventListener('click', () => {
   let src = activeImg.getAttribute('src')
   let src2 = Img3.getAttribute('src')
   activeImg.setAttribute('src', src2)
   Img3.setAttribute('src', src)
})
Img4.addEventListener('click', () => {
   let src = activeImg.getAttribute('src')
   let src2 = Img4.getAttribute('src')
   activeImg.setAttribute('src', src2)
   Img4.setAttribute('src', src)
})