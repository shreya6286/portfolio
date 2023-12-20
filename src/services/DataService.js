import axios from 'axios';

const server_url = 'https://xpediolive.com/server_api';
const default_project_id = 'shreya';
const default_client_id = '83d48f16-c6e8-4913-824a-7f90ab38a761';

export async function callServerApi(api_name, data_jo, clause_jo, project_id, client_id, options) {
	let payload = {
		'api': api_name,
		'data': data_jo,
		'clause': clause_jo
	}
	if (!project_id)
		payload.project_id = default_project_id;
	if (!client_id)
		payload.client_id = default_client_id;

	if (project_id && project_id.length > 0)
		payload.project_id = project_id;

	if (client_id && client_id.length > 0)
		payload.client_id = client_id;

	if (options) {
		payload.options = options;
	}

	const res = await axios.post(server_url, payload);
	return res.data;
}

export function getBase64(file) {
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = () => {
            resolve(fileReader.result);
        }
        fileReader.onerror = (err) => {
            reject(err);
        }
    })
}