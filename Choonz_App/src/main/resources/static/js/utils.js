function nullable(x) {
    return (x === "") ? null : x;
}

const search = () => {
    let input = document.querySelector("#search");
    let filter = input.value.toUpperCase();
    let nodes = Array.from(document.querySelectorAll(".search-tag"));
    
    nodes.forEach(div => {
        let name = div.childNodes[1].textContent;
        if (name.toUpperCase().indexOf(filter) > -1) {
            div.toggleAttribute("hidden", false);
        } else {
            div.toggleAttribute("hidden", true);
        }
    })
}

export { nullable, search };