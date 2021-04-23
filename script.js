// get container element from html
const container = document.getElementById('container')
// let targetProject_id = "2677-1-000"
// const url = "https://raw.githubusercontent.com/YiwenChe/ProjectPage/main/sample.json"


// functions
function setProjectId(id) {
    return targetProject_id = id
}

function setUrl(url) {
    return targetUrl = url
}

function createNode(element, classname) {
    const newNode = document.createElement(element)
    newNode.classList.add(classname)
    return newNode
}

function append(parent, el) {
    return parent.appendChild(el)
}

function loadPage() {
    fetch(targetUrl)
        .then(response => response.json())
        .then(data => {
            // console.log(data)
            data.forEach(project => {
                if (project["Id"] === targetProject_id) {
                    project["Cards"].map(card => {
                        let cardWrapper = createNode('div', 'cardWrapper')
                        cardWrapper.classList.add(card['Type'].split(' ')[0])

                        let title = createNode('h3', 'title')
                        title.innerHTML = card['Title']

                        let image = createNode('img', 'image')
                        if (card['Image']) {
                            image.src = card['Image']
                        } else {
                            image.src = 'https://d1embwjxo27ph2.cloudfront.net/actions/nmcImages/image/generateImage?v=5&anchor=top&height=450&width=800&path=%2FRobinson_Hero_1.jpg'
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
    }



// execution
setProjectId('2677-1-000')
setUrl('https://raw.githubusercontent.com/YiwenChe/ProjectPage/main/sample.json')
loadPage()