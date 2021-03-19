const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			pymes: [],
			pymeEntity: {}
		},

		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getMessage: () => {
				// fetching data from the backend
				fetch(process.env.BACKEND_URL + "/api/hello")
					.then(resp => resp.json())
					.then(data => setStore({ message: data.message }))
					.catch(error => console.log("Error loading message from backend", error));
			},

			//reset the global store

			loadPymeData: () => {
				fetch(process.env.BACKEND_URL + "/api/pymes")
					.then(res => res.json())
					.then(data => {
						return setStore({ pymes: data });
					});
			},
			fetchEntity: id => {
				fetch(process.env.BACKEND_URL + `/api/pymes/${id}`)
					.then(res => res.json())
					.then(data => {
						return setStore({ pymeEntity: data });
					});
			}
		}
	};
};

export default getState;
