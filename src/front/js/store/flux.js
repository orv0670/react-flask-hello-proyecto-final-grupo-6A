const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			pymes: [],
			location: [],
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
				fetch("https://3001-aquamarine-cat-14f9pgld.ws-us03.gitpod.io/api/pymes")
					.then(res => res.json())
					.then(data => {
						return setStore({ pymes: data });
					});
				console.log(getStore().pymes);
			},
			fetchEntity: id => {
				fetch(`https://3001-aquamarine-cat-14f9pgld.ws-us03.gitpod.io/api/pymes/${id}`)
					.then(res => res.json())
					.then(data => {
						return setStore({ pymeEntity: data });
					});
				console.log(getStore().pymeEntity);
			},
			loadLocation: async () => {
				const url =
					"http://overpass-api.de/api/interpreter?data=[out:json][timeout:25];area(3600287667)-%3E.searchArea;(node(3982520161)(area.searchArea);way(3982520161)(area.searchArea);relation(3982520161)(area.searchArea);node(3982524316)(area.searchArea);way(3982524316)(area.searchArea);relation(3982524316)(area.searchArea);node(3982524305)(area.searchArea);way(3982524305)(area.searchArea);relation(3982524305)(area.searchArea);node(3982523602)(area.searchArea);way(3982523602)(area.searchArea);relation(3982523602)(area.searchArea);node(2240142613)(area.searchArea);way(2240142613)(area.searchArea);relation(2240142613)(area.searchArea);node(2267880638)(area.searchArea);way(2267880638)(area.searchArea);relation(2267880638)(area.searchArea);node(830648533)(area.searchArea);way(830648533)(area.searchArea);relation(830648533)(area.searchArea);node(602660481)(area.searchArea);way(602660481)(area.searchArea);relation(602660481)(area.searchArea);node(2832329445)(area.searchArea);way(2832329445)(area.searchArea);relation(2832329445)(area.searchArea);node(3982522204)(area.searchArea);way(3982522204)(area.searchArea);relation(3982522204)(area.searchArea);node(832255135)(area.searchArea);way(832255135)(area.searchArea);relation(832255135)(area.searchArea);node(2267916597)(area.searchArea);way(2267916597)(area.searchArea);relation(2267916597)(area.searchArea);node(3982525328)(area.searchArea);way(3982525328)(area.searchArea);relation(3982525328)(area.searchArea);node(8530326042)(area.searchArea);way(8530326042)(area.searchArea);relation(8530326042)(area.searchArea);node(1392854165)(area.searchArea);way(1392854165)(area.searchArea);relation(1392854165)(area.searchArea);node(3982524277)(area.searchArea);way(3982524277)(area.searchArea);relation(3982524277)(area.searchArea););out%20body;%3E;out%20skel%20qt;";
				const respuesta = await fetch(url);
				const data = await respuesta.json();
				setStore({ location: data });
				console.log(getStore().location);
			}
		}
	};
};

export default getState;
