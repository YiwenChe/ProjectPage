// get container element from html
const container = document.getElementById('container')


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
function navigate(card){
    const params = {
        target_url: card['Link']
    };
    let qs = Object.keys(params)
        .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
        .join('&');
    let result_url = 'http://localhost:2333/open_default_browser?' + qs

    //window.location.href = "http://www.google.com";
    if (card["NewPage"] === true) {
        $.ajax
        ({
            type: "GET",
            url:result_url,
            crossDomain: true,
            async: false,
            success: function () {
            }
        })
    }
    else{
        if(card['Link']!= null){
            window.location.href = card['Link'];
        }
    }

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
                        cardWrapper.classList.add(card['Type'].split(' ')[0].toUpperCase())
                        let link = createNode('a', 'link')
                        $(link).click( function(e) {e.preventDefault(); navigate(card); return false; });
                        link.href = card['Link']

                        let image = createNode('img', 'image')
                        if (card['Image']) {
                            image.src = card['Image']
                        } else {
                            image.src = 'https://d1embwjxo27ph2.cloudfront.net/actions/nmcImages/image/generateImage?v=5&anchor=top&height=450&width=800&path=%2FRobinson_Hero_1.jpg'
                        }

                        let text = createNode('div', 'text')
                        let title = createNode('h3', 'title')
                        title.innerHTML = card['Title']

                        let des = createNode('p', 'des')
                        des.innerHTML = card['Description']


                        append(text, title)
                        append(text, des)
                        append(link, image)
                        append(link, text)
                        append(cardWrapper, link)
                        append(container, cardWrapper)
                    })
                }
            })
        })
    }



// execution
//setProjectId('2677-1-000')
//setUrl('https://raw.githubusercontent.com/YiwenChe/ProjectPage/main/sample.json')
//loadPage()

