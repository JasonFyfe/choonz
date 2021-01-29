const create = async (url, data) => {
    try {
        let response = await fetch(url, {
            method: 'post',
            headers: {
                'content-type': 'application/json; charset=UTF-8'
            },
            body: JSON.stringify(data)
        });
        let model = await response.json();
        return model;
    } catch (err) {
        console.log(err);
    }
}

const readOne = async (url, id) => {
    try {
        let response = await fetch(url + `/${id}`);
        let model = await response.json();
        return model;
    } catch (err) {
        console.log(err);
    }
}

const readAll = async (url) => {
    try {
        let response = await fetch(url);
        let model = await response.json();
        return model;
    } catch (err) {
        console.log(err);
    }
}

const update = async (url, id, data) => {
    console.log(data);
    try {
        let response = await fetch(url + `/${id}`, {
            method: 'put',
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            },
            body: JSON.stringify(data)
        });
        let model = await response.json();
        return model;
    } catch (err) {
        console.log(err);
    }
}

const remove = async (url, id) => {
    try {
        await fetch(url + `/${id}`, {
            method: 'delete',
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            }
        });
        return;
    } catch (err) {
        console.log(err);
    }
}

export { create, readOne, readAll, update, remove };