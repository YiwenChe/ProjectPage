// variables
const container = document.getElementById('container')
const targetProject_id = "2635-2-000"
const url = "https://raw.githubusercontent.com/YiwenChe/ProjectPage/main/sample.json"

function createNode(element, classname) {
    const newNode = document.createElement(element)
    newNode.classList.add(classname)
    return newNode
}

function append(parent, el) {
    return parent.appendChild(el)
}

// fetch json
fetch(url)
    .then(response => response.json())
    .then(data => {
        // console.log(data)
        data.forEach(project => {
            if (project["Id"] === targetProject_id) {
                project["Cards"].map(card => {
                    let cardWrapper = createNode('div', 'cardWrapper')

                    let title = createNode('h3', 'title')
                    title.innerHTML = card['Title']

                    let image = createNode('img', 'image')
                    if (card['Image']) {
                        image.src = card['Image']
                    } else {
                        image.src = 'https://upload.wikimedia.org/wikipedia/commons/3/30/Kpflogo.jpeg'
                    }

                    let link = createNode('a', 'link')
                    link.href = card['Link']

                    let des = createNode('p', 'des')
                    des.innerHTML = card['Description']

                    append(link, image)
                    append(link, title)
                    append(link, des)
                    append(cardWrapper, link)

                    append(container, cardWrapper)
                })
            }
        })
    })