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

// todos functions

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
    const done = document.getElementById(`done-checkbox-${tid}`).checked;

    const url = `/todos/toggle_done/${tid}`;

    fetch(url, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ done: done }),
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

// tasks functions

function delete_task(taskId) {
    const url = `/todos/delete_task/${taskId}`;

    if(confirm("Do you want to delete the task?")) {
        fetch(url, {
            method: 'DELETE'
        }).then(response => {
            if (response.ok) {
                console.log('Operacion exitosa');
                window.location.href = '/todos/';
            } else {
                console.log("We couldn't delete the task");
            }
        }).catch(error => {
            console.error(`Error: ${error}`);
        })
    }
}

function update_title(taskId) {
    const title = document.getElementById(`task-title-${taskId}`).value;
    const url = `/todos/update_title/${taskId}`;

    fetch(url, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title: title })
    }).then(response => {
        if(response.ok) {
            console.log("Succes");
            window.location.href = '/todos/';
        } else {
            console.log("Failed");
        }
    }).catch(error => {
        console.error(`Error: ${error}`);
    })
}

function update_content(taskId) {
    const content = document.getElementById(`task-content-${taskId}`).value;
    const url = `/todos/update_content/${taskId}`;

    fetch(url, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content: content })
    }).then(response => {
        if(response.ok) {
            console.log("Succes");
            window.location.href = '/todos/';
        } else {
            console.log("Failed");
        }
    }).catch(error => {
        console.error(`Error: ${error}`);
    })
}