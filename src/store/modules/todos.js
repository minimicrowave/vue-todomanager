import axios from 'axios';

const state = {
	todos: []
};

const getters = {
	allTodos: (state) => state.todos
};

const actions = {
	async fetchTodos({ commit }) {
		const { data } = await axios.get('http://jsonplaceholder.typicode.com/todos');
		commit('setTodos', data);
	},
	async addTodo({ commit }, title) {
		const { data } = await axios.post('http://jsonplaceholder.typicode.com/todos', {
			title,
			completed: false
		});

		commit('newTodo', data);
	},
	async deleteTodo({ commit }, id) {
		await axios.delete(`http://jsonplaceholder.typicode.com/todos/${id}`);
		commit('removeTodo', id);
	},
	async updateTodo({ commit }, updatedTodo) {
		const { data } = await axios.put(
			`http://jsonplaceholder.typicode.com/todos/${updatedTodo.id}`,
			updatedTodo
		);
		console.log(data)
		commit('updateTodo', data);
	},
	async filterTodos({ commit }, limit) {
		const { data } = await axios.get(`http://jsonplaceholder.typicode.com/todos?_limit=${limit}`);
		commit('setTodos', data);
	}
};

const mutations = {
	setTodos: (state, todos) => (state.todos = todos),
	newTodo: (state, newTodo) => (state.todos = [ newTodo, ...state.todos ]),
	removeTodo: (state, id) => (state.todos = state.todos.filter((todo) => todo.id !== id)),
	updateTodo: (state, updatedTodo) => {
		const index = state.todos.findIndex((todo) => todo.id === updatedTodo.id);
		if (index !== -1) state.todos.splice(index, 1, updatedTodo);
	}
};

export default { state, getters, actions, mutations };
