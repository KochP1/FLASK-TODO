function del_top(topId) {
    const url = `/todos/del_top/${topId}`;

    if (confirm('Are you sure you want to delete this list?')) {
        fetch(url, {
            method: 'DELETE'
        }).then(response => {
            if (response.ok) {
                console.log('Operaacion exitosa');
                window.location.href = "/todos/";
            } else {
                alert('We couldn´t delete the topic.');
            }
        }).catch(error => {
            console.error('Error:', error);
        });
    }
}

function update_topic(topid) {
    let name = document.getElementById(`topic-name-${topid}`).value;
    const url = `/todos/update_topic/${topid}`;

    fetch(url, {
        method : 'PATCH',
        headers: {
            'Content-Type': 'application/json',  // Indicar que el cuerpo es JSON
        },
        body: JSON.stringify({ name: name }),  // Enviar el valor del input
    }).then(response => {
        if (response.ok) {
            window.location.href = '/todos/';  // Redirigir después de la actualización
        } else {
            alert('We couldn´t update the topic');
        }
    }).catch(error => {
        console.error(error);
    })
}

function update_todo(tid) {
    // Obtener el valor del input
    let description = document.getElementById(`description-input-${tid}`).value;

    // Construir la URL
    const url = `/todos/update_todo/${tid}`;

    // Enviar la solicitud PATCH con el cuerpo en formato JSON
    fetch(url, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',  // Indicar que el cuerpo es JSON
        },
        body: JSON.stringify({ description: description }),  // Enviar el valor del input
    })
    .then(response => {
        if (response.ok) {
            console.log('Item modificado');
            window.location.href = '/todos/';  // Redirigir después de la actualización
        } else {
            alert('We couldn´t update the todo');
        }
    })
    .catch(error => {
        console.error(`Error: ${error}`);
    });
}

function delete_todo(tid) {
    let url = `/todos/delete_todo/${tid}`;

    if (confirm("Are you sure yout want to delete this item?")) {
        fetch(url, {
            method : 'DELETE'
        }).then(response => {
            if (response.ok){
                console.log('Operacion exitosa');
                window.location.href = '/todos/';
            }
        }).catch(error => {
            console.error(`Error: ${error}`);
        })
    }
}

function toggleDone(tid) {
    // Obtener el estado del checkbox
    const done = document.getElementById(`done-checkbox-${tid}`).checked;

    // Construir la URL
    const url = `/todos/toggle_done/${tid}`;

    // Enviar la solicitud PATCH con el cuerpo en formato JSON
    fetch(url, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ done: done }),  // Enviar el estado del checkbox
    })
    .then(response => {
        if (response.ok) {
            console.log('Estado "done" actualizado');
        } else {
            alert('No se pudo actualizar el estado "done"');
        }
    })
    .catch(error => {
        console.error(`Error: ${error}`);
    });
}