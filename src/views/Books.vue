<template>
    <!-- draggable属性(draggable=".item")を付与 -->
    <draggable v-model="books" draggable=".item" handle=".handle" :animation="300">
        <!-- ドラッグ可能にするためにclass属性(class="item")を付与 -->
        <v-col v-for="{ id, name } in list" :key="id" cols="auto" class="item">
            <router-link :to="`/book/${ id }`" class="handle">{{ name }}</router-link>
        </v-col>

        <!-- カード追加ボタン -->
        <!-- itemクラスが付与されていないためドラッグ不可 -->
        <v-col cols="auto">
            <v-btn>
                <v-icon><mdi-plus></mdi-plus></v-icon>
            </v-btn>
        </v-col>
    </draggable>
</template>

<script>
import  books  from '@/api/books'
import  draggable from 'vuedraggable'

export default {
    components: {
        draggable,
    },
    computed: {
        // list: () => books.fetch()
        list: {
            get() {
                return books.fetch()
            },
            set(value) {
                this.books.commit('updateList', value)
            },
        },
    },
}
// 本の詳細ページを作る
</script>
