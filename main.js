

const image = (id , url) => {
    const sel = document.querySelector(`#${id}`)
    sel.src = url
}


image ('image-2' , 'https://i.redd.it/54awv7jxe4e41.jpg')
image ('image-3' , 'https://i.redd.it/54awv7jxe4e41.jpg')
image ('image-1' , 'https://i.redd.it/54awv7jxe4e41.jpg')


const word = (id,style ) => {
    const sel = document.querySelector(`#${id}`).style.textDecoration = style
}

word ('a-1','line-through')



removeLast = (element) => {
const list = document.querySelector(`${element}:last-child`)
if(list.parentNode){
    list.parentNode.removeChild(list)
}
}
removeLast ('li')
removeLast ('li')


append = (element) => {
    const list = document.querySelector('ul')
list.append(element)

}

const img = document.createElement('img')
img.src = 'https://i.redd.it/54awv7jxe4e41.jpg'
append (img)



h30 = (element) => {
const source = document.querySelector(`#${element}`).style.height = "30px"

}

h30 ('image-1')

invis = (id) => {
    const prop = document.querySelector(`#${id}`)
prop.classList.add('invisible')
}

invis ('image-2')


fontSize = (id , size) => {
    const element = document.querySelector(`#${id}`)
    element.style.fontSize = size +'px'
}
fontSize ('heading','20')

liText = (text) => {

const newLi = document.createElement('li')
newLi.innerText = text

return newLi
}


const blah = liText('GG BRAH')

append (blah)

headText = (size , text) => {
const newh = document.createElement(`h${size}`)
newh.innerText = text
return newh
}


const blahBlah = headText(1,'GLWP')

append (blahBlah)