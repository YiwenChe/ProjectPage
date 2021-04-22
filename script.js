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
        console.log(data)
        data.forEach(project => {
            if (project["Id"] === targetProject_id) {
                project["Cards"].map(card => {
                    let cardWrapper = createNode('div', 'cardWrapper')

                    let title = createNode('h3', 'title')
                    title.innerHTML = card['Title']

                    let image = createNode('img', 'image')
                    image.src = card['Image']

                    let link = createNode('a', 'link')
                    link.href = card['Link']

                    let des = createNode('p', 'des')

                    append(cardWrapper, link)
                    // append(link, title)
                    // append(link, image)
                    // append(link, link)
                    // append(link, des)


                    console.log(cardWrapper)
                })
            }
        })
    })