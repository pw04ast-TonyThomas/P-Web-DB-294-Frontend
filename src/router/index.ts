import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import WorksView from '../views/WorksView.vue'
import AboutView from '../views/AboutView.vue'
import AddBookView from '../views/AddBookView.vue'
import BooksView from '@/views/BooksView.vue'
import BookView from '@/views/BookView.vue'
<<<<<<< HEAD
import RemoveBook from '@/views/RemoveBook.vue'
=======
import BookModify from '@/views/BookModify.vue'
>>>>>>> 7f6be4eb61deff0cc4e545ed965a783e0fc04144

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/books',
      name: 'books',
      component: BooksView,
    },
    {
      path: '/book/:id',
      name: 'book',
      component: BookView,
      props: true,
    },
    {
      path: '/add-book',
      name: 'add-book',
      component: AddBookView,
    },
    {
<<<<<<< HEAD
      path: '/remove-books',
      name: 'remove',
      component: RemoveBook,
=======
      path: '/modify/:id',
      name: 'modify',
      component: BookModify,
>>>>>>> 7f6be4eb61deff0cc4e545ed965a783e0fc04144
    },
  ],
})

export default router
