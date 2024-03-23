import sendRequest from './send-request';

const BASE_URL = '/api/notes';

export async function getNotes() {
    return sendRequest(BASE_URL);
}

export async function createNote(noteText) {
    return sendRequest(BASE_URL, 'POST', {
        text: noteText
    });
}

export async function deleteNote(id) {
    return sendRequest(`${BASE_URL}/${id}`, 'DELETE');
}