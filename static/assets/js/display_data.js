function display(id, temp) {
    Breed = ['Boxer', 'Bulldog', 'Cocker', 'German Sheperd', 'Labrador', 'Maltese', 'Poodle', 'Pug']
    Found_at = ['Germany', 'UK', 'USA', 'Germany', 'Canada, USA', 'Italy & Malta', 'France & Germany', 'China']
    height = [23, 14, 7, 24, 23, 9, 15, 12]
    weight = [28, 24, 11, 31, 29, 4, 25, 8]
    Age = [11, 9, 13, 12, 11, 17, 14, 14]
    litterSize = [6, 4, 6, 8, 8, 4, 3, 3]
    showurl = ['boxer', 'bulldog', 'american-cocker-spaniel', 'german-shepherd-dog', 'labrador-retriever', 'maltese-dog', 'poodle', 'pug']

    //check whether previous predicted result is still there or not
    var element = document.querySelector('#edit');
    if (element) {
        element.remove();
    }
    // Create the main container element
    var container = document.createElement("div");
    container.id = "edit";
    container.className = "info";

    // Create the image element
    var image = document.createElement("img");
    image.className = "newinfoimage";
    image.src = temp;
    image.alt = "Something went wrong";

    // Create the data container element
    var dataContainer = document.createElement("div");
    dataContainer.className = "newinfodata";

    // Create the unordered list element
    var ul = document.createElement("ul");

    // Create an array of data items
    var dataItems = [
        { label: "Breed : ", value: Breed[id] },
        { label: "Origin : ", value: Found_at[id] },
        { label: "Height : ", value: `${height[id]} inches` },
        { label: "Weight : ", value: `${weight[id]} kg` },
        { label: "Age : ", value: `${Age[id]} years` },
        { label: "Litter Size : ", value: `${litterSize[id]} puppies` },
    ];

    // Create list items for each data item
    dataItems.forEach(function (item) {
        var li = document.createElement("li");
        li.className = "newinfodata1";
        li.innerHTML = "<b>" + item.label + "</b>" + item.value;
        ul.appendChild(li);
    });
    const btn = document.createElement('button');
    btn.innerHTML = "Get more info";
    btn.id = "details";
    btn.onclick = () => { window.open('https://www.dogbreedslist.info/all-dog-breeds/' + showurl[id] + '.html', "_blank"); };
    // Append the elements to their respective parents
    dataContainer.appendChild(ul);
    dataContainer.appendChild(btn);
    container.appendChild(image);
    container.appendChild(dataContainer);
    // Append the main container to the document body
    document.body.appendChild(container);
}