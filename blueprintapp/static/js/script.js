function deleteTopic(event) {
    event.preventDefault();  // Evita que el formulario se envíe de manera tradicional

    // Obtén el topid del atributo data-topid del formulario
    const form = event.target;
    const topid = parseInt(form.getAttribute('data-topid'));
    console.log(typeof(topid))

    // Construye la URL dinámicamente con el topid
    const url = `/delete_topic/${topid}`;

    // Envía la solicitud DELETE usando fetch
    fetch(url, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then(response => {
        if (response.ok) {
            // Redirige después de eliminar
            window.location.href = "{{ url_for('todos.index') }}";
        } else {
            console.log(response)
            alert('We couldn´t delete the topic.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
}