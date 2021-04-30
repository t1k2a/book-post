<template>
    <div class="books">
        <h1>Books</h1>
        <ul>
            <li v-for="{ id, name } in list" :key="id">
                <router-link :to="`/book/${ id }`">{{ name }}</router-link>
            </li>
        </ul>
     </div>
</template>

<script>
import  books  from '@/api/books'

export default {
    computed: {
        list: () => books.fetch()
    }
}
// 本の詳細ページを作る
</script>
