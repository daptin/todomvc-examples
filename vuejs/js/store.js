/*jshint unused:false */
(function (exports) {
	'use strict';
	// Bootstrap
	const endpoint = "/api/"

	// Define Model
	var jsonApi = {
		findAll: function (typeName, options) {
			return axios({
				url: endpoint + typeName,
				body: options
			});
		},
		find: function (typeName, id) {
			return axios({
				url: endpoint + typeName + "/" + id
			});
		},
		create: function (typeName, params) {
			return axios({
				url: endpoint + typeName,
				data: {
					data: {
						type: typeName,
						attributes: params
					}
				},
				method: "POST"
			})
		},
		update: function (typeName, params) {
			return axios({
				url: endpoint + typeName + "/" + params.id,
				data: {
					data: {
						type: typeName,
						id: params.id,
						attributes: params
					}
				},
				method: "PATCH"
			})
		},
		destroy: function (typeName, id) {
			return axios({
				url: endpoint + typeName + "/" + id,
				method: "DELETE"
			})
		}
	}
	exports.todoStorage = {
		getAll(options) {
			return jsonApi.findAll("todo", options);
		},
		get(id) {
			return jsonApi.find("todo", id);
		},
		create(todo) {
			return jsonApi.create("todo", todo);
		},
		update(todo) {
			return jsonApi.update("todo", todo);
		},
		delete(id) {
			return jsonApi.destroy("todo", id);
		}
	};

})(window);
